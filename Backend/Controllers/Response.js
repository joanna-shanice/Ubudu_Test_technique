const Response = require('../Model/Response.js')
const Question = require('../Model/Question.js')



exports.create = (req,res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Can not be empty'
        })
    }

    if (!req.body.description || 
        !req.body.status ||
        !req.params.question )
        {
            return res.status(400).send({
                message: 'All fields are required for your registration'
            })
        }

    const response = new Response({
        description: req.body.description,
        status: req.body.status,
        question: req.params.question
    })

    response.save()
    .then(data => {
        Question.findById(req.params.question)
        .then(obj => {
            if (!obj)
                return res.status(400).send("Not found")
            obj.response.push(data._id)
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
    Response.find().populate("response", "description")
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
