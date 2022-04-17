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
const PORT = process.env.PORT || 3000;
App.listen(PORT, () => {
    console.log('Server Started, Listening on PORT : ', 9000);
})
