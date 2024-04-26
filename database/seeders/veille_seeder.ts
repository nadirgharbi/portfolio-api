import Veille from '#models/veille'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const veilles = await Veille.query().select('*')    

    await Veille.createMany(veilles)
  }
}