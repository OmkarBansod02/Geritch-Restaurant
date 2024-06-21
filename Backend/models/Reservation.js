import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  email: { 
    type: String,
      required: [true, "Email Is Required!"],
      
  },
  phone: {type: String,
    required: [true, "Phone Is Required!"],
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"], },
  date: { type: String,
    required: [true, " Date Is Required!"], },
  time: { type: String,
    required: [true, "Time Is Required!"],},
  guests: { type: Number, required: [true, "No. of Guests Required!"] },
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
