let Users = require('./users');
const bodyMaker = require('./utils').bodyMaker;

const prepareUser = (user) => {
    if(user == null) {
        return user;
    }
    return {
        id: user._id,
        name: user.name,
        age: user.age
    }
};

module.exports = {
    create(req, res, next){
        return Users.create({
            name: req.body.name,
            age: req.body.age
        }).then((user) => {
            res.json(bodyMaker(user, 201));
        }).catch((err) => {
            next(err);
        })
    },
    getAll(req, res, next){

        return Users.find({})
            .then((users) => {
                let data = users.length > 0 ? users.map(prepareUser) : [];
                res.json(bodyMaker(data));
            }).catch((err) => {
                next(err);
            })
    },
    getOne(req, res, next){

        return Users.findById(req.params.id)
            .then((user) => {
                if(user === null) {
                    let error = new Error(`User with id: ${req.params.id} not found!`);
                    error.status = 404;
                    throw error;
                }
                res.json(bodyMaker(prepareUser(user)));
            }).catch((err) => {
                next(err);
            })
    },
    update(req, res, next){
        return Users.update({_id: req.params.id}, {
            name: req.body.name,
            age: req.body.age
        }).then((user) => {
            return Users.findById(req.params.id);
        }).then((user) => {
            if(user === null) {
                let error = new Error(`User with id: ${req.params.id} not found!`);
                error.status = 404;
                throw error;
            }
            res.json(bodyMaker(prepareUser(user)));
        }).catch((err) => {
            next(err);
        })
    },
    delete(req, res, next){
        return Users.findByIdAndRemove(req.params.id)
            .then((user) => {
                res.json(bodyMaker(prepareUser(user)));
            }).catch((err) => {
                next(err);
            })
    }
}