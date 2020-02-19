var express = require('express');
var router = express.Router();
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

/* GET urls listing. */
// router.get('/', function(req, res, next) {
//   res.send('response from urls.js');
// });

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    return results;
  })

router.get('/', function(req, res, net) {
    res.send(results);
})

module.exports = router;
