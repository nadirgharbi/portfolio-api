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

router
  .group(() => {
    // route de test
    router.get('/test', async () => {
      return { test: 'test' }
    })

    router.get('/veilles', [VeillesController, 'index'])
  })
  .prefix('api')
