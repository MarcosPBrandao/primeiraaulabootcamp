const express = require('express');
const { uuid } = require('uuidv4');
const app = express();
app.use(express.json());
const projects = [];
app.get('/projects', (request, response) => {
    // //console.log('Passei por get');
    // //const { title, owner } = request.query;  
    // const query = request.query;  
    // console.log(query);
    //console.log(title);
    //console.log(owner);
    return response.json(projects);
})

app.post('/projects', (request, response) => {
    //const body = request.body;
    //console.log('Passei por post');
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };
    projects.push(project);
    //console.log(body);
    return response.json(project);
})
app.put('/projects/:id', (request, response) => {
    //const params = request.params;
    //console.log(params);
    //console.log('Passei por put');
    const { title, owner } = request.body;
    const { id } = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project Not Found'});
    }
    const project = {
        id,
        title,
        owner
    }
    projects[projectIndex] = project;
    return response.json(project);
})
app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project Not Found'});
    }    
    projects.splice(projectIndex, 1);
    //console.log('Passei por delete');
    return response.status(204).send();
})


app.listen(3333, () => {
    console.log('😍😍😍Backed started')
});