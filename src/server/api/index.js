'use strict';

var express = require('express');
var router = express.Router();
import request from 'request';

router.get('/csv', function (req, res) {
  request
    .get('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
    .on('response', function(response) {
      response.headers['Access-Control-Allow-Origin'] = "*";
      // console.log(response);
    })
    .pipe(res);

});



// res.setHeader('Access-Control-Allow-Origin', '*');


module.exports = router;
