const express = require('express');
const router  = express.Router();
const fs = require('fs');

router.get('/:team', (req, res, next) => {
  // check for feedback messages from the sign up process
  const teamName = req.params.team;
  const customScript = `'../public/_js/surveys/'${ teamName }.js`;

  res.locals.stylesheet = `/_css/surveys/${ teamName }.css`;
  res.locals.script = 'formValidation.js';

  if (fs.existsSync(customScript)) {
    res.locals.script2 = `/_js/surveys/${ teamName }.js`;
  }
  
  res.render(`surveys/${ teamName }`);
});

module.exports = router;
