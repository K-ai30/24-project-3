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
]

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
  // replace this with seed objects
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
  /*
  {
    id: 1,
    first: "Ilaire",
    last: "Mackrell",
    community: "Community 2",
    ageBracket: "Parent",
    date of birth: "12/30/1967",
    gender: "Male",
    phone: "(336)1286101",
    email: "imackrell0@dell.com",
    password: "tnQVU7uWva5P",
    address: {
      address 1: "43 Kedzie Crossing",
      address 2: "1 Hollow Ridge Way",
      city:"Winston Salem",
      state:"North Carolina",
      zip: 27157
    }
  },
  {
    id: 2,
    first: "Laurie",
    last:"Ovitz",
    community: "Community 5",
    ageBracket: "Adult",
    date of birth: "09/07/1977",
    gender: "Female",
    phone: "(810)9765505",
    email: "lovitz1@imgur.com",
    password: "4KdLRPt7h",
    address: {
      address 1: "72283 Holy Cross Street",
      address 2: "7680 American Circle", 
      city: "Southfield",
      state: "Michigan", 
      zip: 48076
    }
  },
  {
    id: 3,
    first: "Kai",
    last:"Johnsee", 
    community: "Community 5",
    ageBracket: "Youth",
    date of birth: "08/12/2002",
    gender: "Female", 
    phone: "(202)3582310",
    email: "kjohnsee2@oakley.com",
    password: "cL6HtX2c",
    address: {
      address 1: "7291 Sauthoff Parkway",
      address 2: "3 Rusk Terrace",
      city: "Washington",
      state: "District of Columbia",
      zip: 20535
    }
  },
  {
    id: 4,
    first: "Winston",
    last: "Pavlenkov",
    community: "Community 2",
    ageBracket: "Adult",
    date of birth: "09/30/1989",
    gender: "Male",
    phone: "(330)1278507",
    email: "wpavlenkov3@w3.org",
    password: "ZLF5Tvk5rch",
    address: {
      address 1: "86 Basil Place", 
      address 2: "68684 Goodland Junction",
      city: "Youngstown",
      state: "Ohio",
      zip: 44511
    }
  },
  {
    id: 5,
    first: "Anne-corinne",
    last:"Delacourt",
    community: "Community 4",
    ageBracket: "Adult",
    date of birth: "02/01/1993",
    gender: "Female",
    phone: "(713)1768185",
    email: "adelacourt4@addthis.com",
    password: "ucszXagz",
    address: {
      address 1: "61953 Sullivan Park",
      address 2: "1 Glacier Hill Avenue",
      city: "Houston",
      state: "Texas",
      zip: 77035
    }
  },
  {
    id: 6,
    first: "Colby",
    last: "Robbeke",
    community: "Community 5",
    ageBracket: "Senior",
    date of birth: "09/15/1953",
    gender: "Male",
    phone: "(319)6202221",
    email: "crobbeke5@disqus.com",
    password: "0xoIoP6VUV",
    address: {
      address 1: "8122 Barnett Circle",
      address 2: "5 Basil Drive",
      city: "Iowa City",
      state: "Iowa",
      zip: 52245
    }
  },
  {
    id: 7,
    first: "Filip",
    last: "Beane",
    community: "Community 4",
    ageBracket: "Parent",
    date of birth: "07/22/1963",
    gender: "Male",
    phone: "(928)4094206",
    email: "fbeane6@fotki.com",
    password: "5h1Gyj2WKCW",
    address: {
      address 1: "4 Hauk Drive",
      address 2: "5 International Place",
      city: "Prescott",
      state: "Arizona",
      zip: 86305
    }
  },
  {
    id: 8,
    first: "Rodolphe",
    last: "Gatesman",
    community: "Community 4",
    ageBracket: "Youth",
    date of birth: "07/31/2001",
    gender: "Male",
    phone: "(240)8860036",
    email: "rgatesman7@mlb.com",
    password: "w1VTeiZ",
    address: {
      address 1: "70939 Holy Cross Way",
      address 2: "643 Manufacturers Point", 
      city: "Frederick",
      state: "Maryland",
      zip: 21705
    }
  },
  {
    id: 9,
    first: "Marthena",
    last: "Insole",
    community: "Community 1",
    ageBracket: "Youth",
    date of birth: "11/25/2015",
    gender: "Female",
    phone: "(818)4260007",
    email: "minsole8@amazonaws.com",
    password: "u3A0up8F4q",
    address: {
      address 1: "02900 Barby Trail",
      address 2: "4 Gateway Parkway",
      city: "Pasadena",
      state: "California",
      zip: 91109
    }
  },
  {
    id: 10,
    first: "Liana",
    last: "Wardley",
    community: "Community 3",
    ageBracket: "Youth",
    date of birth: "04/06/2011",
    gender: "Female",
    phone: "(202)6988843",
    email: "lwardley9@tiny.cc",
    password: "7xEszoIEOVv",
    address: {
      address 1: "8602 Westridge Point",
      address 2: "09 Scoville Place",
      city: "Washington",
      state: "District of Columbia",
      zip: 20503
    }
  },
  {
    id: 11,
    first:"Stanislas",
    last:"Cursons",
    community:"Community 5",
    ageBracket: "Senior",
    date of birth:"09/26/1937",
    gender:"Male",
    phone:"(973)8124579",
    email:"scursonsa@nytimes.com",
    password:"NRbHu5dT5Pu",
    address: {
      address 1:"87148 Norway Maple Terrace",
      address 2:"10 Mitchell Drive",
      city:"Jersey City",
      state:"New Jersey",
      zip:"07310"
    }
  },
  {
    id: 12,
    first: "Mathias",
    last: "Catcheside",
    community: "Community 5",
    ageBracket: "Senior",
    date of birth: "01/07/1940",
    gender: "Male",
    phone: "(703)9893793",
    email: "mcatchesideb@opera.com",
    password: "5h9bEoam8",
    address: {
      address 1: "3223 Petterle Drive",
      address 2: "7 Nobel Pass",
      city: "Washington",
      state: "District of Columbia",
      zip: 20016
    }
  },
  {
    id: 13,
    first: "Jeanna",
    last: "Penvarne",
    community: "Community 1",
    ageBracket: "Senior",
    date of birth: "01/29/1941",
    gender: "Female",
    phone: "(304)7989663",
    email: "jpenvarnec@ed.gov",
    password: "JYVlonyRuAoU",
    address: {
      address 1: "7916 Forest Dale Parkway",
      address 2: "6903 Charing Cross Place",
      city: "Charleston",
      state: "West Virginia",
      zip: 25321
    }
  },
  {
    id: 14,
    first: "Dinny",
    last: "Estcourt",
    community: "Community 4",
    ageBracket: "Adult",
    date of birth: "01/06/1994",
    gender: "Female",
    phone: "(325)8977061",
    email: "destcourtd@hibu.com",
    password: "eh4NRwF0i",
    address: {
      address 1: "709 Doe Crossing Hill",
      address 2: "6028 Crescent Oaks Terrace",
      city: "Abilene",
      state: "Texas",
      zip: 79605
    }
  },
  {
    id: 15,
    first: "Alicea",
    last: "De Castri",
    community: "Community 4",
    ageBracket: "Senior",
    date of birth: "02/21/1957",
    gender: "Female",
    phone: "(808)9755489",
    email: "adecastrie@networksolutions.com",
    password: "FB2zCd",
    address: {
      address 1: "63260 Brentwood Terrace",
      address 2: "08478 Harbort Plaza",
      city: "Honolulu",
      state: "Hawaii",
      zip: 96805
    }
  },
  {
    id: 16,
    first: "Osgood",
    last: "Hubbucke",
    community: "Community 1",
    ageBracket: "Adult",
    date of birth: "07/06/1967",
    gender: "Male",
    phone: "(808)2768430",
    email: "ohubbuckef@spotify.com",
    password: "rjpeIqqHwN",
    address: {
      address 1: "12289 Pawling Junction",
      address 2: "958 Sullivan Center",
      city: "Honolulu",
      state: "Hawaii",
      zip: 96805
    }
  },
  {
    id: 17,
    first: "Ardith",
    last: "Janosevic",
    community: "Community 3",
    ageBracket: "Senior",
    date of birth: "11/22/1936",
    gender: "Female",
    phone: "(510)7165686",
    email: "ajanosevicg@independent.co.uk",
    password: "jnQcX6LpJs",
    address: {
      address 1: "70 Forest Alley",
      address 2: "4 Continental Crossing",
      city: "Richmond",
      state: "California",
      zip: 94807
    }
  },
  {
    id: 18,
    first: "Wynnie",
    last: "Brockie",
    community: "Community 5",
    ageBracket: "Youth",
    date of birth: "04/05/2009",
    gender: "Female",
    phone: "(434)4324080",
    email: "wbrockieh@squidoo.com",
    password: "RQ6atFiNi",
    address: {
      address 1: "843 Old Shore Lane",
      address 2: "6 Crest Line Plaza",
      city: "Lynchburg",
      state: "Virginia",
      zip: 24515
    }
  },
  {
    id: 19,
    first: "Arlan",
    last: "Ollington",
    community: "Community 4",
    ageBracket: "Youth",
    date of birth: "01/12/2014",
    gender: "Male",
    phone: "(318)8511388",
    email: "aollingtoni@sitemeter.com",
    password: "z2cLXVc",
    address: {
      address 1: "7 Bashford Pass",
      address 2: "38241 Homewood Drive",
      city: "Boston",
      state: "Massachusetts",
      zip: 02104
    }
  },
  {
    id: 20,
    first: "Odilia",
    last: "Curton",
    community: "Community 5",
    ageBracket: "Parent",
    date of birth: "10/27/1983",
    gender: "Female",
    phone: "(313)8284648",
    email: "ocurtonj@1und1.de",
    password: "ccBrvJbw",
    address: {
      address 1: "0143 Kedzie Drive",
      address 2: "0 Bay Street",
      city: "Detroit",
      state: "Michigan",
      zip: 48242
    }
  },
  {
    id: 21,
    first: "Everard",
    last: "Guterson",
    community: "Community 3",
    ageBracket: "Senior",
    date of birth: "11/07/1941",
    gender: "Male",
    phone: "(323)5718019",
    email: "egutersonk@ftc.gov",
    password: "76N5S7Bzlv",
    address: {
      address 1: "78503 Alpine Trail",
      address 2: "9 Ryan Point",
      city: "Los Angeles",
      state: "California",
      zip: 90015
    }
  },
  {
    id: 22,
    first: "Jamal",
    last: "Felton",
    community: "Community 3",
    ageBracket: "Parent",
    date of birth: "06/16/1976",
    gender: "Male",
    phone: "(775)6090863",
    email: "jfeltonl@sfgate.com",
    password: "4VEAY9bBSo",
    address: {
      address 1: "43 Cody Lane",
      address 2: "02697 Russell Alley",
      city: "Sparks",
      state: "Nevada",
      zip: 89436
    }
  },
  {
    id: 23,
    first: "Desdemona",
    last: "Duchatel",
    community: "Community 1",
    ageBracket: "Adult",
    date of birth: "01/10/1963",
    gender: "Female",
    phone: "(651)9609187",
    email: "dduchatelm@google.co.jp",
    password: "pANrWlACHhD1",
    address: {
      address 1: "8788 Vahlen Alley",
      address 2: "31 Mallory Plaza",
      city: "Minneapolis",
      state: "Minnesota",
      zip: 55417
    }
  },
  {
    id: 24,
    first: "Wileen",
    last: "Beldam",
    community: "Community 4",
    ageBracket: "Parent",
    date of birth: "08/29/1995",
    gender: "Female",
    phone: "(952)2563042",
    email: "wbeldamn@hp.com",
    password: "5N7sXPW",
    address: {
      address 1: "1 Lighthouse Bay Junction",
      address 2: "7 Anhalt Drive",
      city: "Young America",
      state: "Minnesota",
      zip: 55564
    }
  },
  {
    id: 25,
    first: "Brennan",
    last: "Huniwall",
    community: "Community 2",
    ageBracket: "Adult",
    date of birth: "12/30/1996",
    gender: "Male",
    phone: "(352)3615703",
    email: "bhuniwallo@fotki.com",
    password: "XU515qR0",
    address: {
      address 1: "03 Bunting Street",
      address 2: "29 Homewood Parkway",
      city: "Ocala",
      state: "Florida",
      zip: 34479
    }
  },
  {
    id: 26,
    first: "Eula",
    last: "Sly",
    community: "Community 2",
    ageBracket: "Parent",
    date of birth: "01/24/1971",
    gender: "Female",
    phone: "(623)9596777",
    email: "eslyp@is.gd",
    password: "NaNjNjBO",
    address: {
      address 1: "732 Mccormick Drive",
      address 2: "9320 Almo Park",
      city: "Glendale",
      state: "Arizona",
      zip: 85305
    }
  },
  {
    id: 27,
    first: "Zabrina",
    last: "Crepin",
    community: "Community 4",
    ageBracket: "Adult",
    date of birth: "02/09/1967",
    gender: "Female",
    phone:"(316)1374096",
    email:"zcrepinq@globo.com",
    password: "ARgDktqmJ83",
    address: {
      address 1: "23831 Dakota Hill",
      address 2: "0750 Knutson Center",
      city: "Wichita",
      state: "Kansas",
      zip: 67230
    }
  },
  {
    id: 28,
    first: "Cary",
    last: "Thieme",
    community: "Community 3",
    ageBracket: "Parent",
    date of birth: "03/13/1967",
    gender: "Female",
    phone: "(309)2514634",
    email: "cthiemer@jalbum.net",
    password: "Zv2aGbi9Ypk",
    address: {
      address 1: "1 Old Gate Way",
      address 2: "24488 Summer Ridge Lane",
      city: "Peoria",
      state: "Illinois",
      zip: 61651
    }
  },
  {
    id: 29,
    first: "Terrye",
    last: "Costin",
    community: "Community 2",
    ageBracket: "Parent",
    date of birth: "10/11/1983",
    gender: "Female",
    phone: "(713)8808442",
    email: "tcostins@geocities.com",
    password: "4q0YdNw8P",
    address: {
      address 1: "60946 Ronald Regan Hill",
      address 2: "34 Bobwhite Circle",
      city: "Houston",
      state: "Texas",
      zip: 77080
    }
  },
  {
    id: 30,
    first: "Olag",
    last: "Strooband",
    community: "Community 4",
    ageBracket: "Senior",
    date of birth: "04/07/1946",
    gender: "Male",
    phone: "(513)7115853",
    email: "ostroobandt@msu.edu",
    password: "CnFJ23Wn4jO1",
    address: {
      address 1: "0148 Graceland Pass",
      address 2: "50 Spohn Terrace",
      city: "Cincinnati",
      state: "Ohio",
      zip: 45203
    }
  },
  */

]

db.Community.remove({})
  .then(() => db.Community.collection.insertMany(communitySeed))
  .then(data => {
    console.log(data.result.n + " community records inserted!");

    db.Event.remove({})
        .then(()=> {
            db.Event.collection.insertMany(eventSeed)
            .then(data=> {
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
