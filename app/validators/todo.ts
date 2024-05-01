import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createTodoValidator = vine.compile(
  vine.object({
    title: vine.string().trim(),
    completed: vine.number(),
    // userID: vine.number() // Ajouter une validation pour l'ID de l'utilisateur

  })
)

/**
 * Validates the post's update action
 */
export const updateTodoValidator = vine.compile(
  vine.object({
    title: vine.string().trim().optional(),
    completed: vine.number().optional(),
    // userID: vine.number().optional() // Ajouter une validation pour l'ID de l'utilisateur

  })
)
