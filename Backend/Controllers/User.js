const User = require('../Model/User.js')

exports.create = (req,res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Can not be empty'
        })
    }

    if (!req.body.name ||
        !req.body.nickname ||
        !req.body.email ||
        !req.body.number ||
        !req.body.password )
        {
            return res.status(400).send({
                message: 'All fields are required for your registration'
            })
        }

    const user = new User({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        number: req.body.number,
        password: req.body.password,
    })

    user.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        })
    })
}


exports.findAll = (req, res) => {
    User.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
