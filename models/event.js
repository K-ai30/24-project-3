const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//could do additional validation for some of these fields probably
const EventSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "name is Required"
  },
  dateAndTime:{
    type: Date,
    required: "date and time are Required"
  },
  details:{
    type: String,
    trim: true,
  },
  communityID:{
        type: Schema.Types.ObjectId,
        ref: "Community"   
  },
  usersAttended:
  [{ type:Schema.Types.ObjectID,
    ref:"user"
  }]

});


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
