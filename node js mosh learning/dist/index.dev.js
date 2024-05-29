"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.json());
var coursesList = [{
  name: 'Solidity',
  price: '1000'
}];
app.get('/api/courses/:id', function (req, res) {
  var id = req.params.id;
  var data = coursesList[id];
  if (!data) res.status(404).send({
    msg: 'data is not available'
  });
  res.status(200).send(data);
});
app.get('/api/courses', function (req, res) {
  if (!coursesList) res.status(404).send({
    msg: 'data is not available'
  });
  res.status(200).send(coursesList);
});
app.post('/api/courses', function (req, res) {
  var body = req.body;
  if (!body.name || !body.price) res.status(404).send({
    msg: 'name and price required'
  });
  coursesList.push(body);
  res.status(202).send({
    msg: 'data is entered successfully'
  });
});
app.put('/api/courses/:id', function (req, res) {
  var id = req.params.id;
  var body = req.body;
  coursesList[id].name = body.name;
  coursesList[id].price = body.price;
  if (coursesList[id].name === body.name && coursesList[id].price === body.price) res.status(201).send({
    msg: 'data updated successfully'
  });
  res.status(404).send({
    msg: 'error while updating data'
  });
});
app["delete"]('/api/courses/:id', function (req, res) {
  var id = req.params.id;
  var data = coursesList[id];
  if (!data) res.status(404).send({
    msg: 'data not found'
  });
  var deletedData = coursesList.splice(id, 1);
  res.status(200).send(deletedData);
});
app.listen(PORT, function () {
  console.log("Server is running on PORT ".concat(PORT));
});