const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use('/hostels/:id', express.static(path.join(__dirname, 'public')));

app.get('/api/hostels/:id', (req, res) => {
  const hostelId = req.params.id;
  axios.get(`http://localhost:3001/api/hostels/${hostelId}`)
    .then((response) => {
      res.send(response.data);
    });
});

app.get('/hostels/:id/bookings', (req, res) => {
  const hostelId = req.params.id;
  axios.get(`http://localhost:3001/hostels/${hostelId}/bookings`)
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
