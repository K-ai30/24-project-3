const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//could do additional validation for some of these fields probably
const ResidentSchema = new Schema({
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
  phone:{
    type: Number,
    trim: true,
    required: "phone number is Required"
  },
  state:{
    type: String,
    trim: true,
    required: "State is Required"
  },
  city:{
    type: String,
    trim: true,
    required: "City is Required"
  },
  zip:{
    type: Number,
    trim: true,
    required: "Zip is Required"
  },
  street:{
    type: String,
    trim: true,
    required: "Street is Required"
  },
  communityID:{
        type: Schema.Types.ObjectId,
        ref: "Community"   
  },
  dob:{
    type: Date,
    required: "DOB is Required"
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  gender: {
    type: String
  },
  ageBracket:{
    type: String
  }


  //lastUpdated: Date,

});

// UserSchema.methods.setFullName = function() {
//   this.fullName = `${this.firstName} ${this.lastName}`;

//   return this.fullName;
// };


const Resident = mongoose.model("Resident", ResidentSchema);

module.exports = Resident;
