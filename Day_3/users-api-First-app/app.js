let env = process.env.NODE_ENV || 'dev';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require("./route.js");
const app = express();

app.set("env", env);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/users/", route.getAll);
app.get("/users/:id", route.getOne);
app.post("/users/", route.create);
app.put("/users/:id", route.update);
app.delete("/users/:id", route.delete);

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(200);
    res.json({
        status: err.status || 500,
        errors: [err.message]
    })
});


app.listen(process.env.PORT || 5544);
console.log(`LISTENING: ${process.env.PORT || 5544}`);
module.exports = app;