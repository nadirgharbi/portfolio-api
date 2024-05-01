import Todo from '#models/todo'
import { createTodoValidator, updateTodoValidator } from '#validators/todo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Todo.all()
  }

  /**
   * Display form to create a new record
   */
  // async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(createTodoValidator)
      const todo = await Todo.create(payload)
      return response.created(todo)
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const todoId = params.id

      // on cherhce l'id dans la base
      const todo = await Todo.findOrFail(todoId)
      const payload = await request.validateUsing(updateTodoValidator)

      // fusion des donnees avec les donnes deja presentes
      todo.merge(payload)

      todo.save()
      return response.ok(todo)
    } catch (error) {}
  }

  /**
   * Handle form submission for the delete action
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const todoId = params.id

      // on cherhce l'id dans la base
      const todo = await Todo.findOrFail(todoId)

      todo.delete()

      return response.noContent()
    } catch (error) {}
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
