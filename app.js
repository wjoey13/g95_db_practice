const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.listen(port,() => console.log(`listening on ${port}`));

app.get('/', (request,response) => { 
    queries.listAll().then(result => { response.send({data: result})})
} )

app.get('/:id', (request,response) => {
    queries.oneStudent(request.params.id).then(result => { response.send({data: result})})
} )

app.post('/',(request,response) => {
    queries.createStudent().then(data => response.json(data))
    console.log(request.body)
    res.send('🐉')
})

app.put('/', (request,response) => {
    response.send('this is workings!!')
})

app.delete('/', (request,response) => {
    queries.deleteStudentById(request.params.id).then((data) => {
        response.json(data)
    })
})
