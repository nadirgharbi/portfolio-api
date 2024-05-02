import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'todos'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('userID', 'user_id')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('user_id', 'userID')
    })
  }
}