import Todo from '#models/todo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class extends BaseSeeder {
  async run() {
    const todos = await Todo.query().select('*')    

    await Todo.createMany(todos)
  }
}