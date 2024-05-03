import Todo from '#models/todo'
import { createTodoValidator, updateTodoValidator } from '#validators/todo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
  /**
   * Display a list of resource
   */
  async index({ auth }: HttpContext) {
    // return Todo.all()
    try {
      // Vérifier si l'utilisateur est correctement authentifié
      await auth.authenticate();

      // Récupérer l'utilisateur authentifié
      const user = auth.user!;
      
      // Récupérer l'ID de l'utilisateur
      const userID = user.id;
      
      // Récupérer les tâches de l'utilisateur
      const userTodos = await Todo.query().where('userID', userID).exec();
      
      return userTodos;
    } catch (error) {
      console.log(error);
      // Gérer les erreurs ici
      return {}; // Retourner une réponse vide en cas d'erreur 
    }
  }

  /**
   * Display form to create a new record
   */
  // async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    // try {
    //   const userId = auth.user!.id // Obtenez l'ID de l'utilisateur connecté
    //   // const payload = { ...request.only(['title', 'completed']), userID: userId }

    //   // const todo = await Todo.create(payload)
    //   // return response.created(todo)
    //   // console.log(payload);

    //   return response.ok("ok")
    // } catch (error) {
    //   return response.badRequest(error.messages)
    // }
    try {
      const payload = await request.validateUsing(createTodoValidator)
      const todo = await Todo.create(payload)
      return response.created(todo)
    } catch (error) {
      console.log(error)

      return response.badRequest(error.messages)
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ auth, params, request, response }: HttpContext) {
    // try {
    //   const userId = auth.user!.id // Obtenez l'ID de l'utilisateur connecté
    //   const todoId = params.id

    //   const todo = await Todo.findOrFail(todoId)

    //   if (todo.userID !== userId) {
    //     return response.forbidden({
    //       message: "Vous n'êtes pas autorisé à mettre à jour cette tâche.",
    //     })
    //   }

    //   const payload = request.only(['title', 'completed'])

    //   todo.merge(payload)
    //   await todo.save()

    //   return response.ok(todo)
    // } catch (error) {
    //   // Gérer les erreurs ici
    // }

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
    // try {
    //   const userId = auth.user!.id // Obtenez l'ID de l'utilisateur connecté
    //   const todoId = params.id

    //   const todo = await Todo.findOrFail(todoId)

    //   if (todo.userID !== userId) {
    //     return response.forbidden({ message: "Vous n'êtes pas autorisé à supprimer cette tâche." })
    //   }

    //   await todo.delete()

    //   return response.noContent()
    // } catch (error) {
    //   // Gérer les erreurs ici
    // }
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
