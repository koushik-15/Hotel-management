
module.exports = (sequelize, type)=>{
    return sequelize.define('item',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type:type.STRING,
            allowNull: false
        },
        price: {
            type:type.INTEGER,
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