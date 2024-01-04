const express = require('express');
const path = require('path');
const multer = require('multer');
// npm i multer 
// multer is used for uploading files
const app = express();
const PORT = 3001;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: 'uploads/' });

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded());

app.get('/', (req, res) => {
  return res.render('homepage');
});

app.post('/upload', upload.single('profileImage'), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
