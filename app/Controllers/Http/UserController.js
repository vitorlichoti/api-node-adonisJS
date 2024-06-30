'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
const { validate } = use('Validator')

class UserController {
  /**
  * @swagger
  * /users:
  * post:
  *     tags:
  *       - Users
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           description: User payload
  *           schema:
  *             type: object
  *             properties:
  *               phone:
  *                 type: string
  *                 example: 'James Bond'
  *                 required: true
  *               email:
  *                 type: string
  *                 example: 'Bond007@example.com'
  *                 required: true
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: Success
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/User'
  */
  async signup({ request, response }) {
    const validation = await validate(request.all(), {
      email: 'required|email|unique:users,email',
      password: 'required|min:6'
    })

    if (validation.fails()) {
      return response.status(400).json({ message: validation.messages() })
    }

    const user = new User()
    user.email = request.input('email')
    user.password = await Hash.make(request.input('password'))
    await user.save()

    return response.status(201).json(user)
  }

  async login({ request, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = UserController
