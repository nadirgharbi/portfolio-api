import Veille from '#models/veille'
import { createVeillesValidator } from '#validators/veille'
import type { HttpContext } from '@adonisjs/core/http'
import fs from 'fs-extra'
import path from 'path'
import axios from 'axios'

export default class VeillesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Veille.all()
  }

  /**
   * Display form to create a new record
   */
  public async create({ request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(createVeillesValidator)

      // Récupérer l'image téléchargée depuis l'URL spécifiée
      const imageUrl = payload.image_url
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' })
      const imageBuffer = Buffer.from(imageResponse.data)

      // Enregistrer l'image dans le dossier "public/assets" du serveur
      const imageName = `image_${Date.now()}.jpg` // Renommez l'image si nécessaire
      const imagePath = path.join('public/assets', imageName)
      await fs.writeFile(imagePath, imageBuffer)

      // Enregistrer les données de la veille dans la base de données
      payload.image_url = `https://nadir-gharbi.fr/assets/${imageName}` // Mettez à jour l'URL de l'image dans la base de données
      const veille = await Veille.create(payload)

      return response.created(veille)
    } catch (error) {
      console.error(error)

      return response.badRequest(error.messages)
    }
  }
}
