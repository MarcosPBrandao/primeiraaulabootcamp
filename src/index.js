const express = require('express');

const app = express();
app.use(express.json());

app.get('/projects', (request, response) => {
    //console.log('Passei por get');
    //const { title, owner } = request.query;  
    const query = request.query;  
    console.log(query);
    //console.log(title);
    //console.log(owner);
    return response.json([
        'Projeto 8',
        'Projeto 2'
    ]);
})

app.post('/projects', (request, response) => {
    const body = request.body;
    //console.log('Passei por post');
    console.log(body);
    return response.json([
        'Projeto 10',
        'Projeto 2',
        'Projeto 3'
    ]);
})
app.put('/projects/:id', (request, response) => {
    const params = request.params;
    console.log(params);
    //console.log('Passei por put');
    return response.json([
        'Projeto 0',
        'Projeto 2',
        'Projeto 3'
    ]);
})
app.delete('/projects/:id', (request, response) => {
    //console.log('Passei por delete');
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
})


app.listen(3333, () => {
    console.log('😍😍😍Backed started')
});