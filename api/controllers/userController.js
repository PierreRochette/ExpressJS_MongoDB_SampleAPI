const UserModel = require("../models/user"); 

exports.create = async (req, res) => {

    if (!req.body.email && !req.body.firstName && !req.body.lastName) {
        res.status(400).send({ message: "Content can not be empty."});
    }; 

    const user = new UserModel({
        email: req.body.email, 
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
    }); 

    await user.save()
        .then(data => {
            res.send({
                message: "User created successfully.", 
                user: data
            }); 
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating user"
            }); 
        }); 
}; 

exports.findAll = async (req, res) => {
    try  {
        const user = await UserModel.find(); 
        res.status(200).json(user); 
    } catch (error) {
        res.status(404).json({ message: error.message }); 
    }
}; 