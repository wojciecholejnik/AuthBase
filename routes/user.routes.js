const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  req.user ? res.render('logged', {username: req.user.displayName, avatar: req.user.photos[ 0 ].value}) : res.redirect('/user/no-permission');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  req.user ? res.render('profile', {username: req.user.displayName, email: req.user.emails[0].value, avatar: req.user.photos[0].value}) : res.redirect('/user/no-permission');
});

router.get('/profile/settings', (req, res) => {
  req.user ? res.render('profileSettings') : res.redirect('/user/no-permission');
});


module.exports = router;