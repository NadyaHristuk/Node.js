const Users = require("./user");

// module.exports.delUser = id => Users.findById({ _id: id }).remove();
module.exports.delUser = Id => Users.findByIdAndRemove({ _id: Id });

module.exports.getAll = () => Users.find();

module.exports.getById = id => Users.findById({ _id: id });

module.exports.addUser = function(data) {
  let User = new Users({
    login: data.login,
    email: data.email,
    password: data.password
  });

  return User.save();
};
