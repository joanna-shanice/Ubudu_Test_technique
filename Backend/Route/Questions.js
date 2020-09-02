module.exports = (app) => {
    const user = require('../Controllers/Question.js')

    app.post('/api/questions/create', user.create)
    app.get('/api/questions', user.findAll)
    app.get('/api/question/:id', user.getResponse)

}