const route = require("express").Router();
const controller = require("../controllers/test.js");

route.get("/", controller, (request, response) => {
    response.send(`I'm work - ${request.test}`);
});

route.get("/1/", controller, (request, response) => {
    response.send(`I'm work - ${request.test} - 1`);
});

module.exports = route;