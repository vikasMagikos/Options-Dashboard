const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const { orderTrackerObj } = require('./buySell.js');

// console.log(orderTrackerObj)

app.get('/getTradedData', (req, res) => {
    res.send(orderTrackerObj);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});