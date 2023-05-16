module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      studentId: {
        type: DataTypes.INTEGER(30),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "User",
      tableName: "users",
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {};
  return User;
};
