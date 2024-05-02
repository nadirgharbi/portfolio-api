import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator, loginValidator } from '#validators/auth'
import User from '#models/user'

/**
 * @class Authentification Login / Register
 */
export default class AuthController {
  // Login
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.ok({
      token: token,
      ...user.serialize(),
    })
  }

  // Register
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)
    const user = await User.create(payload)
    const token = await User.accessTokens.create(user)

    return response.created({
      token: token,
      ...user.serialize()
    })
  }

  /**
   * Logout
   * @param auth : permet de recuperer l'utilisateur connecte pour avoir son token
   * @returns 'Logged out' si la deconnexion a bien ete pris en compte, 'Token not found' sinon.
   */
  async logout({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken.identifier
    if (!token) {
      // Si le token n'existe pas, alors on affiche un message d'erreur "Token not found"
      return response.badRequest({ message: 'Token not found' })
    }
    // Dans les autres cas, on supprime le token de l'utilisateur afin de le deconnecter
    await User.accessTokens.delete(user, token)
    return response.ok({ message: 'Logged out' })
  }
}
