module.exports = (app) => {
    const participation = require('../Controllers/Participation')

    app.post('/api/participation/create', participation.create)
    app.get('/api/participation', participation.findAll)
    app.put('/api/participation/:id', participation.update)

}