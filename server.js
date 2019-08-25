// Create a reference to the express module.
const express = require('express');

// Use the express function to create an express web application object.
const webapp = express();

// Create a variable to store the port number, 3000 that my server will listen for a request.
const port = 3000;

// Use the express webapp.get function to create a route for the GET '/' endpoint.
webapp.get('/hello/framework/exercise', function(request, response){  
    response.send('Hello, World... I am learning how to write Node.js application codes using Express Framework API.');
});

// Use the express listen function to instruct the server to start listening and passing
// in the port constant for the port number, 3000.

webapp.listen(port, function() {
    console.log('Express web application listening on port ' + port);
})

// 



