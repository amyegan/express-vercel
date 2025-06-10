const app = require('express')();
const { v4 } = require('uuid');

app.get('/', (req, res) => {
  const path = `/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`<p>Hello! Go to item: <a href="${path}">${path}</a></p>`);
});

app.get('/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`<p>Item: ${slug}</p><a href="/">Go back</a>`);
});

app.get('/api/redirect', async (req,res) => {
  const code = req.query.code;
  console.log('code', code);
  res.redirect('https://vercel.com');
})

module.exports = app;