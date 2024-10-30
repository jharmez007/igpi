const express = require('express');
const https = require('https');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

app.get('/paystack', (req, res) => {
  const params = JSON.stringify({
    "email": req.query.email,
    "amount": req.query.amount
  });

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  const reqpaystack = https.request(options, respaystack => {
    let data = '';

    respaystack.on('data', (chunk) => {
      data += chunk;
    });

    respaystack.on('end', () => {
      res.send(data);
      console.log(JSON.parse(data));
    });
  }).on('error', error => {
    console.error(error);
  });

  reqpaystack.write(params);
  reqpaystack.end();
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
