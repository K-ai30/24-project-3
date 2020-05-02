const db = require("../models/index");


module.exports = {
  findAll: function(req, res) {

    //if not admin
    // return
    //res.status(422).json(err)


    
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
  create: function(req, res) {
    req.body.first ="first"
    req.body.last ="last"
    req.body.phone =5
    req.body.state = "state"
    req.body.city = "city"
    req.body.zip = 30064
    req.body.street = "street"
    req.body.communityID = null
    req.body.dob = new Date()
    req.body.gender = "Male"
    req.body.ageBracket ="senior"
    req.body.email = "email@email.com"
    req.body.isAdmin = true
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};