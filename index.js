const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')
const uri = process.env.DB_URI;
const formRouter = require('./routers/form.route')

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('database are connected') })
    .catch((error) => { console.log('database connected failed:', error.message) })

//middle ware
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Server are running')
})



app.use('/api/v1', formRouter)
app.listen(port, () => {
    console.log(`server are running on: ${port}`);
})