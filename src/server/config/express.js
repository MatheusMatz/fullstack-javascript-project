const express = require('express')();
const consign = require('consign')();
const bodyParser = require('body-parser');
const validator = require('express-validator')();

const app = require('express');

module.exports = () => {
  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(bodyParser.json());
  express.use(validator);
  express.use(app.static('dist'));

  consign.include('routes').then('connectionFactory').into(express);

  return express;
};
