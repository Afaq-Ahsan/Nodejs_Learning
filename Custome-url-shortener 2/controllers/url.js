var nanoId = require('nano-id');
const  URL  = require('../models/urls');

async function handlegenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).send({ error: 'url is required' });

  const shortID = nanoId(8);

  console.log(shortID);

  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json(shortID);
}

module.exports = {handlegenerateNewShortURL,}
