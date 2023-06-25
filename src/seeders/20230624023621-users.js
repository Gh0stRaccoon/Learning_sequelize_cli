module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      password: '123456789',
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@smith.com',
      password: '123456789',
    },
    {
      firstName: 'John',
      lastName: 'Stone',
      email: 'john@stone.com',
      password: '123456789',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};