'use strict'

const Phone = use('App/Models/Phone')

class PhoneController {
  async index({ response }) {
    const phones = await Phone.all()
    return response.json(phones)
  }

  async show({ params, response }) {
    const phone = await Phone.find(params.id)
    if (!phone) {
      return response.status(404).json({ message: 'Phone not found' })
    }
    return response.json(phone)
  }

  async store({ request, response }) {
    const data = request.only(['client_id', 'number'])
    const phone = await Phone.create(data)
    return response.status(201).json(phone)
  }

  async update({ params, request, response }) {
    const phone = await Phone.find(params.id)
    if (!phone) {
      return response.status(404).json({ message: 'Phone not found' })
    }
    phone.merge(request.only(['number']))
    await phone.save()
    return response.json(phone)
  }

  async destroy({ params, response }) {
    const phone = await Phone.find(params.id)
    if (!phone) {
      return response.status(404).json({ message: 'Phone not found' })
    }
    await phone.delete()
    return response.status(204).json(null)
  }
}

module.exports = PhoneController
