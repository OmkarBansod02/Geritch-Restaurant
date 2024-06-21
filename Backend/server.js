import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import reservationRoutes from './routes/reservationRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL ],
    methods: ["GET","POST","PUT", "DELETE"],
    credentials: true
})) 
app.use(express.json());

app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
