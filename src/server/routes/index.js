const router = require('koa-router')();
const request = require('request');

const promiseFetch = () => {
    return new Promise((resolve, reject) => {
        request('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', async (error, response, body) => {
            if (!error && response && response.statusCode === 200) {
                const pic = JSON.parse(body).images[0].url;
                resolve(pic);
            } else {
                reject(error);
            }
        });
    });
};

router.get('/', async (ctx, next) => {
    try {
        const pic = await promiseFetch();
        ctx.body = `https://www.bing.com${pic}`;
    } catch (error) {
        ctx.body = error.message;
    }
});

module.exports = router;
