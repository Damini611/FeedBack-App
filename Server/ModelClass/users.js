const mongoose  = require('mongoose');

//With Mongoose we need to pre define the structure of the data(schema) that is to be loaded to mongo db
const userSchema = new mongoose.Schema({
  googleId: String
})

//Mongoose will create a collection named "userscollection" in the db, if not already present
mongoose.model('userscollection',  userSchema)
