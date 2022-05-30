const Sequelize = require('sequelize');

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