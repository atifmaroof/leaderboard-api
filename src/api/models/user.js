
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
        },
        participantName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        units: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        points: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        selectedDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    // User.associate = models => {
    //     User.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     })
    // }
    User.associate = models => {
        User.hasOne(models.UserAttribute, { foreignKey: 'fk_userid', targetKey: 'id' })
    }
    return User;
}