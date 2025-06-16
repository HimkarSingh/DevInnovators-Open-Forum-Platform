// models/User.js
module.exports = (sequelize, DataTypes) => {  // DataTypes is passed as parameter
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Add other fields from your original schema
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://via.placeholder.com/150'
    },
    bio: {
      type: DataTypes.TEXT
    }
  });
  return User;
};