const express = require('express')
const router = express.Router()
const { UserController, ProductController } = require('../controllers')
const { authentication, authorization } = require('../middlewares/auth')

router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.use(authentication)

router.get('/', ProductController.find)

router.get('/:id', ProductController.findById)

router.post('/', ProductController.create)

router.put('/:id', authorization, ProductController.update)

router.delete('/:id', authorization, ProductController.delete)


module.exports = router;