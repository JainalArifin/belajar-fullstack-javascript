// memangol package mongodb
const mongoose = require('mongoose');

// memanggil package config
const config = require('config');

// memanggil koneksi database (mongoURI)
const db = config.get('mongoURI');

// koneksi database dengan "promise" async wait
const connectDB = async() => {
  try {
    await mongoose.connect(db, { 
      useNewUrlParser: true, useUnifiedTopology: true 
    });
    console.log('MongoDb Connect...')
  }catch(err){
    console.log(err.message);

    // exit error with failure
    process.exit(1);
  }
}

// export module
module.exports = connectDB;