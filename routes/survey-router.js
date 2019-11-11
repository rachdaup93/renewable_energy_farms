const express = require('express');
const router  = express.Router();

router.get('/:team', (req, res, next) => {
  // check for feedback messages from the sign up process
  let teamName = req.params.team;
  res.locals.stylesheet = `/_css/surveys/${ teamName }.css`;
  res.locals.script = 'formValidation.js';
  res.render(`surveys/${ teamName }`);
});

module.exports = router;
