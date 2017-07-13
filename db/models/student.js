'use strict'
var Sequelize = require('sequelize')
var db = require('../index.js')

const student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = student;
