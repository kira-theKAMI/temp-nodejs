const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end("Welcome to our HomePage!");
    }

    if (req.url === '/about') {
        res.end("Here is our history!");
    }

    else {
    res.end(`
    <h1>Oops!</h1>
    <p>You visited wrong Path</p>
    <a href="/">HomePage</a>
    `);
    }
});

server.listen(5000);