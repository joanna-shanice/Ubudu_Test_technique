module.exports = (app) => {
    const user = require('../Controllers/User.js')

    app.post('/api/register', user.create)
    app.get('/api/user', user.findAll)
}