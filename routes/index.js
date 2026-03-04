const express = require('express')
const router = express.Router()
const { UserController, ProductController } = require('../controllers')
const { authentication, authorization } = require('../middlewares/auth')
const passport = require('../helpers/passport')
const { sendEmail } = require('../helpers/mailer')

router.get('/test-email', async (req, res, next) => {
  try {
    await sendEmail({
      to: '', //fill with email address
      subject: 'Test Email 🚀',
      html: '<h1>Hello from Nodemailer</h1>'
    })

    res.json({ message: 'Email sent successfully' })
  } catch (err) {
    next(err)
  }
})

router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), UserController.loginGoogle)

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false
  })
)

router.use(authentication)

router.get('/products', ProductController.find)

router.get('/products/:id', ProductController.findById)

router.post('/products', ProductController.create)

router.put('/products/:id', authorization, ProductController.update)

router.delete('/products/:id', authorization, ProductController.delete)


module.exports = router;