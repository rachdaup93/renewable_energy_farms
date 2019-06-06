const express = require('express');
const router  = express.Router();

router.get('/:team', (req, res, next) => {
  // check for feedback messages from the sign up process
  let teamName = req.params.team;
  console.log(teamName);
  res.locals.stylesheet = `/_css/surveys/${ teamName }.css`;
  console.log(`/_css/surveys/${ teamName }.css`);
  res.render(`surveys/${ teamName }`);
});

module.exports = router;
