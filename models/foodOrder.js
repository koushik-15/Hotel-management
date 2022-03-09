
module.exports = (sequelize, type)=>{
    return sequelize.define('foodOrder',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        orderDate:{
            type:type.DATE,
            defaultValue: new Date()
        },
        amt: {
            type:type.INTEGER,
            defaultValue: false
        },
        orderedBy:{
            type:type.STRING,
            allowNull: false
        },
        roomId:{
            type: type.INTEGER,
            allowNull: false
        },
        itemId:{
            type:type.INTEGER,
            allowNull:false
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