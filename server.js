const Koa = require('koa');
const Router = require('@koa/router');
const personId = require('./middleware/persons');
const people = require('./db/people')
const router = new Router({
    prefix: '/api'
});

const app = new Koa();

// app.use();
// error
// loggers
// Authentication
// cors

router.use(require('./route/users'));


app.use(router.routes());
app.listen(3000)
