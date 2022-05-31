const db = require('../models/index');

console.log(db.sequelize.models.User)
const User = db.sequelize.models.User;


const getAllUser = async(req, res,next) => {

    const users = await User.findAll();
    res.send({data:users});
}

const addNewUser = async(req, res,next) => {
    const user = await User.create({
        name: 'Devinder',
        email: 'd@gmail.com'
    });
    res.send({data:user});
}


module.exports = {
    addNewUser,
    getAllUser
}