const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const coursesList = [
  {
    name: 'Solidity',
    price: '1000',
  },
];

app.get('/api/courses/:id', (req, res) => {
  const id = req.params.id;

  const data = coursesList[id];
  if (!data) res.status(404).send({ msg: 'data is not available' });
  res.status(200).send(data);
});

app.get('/api/courses', (req, res) => {
  if (!coursesList) res.status(404).send({ msg: 'data is not available' });

  res.status(200).send(coursesList);
});

app.post('/api/courses', (req, res) => {
  const body = req.body;

  if (!body.name || !body.price)
    res.status(404).send({ msg: 'name and price required' });

  coursesList.push(body);

  res.status(202).send({ msg: 'data is entered successfully' });
});

app.put('/api/courses/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  coursesList[id].name = body.name;
  coursesList[id].price = body.price;

  if (
    coursesList[id].name === body.name &&
    coursesList[id].price === body.price
  )
    res.status(201).send({ msg: 'data updated successfully' });

  res.status(404).send({ msg: 'error while updating data' });
});

app.delete('/api/courses/:id', (req, res) => {
  const id = req.params.id;

  const data = coursesList[id];

  if (!data) res.status(404).send({ msg: 'data not found' });

  const deletedData = coursesList.splice(id, 1);

  res.status(200).send(deletedData);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
