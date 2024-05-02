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

    // Veilles
    router.get('/veilles', [VeillesController, 'index'])

    // Todos
    router.get('/todos', [TodosController, 'index'])
    router.post('/todos', [TodosController, 'store'])
    router.put('/todos/:id', [TodosController, 'update'])
    router.delete('/todos/:id', [TodosController, 'destroy'])

    // Auth
    router.post('auth/register', [AuthController, 'register'])
    router.post('auth/login', [AuthController, 'login'])
    router.post('auth/logout', [AuthController, 'logout']).use(middleware.auth())

    // Current User logged
    router
      .get('auth/user', async ({ auth, response }) => {
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
