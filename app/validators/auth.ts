import vine from '@vinejs/vine'

/**
 * Permet de valider les données qui vont être transmise
 */

/**
 * @Login Validator
 */
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
  })
)

/**
 * @Register Validator
 */
export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3).maxLength(64),
    email: vine
      .string()
      .email()
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return !user
      }),
    password: vine.string().minLength(8).maxLength(32),
  })
)
