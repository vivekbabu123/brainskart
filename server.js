const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

// configure cors with express
app.use(cors());

// configure express to accept data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// config dotEnv
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 5000;

// connect to MongoDB
mongoose.connect(process.env.MONGODB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to MongoDB successfully....');
}).catch((error) => {
    console.error(error);
    process.exit(1);
});

// get basic URL
app.get('/', (req, res) => {
    res.send(`<h2>Welcome to Brainskart App</h2>`);    
});


// Router  Configuration

app.use('/user', require('./router/userRouter'));

// listen to port
app.listen(port, () => {
    console.log(`Express server started on port ${port}...`);
});
