const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collections and adds some dummy data.

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/datatrak"
);

const communitySeed = [
    {_id:"comm1", name:"community 1"},
    {_id:"comm2",name:"community 2"},
    {_id:"comm3",name:"community 3"}
];

const eventSeed = [
    { name: "seniors yoga",
      dateAndTime:Date.now,
      details:"a class for the older crowd",
      communityID:"comm1"
     },
];

const userSeed = [
    {email: "admin@gmail.com",
      isAdmin: true,
      password: "123456",
    },
    {email: "user@gmail.com",
    isAdmin: false,
    password: "123456",
    },
]

const residentSeed = [
    {first: "frank",
      last:"sinatra",
      phone:5555555555,
      state:"georgia",
      city:"atlanta",
      zip:30068,
      street:"21 tech street",
      communityID:"comm1",
      dob:Date.now,
      email: "frank@gmail.com",
      gender: "male",
      ageBracket:"senior"
    }
]

db.Community.remove({})
  .then(() => db.Community.collection.insertMany(communitySeed))
  .then(data => {
    console.log(data.result.n + " community records inserted!");

    db.Event.remove({})
        .then(()=> {
            db.Event.collection.insertMany(eventSeed)
            .then(data=>{
                console.log(data.result.n + " event records inserted!");
                db.User.remove({})
                .then(()=> {
                    db.User.collection.insertMany(userSeed)
                    .then(data=>{
                        console.log(data.result.n + " user records inserted!");
                        db.Resident.remove({})
                        .then(()=> {
                            db.Resident.collection.insertMany(residentSeed)
                            .then(data=>{
                                console.log(data.result.n + " Resident records inserted!");
                                process.exit(0);
                            } )
                
                           
                        })
                    } )
                })
            } )

           
        })

  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
