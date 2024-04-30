/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const VeillesController = () => import('#controllers/veilles_controller')
const TodosController = () => import('#controllers/todos_controller')

router
  .group(() => {
    // route de test
    router.get('/test', async () => {
      return { test: 'test' }
    })

    // Endpoint Veilles
    router.get('/veilles', [VeillesController, 'index'])

    // Endpoint Todos
    router.get('/todos', [TodosController, 'index'])
  })
  .prefix('api')

  // router.get('/', () => {
  //   return "protected"
  // }).middleware('')
