const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://goyaltushar360:hack36@cluster0.a5xqbuu.mongodb.net/Mydata?retryWrites=true&w=majority&appName=Cluster0';

const MongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
    const fetched_data = await mongoose.connection.db.collection("Users").find({}).toArray();
    // const Complain_data = await mongoose.connection.db.collection("complains").find({}).toArray();
    // const Menu_data = await mongoose.connection.db.collection("menu").find({}).toArray();
    console.log(fetched_data);
    

    
    // console.log(Menu_data);
    // global.userData = fetched_data;
    // global.ComplainData = Complain_data;
    // global.MenuData = Menu_data;
// const MongoUrl = 'mongodb+srv://Tushar:Tushar@23@cluster0.anjje3w.mongodb.net/mydatabase?retryWrites=true&w=majority';

  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = MongoDB;
