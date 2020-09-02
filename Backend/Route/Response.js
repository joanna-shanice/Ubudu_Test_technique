module.exports = (app) => {
    const user = require('../Controllers/Response.js')

    app.post('/api/response/create', user.create)
    app.get('/api/response', user.findAll)
}