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
      usersAttended: [users[0]]
    },
    {
      name: "teen movie night",
      dateAndTime: Date.now(),
      details: "watch frozen 2",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: [users[0]]
    },
    {
      name: "family art class",
      dateAndTime: Date.now(),
      details: "paint with the kids",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: [users[0]]
    },
    {
      name: "community pool party",
      dateAndTime: Date.now(),
      details: "bbq, pool, swimming and music",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: [users[0]]
    },
    {
      name: "community meeting",
      dateAndTime: Date.now(),
      details: "Community updates",
      communityID: communities[getRandomIndex(communities)],
      usersAttended: [users[0]]
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
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "12/30/1967",
      gender: "Male",
      phone: "(336)1286101",
      email: "imackrell0@dell.com",
      password: "tnQVU7uWva5P",
      address1: "43 Kedzie Crossing",
      address2: "1 Hollow Ridge Way",
      city:"Winston Salem",
      state:"North Carolina",
      zip: 27157
    },
    {
      first: "Laurie",
      last: "Ovitz",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "09/07/1977",
      gender: "Female",
      phone: "(810)9765505",
      email: "lovitz1@imgur.com",
      password: "4KdLRPt7h",
      
        address1: "72283 Holy Cross Street",
        address2: "7680 American Circle", 
        city: "Southfield",
        state: "Michigan", 
        zip: 48076
  
    },
    {
      first: "Kai",
      last: "Johnsee", 
      community: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "08/12/2002",
      gender: "Female", 
      phone: "(202)3582310",
      email: "kjohnsee2@oakley.com",
      password: "cL6HtX2c",
      
        address1: "7291 Sauthoff Parkway",
        address2: "3 Rusk Terrace",
        city: "Washington",
        state: "District of Columbia",
        zip: 20535
  
    },
    {
      first: "Winston",
      last: "Pavlenkov",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "09/30/1989",
      gender: "Male",
      phone: "(330)1278507",
      email: "wpavlenkov3@w3.org",
      password: "ZLF5Tvk5rch",
      
        address1: "86 Basil Place", 
        address2: "68684 Goodland Junction",
        city: "Youngstown",
        state: "Ohio",
        zip: 44511
    },
    {
      first: "Anne-corinne",
      last: "Delacourt",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "02/01/1993",
      gender: "Female",
      phone: "(713)1768185",
      email: "adelacourt4@addthis.com",
      password: "ucszXagz",
      
        address1: "61953 Sullivan Park",
        address2: "1 Glacier Hill Avenue",
        city: "Houston",
        state: "Texas",
        zip: 77035
    },
    {
      first: "Colby",
      last: "Robbeke",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "09/15/1953",
      gender: "Male",
      phone: "(319)6202221",
      email: "crobbeke5@disqus.com",
      password: "0xoIoP6VUV",
      
        address1: "8122 Barnett Circle",
        address2: "5 Basil Drive",
        city: "Iowa City",
        state: "Iowa",
        zip: 52245
    },
    {
      first: "Filip",
      last: "Beane",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "07/22/1963",
      gender: "Male",
      phone: "(928)4094206",
      email: "fbeane6@fotki.com",
      password: "5h1Gyj2WKCW",
      
        address1: "4 Hauk Drive",
        address2: "5 International Place",
        city: "Prescott",
        state: "Arizona",
        zip: 86305
    },
    {
      first: "Rodolphe",
      last: "Gatesman",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "07/31/2001",
      gender: "Male",
      phone: "(240)8860036",
      email: "rgatesman7@mlb.com",
      password: "w1VTeiZ",
      
        address1: "70939 Holy Cross Way",
        address2: "643 Manufacturers Point", 
        city: "Frederick",
        state: "Maryland",
        zip: 21705
    },
    {
      first: "Marthena",
      last: "Insole",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "11/25/2015",
      gender: "Female",
      phone: "(818)4260007",
      email: "minsole8@amazonaws.com",
      password: "u3A0up8F4q",
      
        address1: "02900 Barby Trail",
        address2: "4 Gateway Parkway",
        city: "Pasadena",
        state: "California",
        zip: 91109
    },
    {
      first: "Liana",
      last: "Wardley",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "04/06/2011",
      gender: "Female",
      phone: "(202)6988843",
      email: "lwardley9@tiny.cc",
      password: "7xEszoIEOVv",
      
        address1: "8602 Westridge Point",
        address2: "09 Scoville Place",
        city: "Washington",
        state: "District of Columbia",
        zip: 20503
    },
    {
      first: "Stanislas",
      last: "Cursons",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "09/26/1937",
      gender: "Male",
      phone: "(973)8124579",
      email: "scursonsa@nytimes.com",
      password: "NRbHu5dT5Pu",
      
        address1: "87148 Norway Maple Terrace",
        address2: "10 Mitchell Drive",
        city: "Jersey City",
        state: "New Jersey",
        zip: 07310
    },
    {
      first: "Mathias",
      last: "Catcheside",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "01/07/1940",
      gender: "Male",
      phone: "(703)9893793",
      email: "mcatchesideb@opera.com",
      password: "5h9bEoam8",
      
        address1: "3223 Petterle Drive",
        address2: "7 Nobel Pass",
        city: "Washington",
        state: "District of Columbia",
        zip: 20016
    },
    {
      first: "Jeanna",
      last: "Penvarne",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "01/29/1941",
      gender: "Female",
      phone: "(304)7989663",
      email: "jpenvarnec@ed.gov",
      password: "JYVlonyRuAoU",
      
        address1: "7916 Forest Dale Parkway",
        address2: "6903 Charing Cross Place",
        city: "Charleston",
        state: "West Virginia",
        zip: 25321
    },
    {
      first: "Dinny",
      last: "Estcourt",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "01/06/1994",
      gender: "Female",
      phone: "(325)8977061",
      email: "destcourtd@hibu.com",
      password: "eh4NRwF0i",
      
        address1: "709 Doe Crossing Hill",
        address2: "6028 Crescent Oaks Terrace",
        city: "Abilene",
        state: "Texas",
        zip: 79605
    },
    {
      first: "Alicea",
      last: "De Castri",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "02/21/1957",
      gender: "Female",
      phone: "(808)9755489",
      email: "adecastrie@networksolutions.com",
      password: "FB2zCd",
      
        address1: "63260 Brentwood Terrace",
        address2: "08478 Harbort Plaza",
        city: "Honolulu",
        state: "Hawaii",
        zip: 96805
    },
    {
      first: "Osgood",
      last: "Hubbucke",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "07/06/1967",
      gender: "Male",
      phone: "(808)2768430",
      email: "ohubbuckef@spotify.com",
      password: "rjpeIqqHwN",
      
        address1: "12289 Pawling Junction",
        address2: "958 Sullivan Center",
        city: "Honolulu",
        state: "Hawaii",
        zip: 96805
    },
    {
      first: "Ardith",
      last: "Janosevic",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "11/22/1936",
      gender: "Female",
      phone: "(510)7165686",
      email: "ajanosevicg@independent.co.uk",
      password: "jnQcX6LpJs",
      
        address1: "70 Forest Alley",
        address2: "4 Continental Crossing",
        city: "Richmond",
        state: "California",
        zip: 94807
    },
    {
      first: "Wynnie",
      last: "Brockie",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "04/05/2009",
      gender: "Female",
      phone: "(434)4324080",
      email: "wbrockieh@squidoo.com",
      password: "RQ6atFiNi",
      
        address1: "843 Old Shore Lane",
        address2: "6 Crest Line Plaza",
        city: "Lynchburg",
        state: "Virginia",
        zip: 24515
    },
    {
      first: "Arlan",
      last: "Ollington",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Youth",
      dob: "01/12/2014",
      gender: "Male",
      phone: "(318)8511388",
      email: "aollingtoni@sitemeter.com",
      password: "z2cLXVc",
      
        address1: "7 Bashford Pass",
        address2: "38241 Homewood Drive",
        city: "Boston",
        state: "Massachusetts",
        zip: 02104
    },
    {
      first: "Odilia",
      last: "Curton",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "10/27/1983",
      gender: "Female",
      phone: "(313)8284648",
      email: "ocurtonj@1und1.de",
      password: "ccBrvJbw",
      
        address1: "0143 Kedzie Drive",
        address2: "0 Bay Street",
        city: "Detroit",
        state: "Michigan",
        zip: 48242
    },
    {
      first: "Everard",
      last: "Guterson",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "11/07/1941",
      gender: "Male",
      phone: "(323)5718019",
      email: "egutersonk@ftc.gov",
      password: "76N5S7Bzlv",
      
        address1: "78503 Alpine Trail",
        address2: "9 Ryan Point",
        city: "Los Angeles",
        state: "California",
        zip: 90015
    },
    {
      first: "Jamal",
      last: "Felton",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "06/16/1976",
      gender: "Male",
      phone: "(775)6090863",
      email: "jfeltonl@sfgate.com",
      password: "4VEAY9bBSo",
      
        address1: "43 Cody Lane",
        address2: "02697 Russell Alley",
        city: "Sparks",
        state: "Nevada",
        zip: 89436
    },
    {
      first: "Desdemona",
      last: "Duchatel",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "01/10/1963",
      gender: "Female",
      phone: "(651)9609187",
      email: "dduchatelm@google.co.jp",
      password: "pANrWlACHhD1",
      
        address1: "8788 Vahlen Alley",
        address2: "31 Mallory Plaza",
        city: "Minneapolis",
        state: "Minnesota",
        zip: 55417
    },
    {
      first: "Wileen",
      last: "Beldam",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "08/29/1995",
      gender: "Female",
      phone: "(952)2563042",
      email: "wbeldamn@hp.com",
      password: "5N7sXPW",
      
        address1: "1 Lighthouse Bay Junction",
        address2: "7 Anhalt Drive",
        city: "Young America",
        state: "Minnesota",
        zip: 55564
    },
    {
      first: "Brennan",
      last: "Huniwall",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "12/30/1996",
      gender: "Male",
      phone: "(352)3615703",
      email: "bhuniwallo@fotki.com",
      password: "XU515qR0",
      
        address1: "03 Bunting Street",
        address2: "29 Homewood Parkway",
        city: "Ocala",
        state: "Florida",
        zip: 34479
    },
    {
      first: "Eula",
      last: "Sly",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "01/24/1971",
      gender: "Female",
      phone: "(623)9596777",
      email: "eslyp@is.gd",
      password: "NaNjNjBO",
      
        address1: "732 Mccormick Drive",
        address2: "9320 Almo Park",
        city: "Glendale",
        state: "Arizona",
        zip: 85305
    },
    {
      first: "Zabrina",
      last: "Crepin",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Adult",
      dob: "02/09/1967",
      gender: "Female",
      phone: "(316)1374096",
      email: "zcrepinq@globo.com",
      password: "ARgDktqmJ83",
      
        address1: "23831 Dakota Hill",
        address2: "0750 Knutson Center",
        city: "Wichita",
        state: "Kansas",
        zip: 67230
    },
    {
      first: "Cary",
      last: "Thieme",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "03/13/1967",
      gender: "Female",
      phone: "(309)2514634",
      email: "cthiemer@jalbum.net",
      password: "Zv2aGbi9Ypk",
      
        address1: "1 Old Gate Way",
        address2: "24488 Summer Ridge Lane",
        city: "Peoria",
        state: "Illinois",
        zip: 61651
    },
    {
      first: "Terrye",
      last: "Costin",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Parent",
      dob: "10/11/1983",
      gender: "Female",
      phone: "(713)8808442",
      email: "tcostins@geocities.com",
      password: "4q0YdNw8P",
      
        address1: "60946 Ronald Regan Hill",
        address2: "34 Bobwhite Circle",
        city: "Houston",
        state: "Texas",
        zip: 77080
    },
    {
      first: "Olag",
      last: "Strooband",
      community: communities[getRandomIndex(communities)],
      ageBracket: "Senior",
      dob: "04/07/1946",
      gender: "Male",
      phone: "(513)7115853",
      email: "ostroobandt@msu.edu",
      password: "CnFJ23Wn4jO1",
      
        address1: "0148 Graceland Pass",
        address2: "50 Spohn Terrace",
        city: "Cincinnati",
        state: "Ohio",
        zip: 45203
    }
  
  ]
  return db.User.create(...residentSeed)
}

//still have to populate the charts
Promise.all([
  db.Community.remove({}),
  db.User.remove({}),
  db.Chart.remove({}),
  db.Event.remove({})
])
  .then(() => {
    db.Community.create(...communitySeed)
      .then((communities) => {
        seedUsers(communities)
          .then(
            (users) => { seedEvents(communities, users).then(()=>{
              if (err){ console.log(err)}
              process.exit(0)
            })}
          )
      })
    })


