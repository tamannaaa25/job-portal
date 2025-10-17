import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import * as Sentry from '@sentry/node';
import { clerkWebhook } from './controllers/webhooks.js';

dotenv.config();

const app = express(); // ✅ app must exist first

await connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("Hello world"));

// ✅ Now setup Sentry handlers after app is defined
Sentry.setupExpressErrorHandler(app);

const PORT = process.env.PORT || 3577;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.post('/webhooks',clerkWebhook);