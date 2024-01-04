const { getUser } = require('../service/serviceAuth');

async function restrictToLoggedInUserOnly(req, res, next) {
  const userUid = req.cookies?.uid; // if find cookie whose name is uid
  if (!userUid) return res.redirect('/studentportal');
    
  const user = getUser(userUid);

  if (!user) return res.redirect('/studentportal');

  req.user = user;

  next();
}

module.exports = { restrictToLoggedInUserOnly };
