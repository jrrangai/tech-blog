const { User } = require("../models");

const userData = [
  {
    username: "TestBoy1",
    password: "HelloWorld000",
  },
  {
    username: "TestGirl1",
    password: "WorldHello111",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
