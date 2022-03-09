
module.exports = (sequelize, type)=>{
    return sequelize.define('user',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        username: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        bookingId: {
            type: type.STRING,
            allowNull:true
        },
        foodOrderedIds:{
            type: type.TEXT,
            allowNull: true,
            defaultValue:null
        },
        password:{        
            type: type.STRING,
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
                    fields: ['email','id']
                }
            ]
        }
    )
}