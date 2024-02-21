const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/ian', (req,res) => {res.send("Hello Ian")});

app.listen(port, ()=>console.log("Listening"));
