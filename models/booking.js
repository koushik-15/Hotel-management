
module.exports = (sequelize, type)=>{
    return sequelize.define('booking',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        checkin:{
            type:type.DATE,
            defaultValue: new Date()
        },
        checkout:{
            type:type.DATE,
            defaultValue: new Date()
        },
        bookstatus: {
            type:type.BOOLEAN,
            defaultValue: false
        },
        custId:{
            type:type.STRING,
            allowNull: false
        },
        roomtype:{
            type: type.STRING,
            allowNull: false
        },
        roomId:{
            type: type.INTEGER,
            allowNull: false
        },
        createdAt: {
            type:type.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type:type.DATE,
            defaultValue: new Date()
        }
    },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['roomId']
                }
            ]
        }
    )
}
// bookid` int(10) NOT NULL,
//   `checkin` date NOT NULL,
//   `checkout` date NOT NULL,
//   `bookstatus` tinyint(1) NOT NULL DEFAULT '0',
//   `custid` int(10) NOT NULL,
//   `roomtype` varchar(20) NOT NULL,
//   `roomid` int(10) DEFAULT NULL