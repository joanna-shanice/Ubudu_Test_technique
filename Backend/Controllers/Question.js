const Question = require('../Model/Question.js')

exports.create = (req,res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Can not be empty'
        })
    }

    if (!req.body.description)
        {
            return res.status(400).send({
                message: 'All fields are required for your registration'
            })
        }

    const question = new Question({
        description: req.body.description,
    })

    question.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        })
    })
}


exports.findAll = (req, res) => {
    Question.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
