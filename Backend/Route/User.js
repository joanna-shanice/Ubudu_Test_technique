module.exports = (app) => {
    const user = require('../Controllers/User.js')

    app.post('/api/register', user.create)
    app.post('/api/login', user.findOne)
    app.get('/api/users', user.findAll)
    app.get('/api/user/:id', user.findParticipation)
}