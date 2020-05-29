const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//could do additional validation for some of these fields probably
const ChartSchema = new Schema({
    creationDate:{
        type: Date, default: Date.now
    },
    category:{
        type:[String],
        required:true
    },
    communityID:{
        type: Schema.Types.ObjectId,
        ref: "Community"   
    },
    data:{
        type:[Number],
        required:true

    },
    labels:{
        type:[String],
        required:true


    },
    backgroundColor:{
        type:[String],
        required:true

    }    

});


const Chart = mongoose.model("Chart", ChartSchema);

module.exports = Chart;
