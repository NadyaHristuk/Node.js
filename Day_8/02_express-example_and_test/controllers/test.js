const controller = (request, response, next) => {
    request.test = "Message from controller!";
    next();
};
module.exports = controller;