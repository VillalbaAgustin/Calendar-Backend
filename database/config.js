const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://Agusv2132:155463054@cluster0.4vr37hj.mongodb.net/mern_calendar', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log('DB Online');
  } catch (error) {
    console.log({error});
    throw new Error('Error a la hora inicializar DB');
  }
};

module.exports = {
  dbConnection,
};