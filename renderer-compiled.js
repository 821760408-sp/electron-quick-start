'use strict';

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var Clarifai = require('clarifai');
var clientID = process.env.CLARIFAI_APP_ID || '';
var clientSecret = process.env.CLARIFAI_APP_SECRET || '';

var clarifaiApp = new Clarifai.App(clientID, clientSecret);

var fs = require('fs');

function predict() {
  "use strict";
  // predict the contents of an image by passing in a url

  clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(function (response) {
    // window.res = response
    // console.log(response);
    fs.writeFile('respons.json', JSON.stringify(response.data), function (err) {
      if (err) console.log(err);
    });
  }, function (err) {
    console.error(err);
  });
}

predict();

//# sourceMappingURL=renderer-compiled.js.map