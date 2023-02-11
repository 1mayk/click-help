"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Maycon de Oliveira",
          email: "maycon.lrgo@gmail.com",
          password: "12345678",
          balance: 250.0,
          role: "user",
        },
        {
          username: "Marcos Raphael",
          email: "perninha@gmail.com",
          password: "abc12345",
          balance: 20.5,
          role: "therapist",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
