"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Inventory);
      User.hasMany(models.TransactionHistory);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Email format is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
          },
          len: {
            args: [5, Infinity],
            msg: "Password length minimal 5 characters",
          },
        },
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Username is required",
          },
          notNull: {
            msg: "Username is required",
          },
        },
      },
      experience: {
        type: DataTypes.INTEGER,
      },
      balance: {
        type: DataTypes.INTEGER,
        defaultValue: 10,
      },
      selectedSkin: {
        type: DataTypes.STRING,
        defaultValue: "default",
      },
      selectedChar: {
        type: DataTypes.STRING,
        defaultValue: "default",
      },
      easyScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      mediumScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      hardScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      impossibleScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user, option) => {
    user.password = hashPassword(user.password);
  });
  return User;
};
