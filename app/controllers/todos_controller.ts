import Todo from '#models/todo'
import { updatePostValidator } from '#validators/todo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Todo.all()
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(updatePostValidator)
    console.log(payload)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ request }: HttpContext) {
    const payload = await request.validateUsing(updatePostValidator)
    console.log(payload)
  }

  /**
   * Show individual record
   */
  // async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
