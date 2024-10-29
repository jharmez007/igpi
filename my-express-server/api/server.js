// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Paystack secret key
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// Route to initialize a one-time payment
app.post('/api/paystack/initialize', async (req, res) => {
    const { email, amount } = req.body;

    // Validate the email and amount from the frontend
    if (!email || !amount || amount < 100) {
        return res.status(400).json({ status: false, message: 'Invalid email or amount.' });
    }

    try {
        // Initialize payment request to Paystack
        const paystackResponse = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                email,
                amount: amount * 100, // Paystack expects the amount in Kobo (100 Kobo = 1 Naira)
                callback_url: `${process.env.FRONTEND_URL}/payment-success`, // Redirect on successful payment
            },
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const { data } = paystackResponse;
        return res.status(200).json({ status: true, data: data.data });
    } catch (error) {
        console.error('Error initializing payment:', error);
        return res.status(500).json({ status: false, message: 'Failed to initialize payment.' });
    }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
