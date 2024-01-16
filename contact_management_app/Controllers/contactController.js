const express = require('express');

const Contact = require('../models/contactSchema');

const getContacts = async (req, res) => {

  const data = await Contact.find({user_id: req.user.id});

  if (!data) {
    res.status(404);
    throw new Error('Data no found');
  }

  console.log(data);
  res.status(200).send({ data });
};
const postContacts = async (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ msg: 'All fields are req....0' });
  }

  console.log(req.body);

  const result = await Contact.create({
    name: data.name,
    email: data.email,
    phone_no: data.phone_no,
    user_id:req.user.id
  });

  console.log('result is : ', result);

  res.status(200).send({ msg: 'Success' });
};

const putContacts = async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);

  if (!data) {
    res.status(404);
    throw new Error('Data no found');
  }

  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User don't allow to update the other's contact")
  }

  const value = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  Contact.find;
  console.log('value is ', value);

  res.status(200).send({ msg: 'success' });
};

const deleteContacts = async (req, res) => {
  const id = req.params.id;

  const data = await Contact.findById(id);

  if (!data) {
    res.status(404);
    throw new Error('Data not found');
  }

  if(data.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User don't allow to update the other's contact")
  }

  await data.deleteOne({_id:req.params.id});

  res.status(200).send({ msg: `delete contact whose is ${id}` });
};

module.exports = { getContacts, postContacts, putContacts, deleteContacts };
