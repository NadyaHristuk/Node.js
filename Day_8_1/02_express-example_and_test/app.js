require("./utils/db");
const app = require("express")();
const testRoute = require("./routes/test");
const vegetablesRoute = require("./routes/vegetables");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
    console.log(`--->  ${request.method} -- ${request.url}`);
    next();
});

app.use("/test/", testRoute);

app.use("/vegetables/", vegetablesRoute);

app.listen(9999);