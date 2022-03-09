const express = require('express'),
app = express(),
dotenv = require('dotenv'),
uuidv4 = require('uuid/v4');
dotenv.config();
const bodyParser = require('body-parser'),
config= require('./config.js'),
bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
cookieParser = require('cookie-parser'),
methodOverride = require('method-override'),
authRoutes     = require('./routes/auth'),
customerRoutes     = require('./routes/customer'),
compression = require('compression'),
shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
      // don't compress responses if this request header is present
      return false;
    }
    // fallback to standard compression
    return compression.filter(req, res);
  };
  
//import models
const { User, Room, Admin, Booking, Item, Payment, FoodOrder } = require('./sequelize');

app.set('trust proxy', 1);
app.set('view engine','ejs');
app.use(compression({
    filter:shouldCompress,
    threshold: 3
}));
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('express-session')({
    secret:'PeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/B?E(H', //cookie secret
    name: 'e_session',
    resave:false,
    path: 'session/',
    cookie: {sameSite: true,maxAge: 60000,httpOnly: true}, //max-age is in miliseconds
    saveUninitialized:false,
}));

app.use(methodOverride('_method'));
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});
app.disable('x-powered-by');

//REST APIs
app.get('/',(req, res)=>{
    res.redirect('/login')
});


app.use('/',authRoutes);
app.use('/user',validate_token,customerRoutes);

app.listen(process.env.PORT,(req, res)=>{
    console.log(`Server started at http://localhost:${process.env.PORT}`);
});
app.get("*",(req, res)=>{
    res.redirect('/')
})
//middleware
function validate_token(req, res, next){
    const client_token = req.cookies.jwt;
    // console.log(client_token);
    jwt.verify(client_token, config.jwt_secret, (err, decoded)=>{
        if(err){
            console.log(err);
            console.log("Token Expired!!");
            res.clearCookie("jwt");
            res.redirect("/login");
        }else{
           // console.log(decoded);
            next();
        }
    });
 }
