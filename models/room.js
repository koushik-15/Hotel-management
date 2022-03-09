module.exports = (sequelize, type)=>{
    return sequelize.define('room',{
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        available: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        roomNo: {
            type: type.INTEGER,
            allowNull: false
        },
        roomtype:{
            type: type.STRING,
            defaultValue: null
        },
        bookedby:{
            type: type.STRING,
            allowNull: true
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
                    fields: ['roomNo']
                }
            ]
        }
    )
}