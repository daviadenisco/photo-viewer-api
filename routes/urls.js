var express = require('express');
var router = express.Router();
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // console.log(results);
    return results;
  })

router.get('/', function(req, res, net) {
  if (req.query.dimension === 'viewAll' || !req.query.dimension) {
    res.send(results);
  } else {
    const filteredResults = results.filter((url) => {
      console.log('URL BACKEND: ', url.url)
      return url.url.indexOf(req.query.dimension) !== -1;
    })
    res.send(filteredResults);
  }
  console.log('REQ.QUERY: ', req.query)
})

module.exports = router;
