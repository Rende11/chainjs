import express from 'express';
import path from 'path';

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Ready on port: ${port}`);
});

