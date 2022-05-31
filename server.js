const express = require('express');
const sequelize = require('./models/index');
const app = express();

const userRouter = require('./routes/user');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the API'});
});

app.use('/api/users',userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})