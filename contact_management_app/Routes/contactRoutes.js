const express = require('express');
const {
  getContacts,
  postContacts,
  putContacts,
  deleteContacts,
} = require('../Controllers/contactController.js');
const validateToken = require('../MiddleWare/validateTokenHandler.js');
const router = express.Router();

router.use(validateToken);

router.get('/:id', getContacts);

router.post('/', postContacts);

router.put('/:id', putContacts);

router.delete('/:id', deleteContacts);

module.exports = router;
