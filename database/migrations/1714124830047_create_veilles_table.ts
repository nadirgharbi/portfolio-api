import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'veilles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titre', 255).notNullable()
      table.string('description').notNullable()
      table.timestamp('date_publication').notNullable()
      table.string('auteur').notNullable()
      table.string('lien').notNullable()
      table.string('image_url').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}