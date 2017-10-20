import express from 'express';

const app = express();
const port = 3001;

app.post('/name', (request, response) => {
  console.log(request.route);
  response.send('Hello Moto');
})

app.listen(port, () => {
  console.log(`Ready on port: ${port}`);
});

