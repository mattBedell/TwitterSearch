'use strict'
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
// Thanks to WDI instructional staff for user auth template
const express      = require('express');
const { createUser }    = require('../models/user.js');
const { authenticate }   = require('../lib/auth');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: true });

const usersRouter  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', urlParser, createUser, (req, res) => {
  res.redirect('/');
});

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/profile', { user: res.user });
});

module.exports = usersRouter;
