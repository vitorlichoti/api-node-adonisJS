'use strict'

const Client = use('App/Models/Client')

class ClientController {
  async index({ request, response }) {
    const clients = await Client.all()
    return response.json(clients)
  }

  async show({ params, response }) {
    const client = await Client.find(params.id)
    if (!client) {
      return response.status(404).json({ message: 'Client not found' })
    }
    await client.load('sales') // Assuming you have a relationship defined
    return response.json(client)
  }

  async store({ request, response }) {
    const data = request.only(['name', 'cpf'])
    const client = await Client.create(data)
    return response.status(201).json(client)
  }

  async update({ params, request, response }) {
    const client = await Client.find(params.id)
    if (!client) {
      return response.status(404).json({ message: 'Client not found' })
    }
    client.merge(request.only(['name', 'cpf']))
    await client.save()
    return response.json(client)
  }

  async destroy({ params, response }) {
    const client = await Client.find(params.id)
    if (!client) {
      return response.status(404).json({ message: 'Client not found' })
    }
    await client.delete()
    return response.status(204).json(null)
  }
}

module.exports = ClientController
