const express = require('express');
const { request } = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message:'Hello Word com nodemon'});
})

app.listen(3333, () => {
    console.log('😍😍😍Backed started')
});