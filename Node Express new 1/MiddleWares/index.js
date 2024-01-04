const fs = require('fs');

const logReqRes = (fileName)=> {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `${Date.now()} : ${req.method} : ${req.path}`,
      (err, data) => {
        next();
      }
    );
  }
}

module.exports = { logReqRes };
