module.exports = async function (ctx, next) {
    const q = ctx.query.id;
    // for key, val in q, if(key != "id")
    if(q != 2){
        ctx.throw(400, 'Id is required');
    }
    await next();
}