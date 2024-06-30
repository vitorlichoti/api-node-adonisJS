'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Authentication
Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.login')

// Clients
Route.get('/clients', 'ClientController.index').middleware(['auth'])
Route.get('/clients/:id', 'ClientController.show').middleware(['auth'])
Route.post('/clients', 'ClientController.store').middleware(['auth'])
Route.put('/clients/:id', 'ClientController.update').middleware(['auth'])
Route.delete('/clients/:id', 'ClientController.destroy').middleware(['auth'])

// Products
Route.get('/products', 'ProductController.index').middleware(['auth'])
Route.get('/products/:id', 'ProductController.show').middleware(['auth'])
Route.post('/products', 'ProductController.store').middleware(['auth'])
Route.put('/products/:id', 'ProductController.update').middleware(['auth'])
Route.delete('/products/:id', 'ProductController.destroy').middleware(['auth'])

// Sales
Route.post('/sales', 'SaleController.store').middleware(['auth'])

// Phones
Route.get('/phones', 'PhoneController.index').middleware(['auth'])
Route.get('/phones/:id', 'PhoneController.show').middleware(['auth'])
Route.post('/phones', 'PhoneController.store').middleware(['auth'])
Route.put('/phones/:id', 'PhoneController.update').middleware(['auth'])
Route.delete('/phones/:id', 'PhoneController.destroy').middleware(['auth'])
