const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Db connectada');
  } catch (error) {
    console.log('Hubo un error');
    console.log(error);
    process.exit(1); //detener app
  }
};

module.exports = connectDB;
