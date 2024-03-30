"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
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
        allowNull: false,
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        // defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      balance: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      selectedSkin: {
        defaultValue: "default",
        type: Sequelize.STRING,
      },
      selectedChar: {
        defaultValue: "default",
        type: Sequelize.STRING,
      },
      easyScore: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      mediumScore: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      hardScore: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      impossibleScore: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
