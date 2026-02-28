const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.contentType('text/html');
  res.status(200).send('<h1>Hello World!</h1>');
});

app.get('/users', (req, res) => { 
    const users = [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'bob@example.com' },
        ];
    res.status(200).json(users);
    });

const port = 8080;

app.listen(port, () => console.log(`rodando com Express na porta ${port}`));
