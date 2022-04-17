const Express = require('express');

const App = Express();

App.get('/', (req, res) => {
    console.log('Home Page reuested....');
    res.send('Welcome to docker setup');
})
App.get('/test', (req, res) => {
    console.log('Test Page reuested....');
    res.send('Chaning Testing');
})

App.listen(9000, () => {
    console.log('Server Started, Listening on PORT : ', 9000);
})