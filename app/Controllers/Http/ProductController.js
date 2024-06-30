'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index({ response }) {
    const products = await Product.all()
    return response.json(products)
  }

  async show({ params, response }) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }
    return response.json(product)
  }

  async store({ request, response }) {
    const data = request.only(['name', 'price'])
    const product = await Product.create(data)
    return response.status(201).json(product)
  }

  async update({ params, request, response }) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }
    product.merge(request.only(['name', 'price']))
    await product.save()
    return response.json(product)
  }

  async destroy({ params, response }) {
    const product = await Product.find(params.id)
    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }
    product.is_deleted = true // Soft delete
    await product.save()
    return response.status(204).json(null)
  }
}

module.exports = ProductController
