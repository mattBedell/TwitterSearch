/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express           = require('express');
const { logIn }  = require('../lib/auth');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: true });

// Router
const authRouter = express.Router();

/**
 * Log In and if successful assign res.user._id to the session
 * It uses the logIn middleware from the auth library to parse the form inputs
 * and save the user to the database
 */
authRouter.post('/', urlParser, logIn, (req, res) => {
  res.redirect('/home');
});

// Logout by assigning null to the userId in the session
authRouter.delete('/', (req, res) => {
  req.session.userId = null;
  res.redirect('/');
});

module.exports = authRouter;
