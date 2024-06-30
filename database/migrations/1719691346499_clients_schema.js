'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up() {
    this.create('clients', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
