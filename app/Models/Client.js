'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  phones() {
    return this.hasMany('App/Models/Phone')
  }

  sales() {
    return this.hasMany('App/Models/Sale')
  }
}

module.exports = Client
