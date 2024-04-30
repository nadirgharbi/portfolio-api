import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.runSeeder(await import('../veille_seeder.js'))
    await this.runSeeder(await import('../todo_seeder.js'))
  }
}
