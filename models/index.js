const {Sequelize,DataTypes} = require('sequelize');
const User = require('./User');
const sequelize = new Sequelize('test', 'root', 'Dsp@12345', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{max:5,min:0,idle:10000}
});

const app = async() =>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
app();

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize



db.sequelize.sync().then(()=>{
    console.log('Database synced');
}).catch((err)=>{
    console.log('Error in syncing database');
})

const user = User(sequelize, DataTypes) ;
db.user = user;
console.log('here',user);
module.exports = db;