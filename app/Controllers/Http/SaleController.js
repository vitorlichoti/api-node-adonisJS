'use strict'

const Sale = use('App/Models/Sale')
const Product = use('App/Models/Product')
const Client = use('App/Models/Client')

class SaleController {
  async store({ request, response }) {
    const data = request.only(['client_id', 'product_id', 'quantity'])

    const client = await Client.find(data.client_id)
    if (!client) {
      return response.status(404).json({ message: 'Client not found' })
    }

    const product = await Product.find(data.product_id)
    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }

    const total_price = data.quantity * product.price

    const sale = await Sale.create({ ...data, total_price })
    return response.status(201).json(sale)
  }
}

module.exports = SaleController
