import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';


const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/sha', (request, response) => {
  console.log('Okek');
  console.log(request.body);
  console.log(request.body.sha);
  response.end('OKEY');
})
app.listen(port, () => {
  console.log(`Ready on port: ${port}`);
});

