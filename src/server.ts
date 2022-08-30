import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'API Rentalx' });
});

app.post('/courses', (request, response) => {
  const { name } = request.body;

  return response.json({ msg: true });
});

app.listen(3333, () => {
  console.log('🚀 backend started');
});
