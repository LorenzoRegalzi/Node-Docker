
const express = require('express');
const app = express();

app.get('/', (req ,res) => {
  res.send('Hello man')
})

app.listen(3000, () => {
    console.log('App ready at 3000')
})