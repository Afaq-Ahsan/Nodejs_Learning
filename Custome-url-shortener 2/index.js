const express = require('express');
const urlRouter = require('./routes/url');
const { connectToMongoose } = require('./connect');
const URL = require('./models/urls');

const app = express();

const PORT = 8000;

app.use(express.json());
app.use('/url', urlRouter);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
     timestamp : Date.now()
    }
  );
  res.redirect(entry.redirectURL);
});

connectToMongoose('mongodb://localhost:27017/short-url').then(() => {
  console.log('MongoDB connected');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
