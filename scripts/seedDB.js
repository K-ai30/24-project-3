const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collections and adds some dummy data.

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/datatrak"
);

const communitySeed = [
  { name: "community 1" },
  { name: "community 2" },
  { name: "community 3" },
  { name: "community 4" },
  { name: "community 5" }
];



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)

}


function seedEvents(communities, users) {
  const eventSeed = [
    {
      name: "seniors yoga",
      dateAndTime: Date.now(),
      details: "a class for the older crowd",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: []
    },
    {
      name: "teen movie night",
      dateAndTime: Date.now(),
      details: "watch frozen 2",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: []
    },
    {
      name: "family art class",
      dateAndTime: Date.now(),
      details: "paint with the kids",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: []
    },
    {
      name: "community pool party",
      dateAndTime: Date.now(),
      details: "bbq, pool, swimming and music",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: []
    },
    {
      name: "community meeting",
      dateAndTime: Date.now(),
      details: "Community updates",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: []
    }
  ]
  return db.Event.create(...eventSeed)
}

function seedUsers(communities) {
  const residentSeed = [
    // replace this with seed objects
    {
      first: "Ilaire",
      last: "Mackrell",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "12/30/1967",
      gender: "Male",
      phone: "(336)1286101",
      email: "imackrell0@dell.com",
      address1: "43 Kedzie Crossing",
      address2: "Apt #208",
      city:"Winston Salem",
      state:"North Carolina",
      zip: 27157
    },
    {
      first: "Laurie",
      last: "Ovitz",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "09/07/1977",
      gender: "Female",
      phone: "(810)9765505",
      email: "lovitz1@imgur.com",
      address1: "72283 Holy Cross Street",
      address2: "Apt #108", 
      city: "Southfield",
      state: "Michigan", 
      zip: 48076
  
    },
    {
      first: "Kai",
      last: "Johnsee", 
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "08/12/2002",
      gender: "Female", 
      phone: "(202)3582310",
      email: "kjohnsee2@oakley.com",
      address1: "7291 Sauthoff Parkway",
      address2: "Apt #407",
      city: "Washington",
      state: "District of Columbia",
      zip: 20535
  
    },
    {
      first: "Winston",
      last: "Pavlenkov",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "09/30/1989",
      gender: "Male",
      phone: "(330)1278507",
      email: "wpavlenkov3@w3.org",
      address1: "86 Basil Place", 
      address2: "Apt #307",
      city: "Youngstown",
      state: "Ohio",
      zip: 44511
    },
    {
      first: "Anne-corinne",
      last: "Delacourt",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "02/01/1993",
      gender: "Female",
      phone: "(713)1768185",
      email: "adelacourt4@addthis.com",
      address1: "61953 Sullivan Park",
      address2: "Apt #207",
      city: "Houston",
      state: "Texas",
      zip: 77035
    },
    {
      first: "Colby",
      last: "Robbeke",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "09/15/1953",
      gender: "Male",
      phone: "(319)6202221",
      email: "crobbeke5@disqus.com",
      address1: "8122 Barnett Circle",
      address2: "Apt #107",
      city: "Iowa City",
      state: "Iowa",
      zip: 52245
    },
    {
      first: "Filip",
      last: "Beane",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "07/22/1963",
      gender: "Male",
      phone: "(928)4094206",
      email: "fbeane6@fotki.com",
      address1: "4 Hauk Drive",
      address2: "Apt #406",
      city: "Prescott",
      state: "Arizona",
      zip: 86305
    },
    {
      first: "Rodolphe",
      last: "Gatesman",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "07/31/2001",
      gender: "Male",
      phone: "(240)8860036",
      email: "rgatesman7@mlb.com",
      address1: "70939 Holy Cross Way",
      address2: "Apt #206", 
      city: "Frederick",
      state: "Maryland",
      zip: 21705
    },
    {
      first: "Marthena",
      last: "Insole",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "11/25/2015",
      gender: "Female",
      phone: "(818)4260007",
      email: "minsole8@amazonaws.com",
      address1: "02900 Barby Trail",
      address2: "Apt #306",
      city: "Pasadena",
      state: "California",
      zip: 91109
    },
    {
      first: "Liana",
      last: "Wardley",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "04/06/2011",
      gender: "Female",
      phone: "(202)6988843",
      email: "lwardley9@tiny.cc",
      address1: "8602 Westridge Point",
      address2: "Apt #106",
      city: "Washington",
      state: "District of Columbia",
      zip: 20503
    },
    {
      first: "Stanislas",
      last: "Cursons",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "09/26/1937",
      gender: "Male",
      phone: "(973)8124579",
      email: "scursonsa@nytimes.com",
      address1: "87148 Norway Maple Terrace",
      address2: "Apt #405",
      city: "Jersey City",
      state: "New Jersey",
      zip: 07310
    },
    {
      first: "Mathias",
      last: "Catcheside",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "01/07/1940",
      gender: "Male",
      phone: "(703)9893793",
      email: "mcatchesideb@opera.com",
      address1: "3223 Petterle Drive",
      address2: "Apt #305",
      city: "Washington",
      state: "District of Columbia",
      zip: 20016
    },
    {
      first: "Jeanna",
      last: "Penvarne",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "01/29/1941",
      gender: "Female",
      phone: "(304)7989663",
      email: "jpenvarnec@ed.gov",
      address1: "7916 Forest Dale Parkway",
      address2: "Apt #205",
      city: "Charleston",
      state: "West Virginia",
      zip: 25321
    },
    {
      first: "Dinny",
      last: "Estcourt",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "01/06/1994",
      gender: "Female",
      phone: "(325)8977061",
      email: "destcourtd@hibu.com",
      address1: "709 Doe Crossing Hill",
      address2: "Apt #105",
      city: "Abilene",
      state: "Texas",
      zip: 79605
    },
    {
      first: "Alicea",
      last: "De Castri",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "02/21/1957",
      gender: "Female",
      phone: "(808)9755489",
      email: "adecastrie@networksolutions.com",
      address1: "63260 Brentwood Terrace",
      address2: "Apt #404",
      city: "Honolulu",
      state: "Hawaii",
      zip: 96805
    },
    {
      first: "Osgood",
      last: "Hubbucke",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "07/06/1967",
      gender: "Male",
      phone: "(808)2768430",
      email: "ohubbuckef@spotify.com",
      address1: "12289 Pawling Junction",
      address2: "Apt #304",
      city: "Honolulu",
      state: "Hawaii",
      zip: 96805
    },
    {
      first: "Ardith",
      last: "Janosevic",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "11/22/1936",
      gender: "Female",
      phone: "(510)7165686",
      email: "ajanosevicg@independent.co.uk",
      address1: "70 Forest Alley",
      address2: "Apt #204",
      city: "Richmond",
      state: "California",
      zip: 94807
    },
    {
      first: "Wynnie",
      last: "Brockie",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "04/05/2009",
      gender: "Female",
      phone: "(434)4324080",
      email: "wbrockieh@squidoo.com",
      address1: "843 Old Shore Lane",
      address2: "Apt #104",
      city: "Lynchburg",
      state: "Virginia",
      zip: 24515
    },
    {
      first: "Arlan",
      last: "Ollington",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "01/12/2014",
      gender: "Male",
      phone: "(318)8511388",
      email: "aollingtoni@sitemeter.com",
      address1: "7 Bashford Pass",
      address2: "Apt #403",
      city: "Boston",
      state: "Massachusetts",
      zip: 02104
    },
    {
      first: "Odilia",
      last: "Curton",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "10/27/1983",
      gender: "Female",
      phone: "(313)8284648",
      email: "ocurtonj@1und1.de",
      address1: "0143 Kedzie Drive",
      address2: "Apt #401",
      city: "Detroit",
      state: "Michigan",
      zip: 48242
    },
    {
      first: "Everard",
      last: "Guterson",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "11/07/1941",
      gender: "Male",
      phone: "(323)5718019",
      email: "egutersonk@ftc.gov",
      address1: "78503 Alpine Trail",
      address2: "Apt #402",
      city: "Los Angeles",
      state: "California",
      zip: 90015
    },
    {
      first: "Jamal",
      last: "Felton",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "06/16/1976",
      gender: "Male",
      phone: "(775)6090863",
      email: "jfeltonl@sfgate.com",
      address1: "43 Cody Lane",
      address2: "Apt #303",
      city: "Sparks",
      state: "Nevada",
      zip: 89436
    },
    {
      first: "Desdemona",
      last: "Duchatel",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "01/10/1963",
      gender: "Female",
      phone: "(651)9609187",
      email: "dduchatelm@google.co.jp",
      address1: "8788 Vahlen Alley",
      address2: "Apt #203",
      city: "Minneapolis",
      state: "Minnesota",
      zip: 55417
    },
    {
      first: "Wileen",
      last: "Beldam",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "08/29/1995",
      gender: "Female",
      phone: "(952)2563042",
      email: "wbeldamn@hp.com",
      address1: "1 Lighthouse Bay Junction",
      address2: "Apt #103",
      city: "Young America",
      state: "Minnesota",
      zip: 55564
    },
    {
      first: "Brennan",
      last: "Huniwall",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "12/30/1996",
      gender: "Male",
      phone: "(352)3615703",
      email: "bhuniwallo@fotki.com",
      address1: "03 Bunting Street",
      address2: "Apt #302",
      city: "Ocala",
      state: "Florida",
      zip: 34479
    },
    {
      first: "Eula",
      last: "Sly",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "01/24/1971",
      gender: "Female",
      phone: "(623)9596777",
      email: "eslyp@is.gd",
      address1: "732 Mccormick Drive",
      address2: "Apt #202",
      city: "Glendale",
      state: "Arizona",
      zip: 85305
    },
    {
      first: "Zabrina",
      last: "Crepin",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "02/09/1967",
      gender: "Female",
      phone: "(316)1374096",
      email: "zcrepinq@globo.com",
      address1: "23831 Dakota Hill",
      address2: "Apt #102",
      city: "Wichita",
      state: "Kansas",
      zip: 67230
    },
    {
      first: "Cary",
      last: "Thieme",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "03/13/1967",
      gender: "Female",
      phone: "(309)2514634",
      email: "cthiemer@jalbum.net",
      address1: "1 Old Gate Way",
      address2: "Apt #301",
      city: "Peoria",
      state: "Illinois",
      zip: 61651
    },
    {
      first: "Terrye",
      last: "Costin",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "10/11/1983",
      gender: "Female",
      phone: "(713)8808442",
      email: "tcostins@geocities.com",
      address1: "60946 Ronald Regan Hill",
      address2: "Apt #101",
      city: "Houston",
      state: "Texas",
      zip: 77080
    },
    {
      first: "Olag",
      last: "Strooband",
      communityID: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "04/07/1946",
      gender: "Male",
      phone: "(513)7115853",
      email: "ostroobandt@msu.edu",
      address1: "0148 Graceland Pass",
      address2: "Apt #201",
      city: "Cincinnati",
      state: "Ohio",
      zip: 45203
    }
  
  ]
  return db.User.create(...residentSeed)
}

function seedAdmins(){

  admins = [
    {first:"scotty", last:"mikul", email:"scotty@gmail.com", password:"password"},
    {first:"Ad",last:"min", email:"admin@gmail.com", password:"password"}
  ]
  return db.Admin.create(...admins);
}
//still have to populate the charts
Promise.all([
  db.Community.remove({}),
  db.User.remove({}),
  db.Chart.remove({}),
  db.Event.remove({}),
  db.Admin.remove({})
])
  .then(() => {
    db.Community.create(...communitySeed)
      .then((communities) => {
        seedUsers(communities)
          .then(
            (users) => { seedEvents(communities, users).then((err)=>{
              if (err){ console.log(err)}
              seedAdmins().then((err)=>{
                if(err){
                  console.log(err);   
                  process.exit(0)
                }
              })
            })}
          )
      })
    })


