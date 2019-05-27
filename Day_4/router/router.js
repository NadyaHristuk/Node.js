const Router = require("koa-router");
const router = new Router();

const database = require("../models/database");

router.post("/user", async ctx => {
  try {
    const results = await database.addUser({ ...ctx.request.body });
    ctx.body = results;
  } catch (err) {
    console.error("err", err);
    ctx.status = "500";
    ctx.body = "Internal error";
  }
});

router.get("/user", async ctx => {
  try {
    // console.log(ctx.request.body);
    const results = await database.getAll();
    ctx.body = results;
  } catch (err) {
    console.error("err", err);
    ctx.body = "Internal error";
  }
});

router.get("/user/:id", async ctx => {
  try {
    // console.log(ctx.request.body);
    const results = await database.getById(ctx.params.id);
    ctx.body = results;
  } catch (err) {
    console.error("err", err);
    ctx.body = "Internal error";
  }
});

router.del("/user/:id", async ctx => {
  try {
    // console.log(ctx.request.body);
    const results = await database.delUser(ctx.params.id);
    ctx.body = "User del";
  } catch (err) {
    console.error("err", err);
    ctx.body = "Internal error";
  }
});

router.put("/user/:id", async ctx => {
  try {
    // console.log(ctx.request.body);
    const results = await database.delUser(ctx.params.id);
    ctx.body = "User del";
  } catch (err) {
    console.error("err", err);
    ctx.body = "Internal error";
  }
});

router.get("/", async ctx => (ctx.body = "hello!!!"));

module.exports = router;
