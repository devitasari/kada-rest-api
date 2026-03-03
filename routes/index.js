const express = require('express')
const router = express.Router()
const { UserController, ProductController } = require('../controllers')
const { authentication, authorization } = require('../middlewares/auth')
const passport = require('passport')

router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), UserController.loginGoogle)

// router.get('/google',
//   passport.authenticate('google', {
//     scope: ['profile', 'email'],
//     session: false
//   })
// )

router.use(authentication)

router.get('/', ProductController.find)

router.get('/:id', ProductController.findById)

router.post('/', ProductController.create)

router.put('/:id', authorization, ProductController.update)

router.delete('/:id', authorization, ProductController.delete)


module.exports = router;