import express from 'express';
import bodyParser from 'body-parser';
import Web3 from 'web3';

import path from 'path';
import fs from 'fs';

import { getHashInfo } from './src/storage';

const app = express();
const port = 3003;
const localBlockchain = 'http://localhost:8545';
const web3 = new Web3(new Web3.providers.HttpProvider(localBlockchain));

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());


app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*app.post('/sha', (request, response) => {
  const hash = request.body.sha;
  const hashInfo = getHashInfo(hash);
  response.end(JSON.stringify({ ts: hashInfo }));
});
*/
app.use('/sha', (request, response) => {
  const hash = request.body.sha;
 
  const store = web3.eth.contract(JSON.parse(fs.readFileSync('./build/contracts/Store.json')));
  const hashInfo = getHashInfo(hash);
  console.log(store);
 

  const time = store.addDocument(hash);
  console.log(time);
  response.end(JSON.stringify({ ts: hashInfo }));
});


app.listen(port, () => {
  console.log(`Ready on port: ${port}`);
});

