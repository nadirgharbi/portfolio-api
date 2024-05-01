/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const VeillesController = () => import('#controllers/veilles_controller')
const TodosController = () => import('#controllers/todos_controller')
const AuthController = () => import('#controllers/auth_controller') // Tous les controller qui s'occuppent de l'inscription et de la connexion

router
  .group(() => {
    // test
    router.get('/test', async () => {
      return { test: "I'm a test" }
    })

    // Endpoints
    router.get('/veilles', [VeillesController, 'index'])
    router.get('/todos', [TodosController, 'index'])
    router.post('auth/register', [AuthController, 'register'])
    router.post('auth/login', [AuthController, 'login'])
    router.post('logout', [AuthController, 'logout']).use(middleware.auth())

    // Recois les informations de l'utilisateur connecté
    router
      .get('auth/me', async ({ auth, response }) => {
        try {
          const user = auth.getUserOrFail()
          return response.ok(user)
        } catch (error) {
          return response.unauthorized({ error: 'User not found' })
        }
      })
      .use(middleware.auth())
  })
  .prefix('api')
