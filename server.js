import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { getHashInfo } from './src/storage';

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
  const hash = request.body.sha;
  const hashInfo = getHashInfo(hash);
  console.log(hashInfo);
  response.end(JSON.stringify({ ts: hashInfo }));
})
app.listen(port, () => {
  console.log(`Ready on port: ${port}`);
});

