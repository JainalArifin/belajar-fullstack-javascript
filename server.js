const express = require('express');

// require connectDB
const connectDB = require('./config/db');
const app = express();

connectDB();

app.get('/', (req, res)=> res.send("API It's works"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on PORT : ${PORT}`));