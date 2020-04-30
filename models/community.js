const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Community name is Required"
  }
});




const Community = mongoose.model("Community", CommunitySchema);

module.exports = Community;
