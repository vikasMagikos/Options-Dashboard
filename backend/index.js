const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const { orderTrackerObj } = require('./buySell.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// console.log(orderTrackerObj)

app.get('/getTradedData', (req, res) => {
    res.send(orderTrackerObj);
  });

app.post('/modifyOrderTracker', (req, res) => {
  let data = req.body
  res.send({"status": "Success",data: data});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});