'use strict'
var Sequelize = require('sequelize')
var db = require('../index.js')

const campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  credits: {
    type: Sequelize.STRING
  }
});

module.exports = campus;
