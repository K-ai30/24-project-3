const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//could do additional validation for some of these fields probably
const ChartSchema = new Schema({
    creationDate:{
        type: Date.now(),
    },
    category:{
        type:String
    },
    communityID:{
        type: Schema.Types.ObjectId,
        ref: "Community"   
    },
    data:{
        type:[Number]
    },
    labels:{
        type:[String]

    },
    datasetLabel:{
        type:String
    }

});


const Chart = mongoose.model("Chart", ChartSchema);

module.exports = Chart;
