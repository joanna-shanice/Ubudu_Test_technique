const Participation = require('../Model/Participation')
const User = require('../Model/User')

exports.create = (req,res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Can not be empty'
        })
    }

    if (!req.body.score ||
        !req.body.user )
        {
            return res.status(400).send({
                message: 'All fields are required for your registration'
            })
        }

    const participation = new Participation({
        score: req.body.score,
        user: req.body.user
    })

    participation.save()
    .then(data => {
        User.findById(req.body.user)
        .then(obj => {
            if (!obj)
                return res.status(400).send("Not found")
            obj.participation.push(data._id)
            obj.save()
            .catch(err => {
                return res.status(400).send("Not found")
            })

        })
        return res.status(200).send(data);
    }).catch(err => {
        return res.status(500).send({
            message: err.message 
        })
    })
}


exports.findAll = (req, res) => {
    Participation.find()
    .then(notes => {
        return res.send(notes);
    }).catch(err => {
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.update = (req, res) => {
    Participation.findById(req.params.id)
    .then(data => {
        var obj = {
            question: req.body.question,
            response: req.body.response
        }
        data.score = parseInt(req.body.score) + parseInt(data.score)
        data.log.push(obj)
        data.save()
        return res.status(200).send(data)
    }).catch(err => {
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}
