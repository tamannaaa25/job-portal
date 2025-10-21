import './config/instrument.js';
import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
// ... rest of imports ...
import connectDB from './config/db.js';
import * as Sentry from '@sentry/node';
import { clerkWebhooks } from './controllers/webhooks.js';
import companyRoutes from './routes/companyRoutes.js';
import connectCloudinary from './config/cloudinary.js';


dotenv.config();

const app = express();

const startServer = async () => {
    try {
        await connectDB();
        await connectCloudinary();
        
        // --- Middleware ---
        
        // Configure CORS to allow your frontend's origin (http://localhost:5173)
        // This is crucial for fixing the Access-Control-Allow-Origin error.
        app.use(cors({
            origin: 'http://localhost:5173', // Allow only the frontend's URL
            credentials: true // Crucial for sending cookies/auth headers
        }));
        
        app.use(express.json());
        
        // ... rest of routes and setup ...
        app.use('/api/company', companyRoutes);
        app.post('/webhooks', clerkWebhooks);
        app.get('/', (req, res) => res.send("Hello world"));
        Sentry.setupExpressErrorHandler(app);

        // 🛑 CHANGE MADE HERE: Explicitly setting port to 5000 to match client's expectation
        const PORT = process.env.PORT || 5174; 
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error("Server failed to start:", error);
        process.exit(1);
    }
};

startServer();
