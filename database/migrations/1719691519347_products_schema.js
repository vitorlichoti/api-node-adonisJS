'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductsSchema
