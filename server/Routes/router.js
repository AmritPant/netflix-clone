const fs = require('fs');
const path = require('path');
const axios = require('axios');
const express = require('express');

const router = express.Router();

const file = fs.readFileSync(
  path.join(__dirname, '..', 'public', 'index.html'),
  'utf-8'
);

router.get('/', (req, res) => {
  axios
    .get('https://api.ipify.org/?format=json')
    .then(data => {
      const ip = data.data.ip;
      axios
        .get(`https://ipapi.co/${ip}/json/`)
        .then(response => {
          const { data } = response;
          if (data.error)
            throw new Error('Something went wrong on Server (Error Code: 500)');
          return res.redirect(`/${data.country_code.toLowerCase()}/`);
        })
        .catch(err => {
          return res.status(500).send(`<h1>${err.message}</h1>`);
        });
    })
    .catch(err => res.status(500).json(err));
});

router.get('/:countryCode/', (req, res) => {
  if (req.params.countryCode.length !== 2) res.status(404).send('Dont exist');
  const countryCode = req.params.countryCode;
  axios
    .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then(data => {
      const countryName = data.data[0].name.common;
      const newFile = file.replace('{{COUNTRYNAME}}', countryName);
      res.status(200).send(newFile);
    });
});

module.exports = router;
