const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const AdminSchema = new Schema({
    first: {
        type: String,
        trim: true,
        required: "first name is Required"
      },
      last:{
        type: String,
        trim: true,
        required: "last name is Required"
      },
      email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
        password: {
            type: String,
            validate: [({ length }) => length >= 6, "Password should be longer."]
        }

});

//before a user is entered into the database encrypt the password.
AdminSchema.pre('save',function (next){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
  next()
})

AdminSchema.methods.comparePassword = function(inputPass) {
  return bcrypt.compareSync(inputPass,this.password);
};


const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
