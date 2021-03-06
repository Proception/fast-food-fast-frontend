const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

app.use(express.static(`${__dirname}/dist/`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(port, () => {
  console.log(`Fast Food Fast is listening on port ${port}! `);
});
