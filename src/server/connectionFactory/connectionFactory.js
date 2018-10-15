const mongoose = require('mongoose');

mongoose.connection.on('error', () => {
  process.exit();
  console.log('Error');
});

const connectionFactory = () => {
  mongoose.Promise = global.Promise;
  return mongoose.connect('mongodb://localhost:27017/project');
};

module.exports = () => connectionFactory();
