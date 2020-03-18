module.exports = app => {
    app.once('server', server => {
        // console.log('egg app 服务已启动，server:' + JSON.stringify(server))
    })
    app.on('error', (err, ctx) => {
        // report error
    });
    app.on('request', ctx => {
        // console.log('egg app 有新的 request:' + JSON.stringify(ctx))
    });
    app.on('response', ctx => {
        // console.log('egg app 有新的 response:' + JSON.stringify(ctx))
    });
}