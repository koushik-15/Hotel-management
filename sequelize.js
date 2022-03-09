const Sequelize = require('sequelize'),
UserModel = require('./models/user'),
RoomModel = require('./models/room'),
AdminModel = require('./models/admin'),
FoodOrderModel = require('./models/foodOrder'),
ItemModel = require('./models/item'),
PaymentModel = require('./models/payment'),
BookingModel = require('./models/booking'),
chalk = require('chalk');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  //Sequelize has many static methods
  // we can get INT type by simply writing Sequelize.INTEGER
 //sequelize is associated with database
  const User = UserModel(sequelize, Sequelize);
  const Room = RoomModel(sequelize, Sequelize);
  const Admin = AdminModel(sequelize, Sequelize);
  const Booking = BookingModel(sequelize, Sequelize);
  const FoodOrder = FoodOrderModel(sequelize, Sequelize);
  const Payment = PaymentModel(sequelize, Sequelize);
  const Item = ItemModel(sequelize, Sequelize);
  const mysql = require('mysql2');
  //sync with database
  sequelize.sync({force: true})
  .then(()=>{
      console.log(chalk.green('Database and tables created!'));
  });

  module.exports = {
      User,
      Room,
      Admin,
      Booking,
      FoodOrder,
      Payment,
      Item,
      sequelize
  };
  