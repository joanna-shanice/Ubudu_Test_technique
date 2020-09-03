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

exports.findOne = (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if (!user)
            return res.status(400).send({message: "User not found"})
        if (req.body.password != user.password)
            return res.status(400).send({message: "Wrong password"})
        return res.status(200).send(user)
    }).catch(err =>{
        return res.status(500).send(err)
    })
}

exports.findParticipation = (req, res) => {
    User.findById(req.params.id).populate({ path: 'participation', model: 'Participation'})
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}