const express = require('express'),
router = express.Router(),
uuidv4 = require('uuid/v4');
const { User, Room, Booking, Item, Payment, FoodOrder,sequelize } = require('../sequelize');
// /user routes
router.get('/',(req,res)=>{
    res.render('home',{user: req.session.username});
});
router.post('/',(req, res)=>{
    const query = req.body.sqlQuery
    sequelize.query(query).spread(function(results, metadata) {
        if(typeof results === 'number'){
            res.send({rows:results});
        }else{
            console.log(results)
            res.send(results)
        }
      })
      .then(err=>{
          console.log(err);
          res.send(err);
      })
      .catch(err=>{
          console.log(err)
          res.send({err:"SQL SYNTAX ERROR!!"})
      })
  
});
module.exports = router;