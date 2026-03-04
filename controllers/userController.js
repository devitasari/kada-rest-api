const { User } = require('../models')
const { hash, compare } = require('../helpers/password')
const { generateToken } = require('../helpers/token')
const { getChannel } = require('../helpers/rabbitmq')

const UserController = {
    login: (req, res, next) => {
        const { email, password } = req.body
        User.findOne({ email})
        .then(user => {
            //cek user exist
            if (user) {
                //cek pass match
                const isMatch = compare(password, user.password)
                if (isMatch) {
                    const token = generateToken({ id: user._id, email: user.email})
                    res.json({
                        id: user._id,
                        email: user.email,
                        token
                    })
                } else {
                    res.status(401).json({ message: 'Invalid email or password'})
                }
            } else {
                res.status(401).json({ message: 'Invalid email or password'})
            }
        })
        .catch(err => {
            next(err)
        })
    },
    register: (req, res, next) => {
        const { email, password } = req.body || {}

        User.create({ email, password})
        .then(user => {
            // const channel = getChannel();

            // channel.sendToQueue(
            //     'send-email',
            //     Buffer.from(JSON.stringify({ email: user.email}))
            // )

            res.json({ id: user._id, email: user.email })
        })
        .catch(err => {
            next(err)
        })
    },
    loginGoogle: (req, res, next) => {
        const token = generateToken({
            id: req.user._id,
            email: req.user.email
        })

        res.json({ id: req.user._id, email: req.user.email, token })
    }
}

module.exports = UserController