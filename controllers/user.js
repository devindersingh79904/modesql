const db = require('../models/index');

console.log(db.user)
const User = db.sequelize.models.User;


const getAllUser = async(req, res,next) => {

    const users = await User.findAll();
    res.send({data:users});
}

const addNewUser = async(req, res,next) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email
    });
    res.send({data:user});
}


module.exports = {
    addNewUser,
    getAllUser
}