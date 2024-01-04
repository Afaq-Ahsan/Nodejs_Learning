const jwt = require('jsonwebtoken');

const secret = 'afaq@3#';

function setUser(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    secret
  );
}

function getUser(token) {
  return jwt.verify(token, secret);
}

module.exports = { setUser, getUser };

// const sessionIDToSuserMap = new Map();

// function setUser(id, user) {
//   sessionIDToSuserMap.set(id, user);
// }

// function getUser(id) {
//   sessionIDToSuserMap.get(id);
// }

// module.exports = { setUser, getUser };
