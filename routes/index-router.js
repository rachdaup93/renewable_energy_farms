const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  // check for feedback messages from the sign up process
  res.locals.stylesheet = "/_css/index.css";
  res.locals.signupFeedback = req.flash('successMessage');
  res.render('index');
});

module.exports = router;
