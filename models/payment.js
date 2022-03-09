
module.exports = (sequelize, type)=>{
    return sequelize.define('payment',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        checkoutDate:{
            type:type.DATE,
            allowNull: true,
            defaultValue: null   
        },
        checkInDate:{
            type:type.DATE,
            defaultValue: new Date()
        },
        custId: {
            type:type.STRING,
            allowNull: false
        },
        total:{
            type: type.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        paystatus:{
            type: type.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        createdAt: {
            type:type.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type:type.DATE,
            defaultValue: new Date()
        }
     }
    )
}