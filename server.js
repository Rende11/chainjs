import express from 'express';
import bodyParser from 'body-parser';
import Web3 from 'web3';
import truffle from 'truffle-contract';
import path from 'path';
import fs from 'fs';

import { getHashInfo } from './src/storage';

const app = express();
const port = 3003;
const localBlockchain = 'http://localhost:8545';

const provider = new Web3.providers.HttpProvider(localBlockchain);
const web3 = new Web3(provider);
web3.eth.defaultAccount = web3.eth.accounts[0];
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());


app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use('/sha', async (request, response) => {
  const hash = request.body.sha;

  const abi = JSON.parse(fs.readFileSync('./build/contracts/Store.json'));
  const store = truffle(abi);
  store.setProvider(provider);

  try {
    const instance = await store.deployed();
    const time = await instance.getDocumentTime.call(hash);

    if (time > 0) {
      response.end(JSON.stringify({ ts: time.toNumber() }));
    } else {
      await instance.addDocument(hash);
      const settedTime = await instance.getDocumentTime.call(hash);
      response.end(JSON.stringify({ ts: settedTime.toNumber() }));
    }
  } catch(err) {
    console.log(err);
  }

});


app.listen(port, () => {
  console.log(`Ready on port: ${port}`);
});

