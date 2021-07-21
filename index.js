const express = require('express');
const fetchTemperature = require('./routes/fetchTemperature');

const app = express();

app.use(express.json());

app.use(fetchTemperature);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log('Server started');
});
