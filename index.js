// Challenge 1
// -Write a paragraph about what Node.js is and explain at least 3 of its core features.
// -Submit the paragraph to your TL.

// npm install express
// npm i --save-dev nodemon

const express = require('express'); // express package
const server = express(); // create servesr

server.get('/', (req, res) => {
    res.send('Hello!');
});

const port_num = 5e3;
server.listen(port_num, () => {
    console.log('Server runningon http://localhost:5000');
});
