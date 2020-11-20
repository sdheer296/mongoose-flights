const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('err', function(){
    console.log('error here', err);
});09