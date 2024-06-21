import express from 'express';
import { createReservation, getReservations } from '../controllers/reservationController.js';

const router = express.Router();

router.post('/post', createReservation);
router.get('/get', getReservations);

export default router;
