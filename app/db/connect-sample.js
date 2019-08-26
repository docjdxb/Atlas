'use strict';

// Connection String from MongoDB Atlas
const connectionString =
  "mongodb+srv://docj:docj01@my-cluster-domain.mongodb.net/atlasdb?retryWrites=true&w=majority";
 
const mongoose = require("mongoose");
 
mongoose.connect(connectionString, {
  useNewUrlParser: true
});
 
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});
 
const userModel = mongoose.model("myUser", userSchema);
 
// Create a new record
const Ron = new userModel({
  name: "Ron Michaels",
  age: 22,
  email: "ron.m@gmail.com"
});
 
Ron.save(err => console.log(err));
 
// Fetch a record
userModel.findOne({email: "ron.m@gmail.com"}, (err, result) => {
  if (err) return console.log(err);
  console.log(result);
});
