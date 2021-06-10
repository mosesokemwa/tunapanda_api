const Router = require('@koa/router');

const router = new Router({
    prefix: '/users'
});

// http://localhost:3000/api/
router.get('/', ctx => {
    const data = JSON.stringify(people);
    ctx.body = data;
    ctx.status = 200;
});

// http://localhost:3000/api/id/3
router.get('/id/:id', ctx => {
    const q = ctx.params.id;
    const data = JSON.stringify(people[parseInt(q)]);
    ctx.assert(data, 401, 'No user with that id');
    ctx.body = data;
    ctx.status = 200;
});

// http://localhost:3000/api/name
router.get('/name', ctx => {
    // get user by name
});