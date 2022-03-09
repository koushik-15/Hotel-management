const express = require("express"),
  router = express.Router(),
  dotenv = require("dotenv"),
  uuidv4 = require("uuid/v4");
dotenv.config();
(config = require("../config.js")),
  (bcrypt = require("bcrypt")),
  (jwt = require("jsonwebtoken"));
const { User } = require("../sequelize");
//auth routes
router.get("/login", (req, res) => {
  console.log("Session Active Status " + req.session.status);
  console.log("Session Active ID " + req.session.user_id);
  if (req.session.status) {
    res.redirect("/user");
  } else {
    res.render("login");
  }
});
router.post("/login", (req, res) => {
  /* login the user */
  console.log("login post request");
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password).then((passwordMatch) => {
          if (passwordMatch) {
            //login success
            const JWT = create_token(user.username, "100000");
            console.log("login success");
            res.cookie("jwt", JWT, {
              expire: 60000 + Date.now(),
              httpOnly: true,
              sameSite: true,
            });
            //managing session using express session, just using to check login status
            console.log(user.dataValues.id);
            req.session.user_id = user.dataValues.id;
            req.session.status = true;
            req.session.username = user.dataValues.username;
            res.redirect("/user");
          }
        });
      } else {
        res.send("No such user found!");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/register", (req, res) => {
  if (req.session.status) res.redirect("/user");
  else res.render("register");
});
router.post("/register", (req, res) => {
  /* create a new user */
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  User.findOne({
    where: { email: email },
  })
    .then((user) => {
      if (user) {
        res.send("Email already exists!");
      } else {
        const hash = bcrypt.hash(
          password,
          config.saltingRounds,
          (err, hashed) => {
            if (err) {
              console.log("error hashing the password");
            } else {
              const newUser = {
                username: username,
                email: email,
                password: hashed,
              };
              User.create(newUser)
                .then((user) => {
                  console.log("user's auto-generated ID:", user.id);
                  res.redirect("/login");
                })
                .catch((err) => {
                  console.log(err);
                  res.send("/login");
                });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/logout", (req, res) => {
  //clear all cookies
  res.clearCookie("jwt");
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      //destroy the session and redirect back to login page
      res.redirect("/login");
    }
  });
});

module.exports = router;

//middleware
function create_token(username, expiresIn) {
  const payload = { user: username };
  const options = { expiresIn: expiresIn, issuer: "AxDu" };
  const secret = config.jwt_secret;
  const token = jwt.sign(payload, secret, options);
  return token;
}
