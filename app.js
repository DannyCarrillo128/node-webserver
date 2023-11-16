/* const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
  res.writeHead(200, { 'Content-Type': 'application/csv' });
  res.write('id, name\n');
  res.write('1, John\n');
  res.write('2, Jane\n');
  res.write('3, Jake\n');
  res.end();
}).listen(8080);

console.log('listening at port', 8080); */

require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public')); // This prevents the next function from being executed.

/* app.get('/', (req, res) => {
  res.send('Hello world!');
}); */

app.get('/', (req, res) => {
  res.render('home', {
    title: `2010's Road Trip`,
    name: 'John Doe',
    alt: ''
  }); // Rendering a html file with handlebars (hbs)
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    title: `2010's Road Trip`,
    name: 'John Doe',
    alt: 'alt'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    title: `2010's Road Trip`,
    name: 'John Doe',
    alt: 'alt'
  });
});

app.get('/hello-world', (req, res) => {
  res.send(':p');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// app.listen(8080);
app.listen(port, () => {
  console.log(`Listening at port ${ port }`);
});
