
import React, { useState } from 'react';
import axios from 'axios';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Reservation.css';

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reservations/post', formData);
      alert('Reservation successful!');
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: 1 });
    } catch (error) {
      alert('Failed to make reservation');
    }
  };

  return (
    <div className='app__res app__bg' id ="ReservationForm">
      <div className="app__res-heading">
        <h3 className="app__sub-heading" title="Book Table" >Table Bookings </h3>
        <SubHeading />
        <h1 className="headtext__cormorant">Book Your Table</h1>
        <p className="p__opensans">"Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish!"</p>
      </div>

      <div className="app__name-input flex__center">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
          <input className="date-time-input" type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input className="date-time-input" type="time" name="time" value={formData.time} onChange={handleChange} required />
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
          <button type="submit" className="custom__button app__name-input flex__center">Reserve</button>
        </form>
      </div>
    </div>
  );
};
