'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({ request, response }) {
    const data = request.only(['email', 'password'])
    const user = await User.create(data)
    return response.created(user)
  }

  async login({ request, auth }) {
    const { email, password } = request.all()
    return await auth.attempt(email, password)
  }
}

module.exports = AuthController
