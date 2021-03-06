const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charges = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Proident non occaecat eiusmod enim proident excepteur officia cupidatat.',
            source: req.body.id
        });
        console.log(req.user)
        req.user.credits += 5;
        const user = await req.user.save()
        res.send(user)
    })
}