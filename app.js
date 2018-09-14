const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');

app.listen(port,() => console.log(`listening on ${port}`));

app.get('/', (request,response)=> { 
    queries.listAll().then(result => { response.send({data: result})})
} )
