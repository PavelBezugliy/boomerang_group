'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const types = [{ user_name: name, score: count }];
    const data = types.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
