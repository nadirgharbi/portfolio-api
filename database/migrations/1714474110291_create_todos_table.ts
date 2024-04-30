import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'todos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('title', 50).notNullable()
      table.boolean('completed').notNullable()

      table.datetime('created_at')
      table.datetime('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  } 
}