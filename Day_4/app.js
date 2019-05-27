const Koa = require("koa");
const app = new Koa();
const mongoose = require("mongoose");
const koaBody = require("koa-body");
const router = require("./router/router");

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://user:123@cluster0-jkmtu.mongodb.net/test?retryWrites=true"
);

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(async ctx => (ctx.body = "Hello from Koa!"));

app.listen(3010, () => console.log("server is runing"));
