'use strict';

// done: Initialize your project using NPM to create and populate a package.json file
const express = require('express');
// done: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();
const PORT = process.env.PORT || 3000;

// Done: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));
// Done: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new.html', function(request, response) {
// Done: Using the response object, send the index.html file back to the user
  response.sendFile('new.html', {root: './public'});
});
app.get('/index.html', function(request, response) {
  // Done: Using the response object, send the index.html file back to the user
  response.sendFile('index.html', {root: './public'});
});

app.get('*', function(request, response){
  response.status(404).send('you found the wrong page sucka!')
});

app.listen(PORT, function() {
  // done: Log to the console a message that lets you know which port your server has started on
  console.log('server is up and running on port 3000 and can be accessed at localhost:3000 in your browser.')
});
