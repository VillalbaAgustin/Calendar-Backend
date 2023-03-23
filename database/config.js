const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://agusVillalba:155463054@calendardb.3hcva8j.mongodb.net/mern_calendar', {
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