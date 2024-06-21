# Geritch-Restaurant

A fully responsive restaurant website with a table booking system where customers can book their table by providing their name, email, phone number, and choosing a date and time.

## Features

- **Responsive Design**: Optimized for various screen sizes and devices.
- **Table Booking System**: Allows customers to book tables with their details.
- **Authentication & Authorization**: Secure login and registration.
- **Admin Panel**: Manage reservations and view customer details.
- **Technologies Used**:
  - **Backend**: Node.js, Express.js, CORS, JWT, MongoDB.
  - **Frontend**: React.js, JavaScript, JSX, CSS.

## Project Structure

### Backend

- **Controllers**: Business logic for handling requests and responses.
- **Middlewares**: Authentication middleware.
- **Models**: MongoDB schemas and models.
- **Routes**: API endpoints for handling reservations.
- **Server**: Main server file to run the Express server.

### Frontend

- **Components**: Reusable React components.
- **Pages**: Different pages like Home, About, Menu, Contact, Reservation.
- **Styles**: CSS and other styling files.
- **App.js**: Main app file to configure routes and rendering.

## Installation

### Prerequisites

- Node.js
- MongoDB
- npm

### Backend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/restaurant-website.git
   cd restaurant-website

2. Navigate to the backend directory and install dependencies
    cd backend
    npm install
3. Create a .env file and add your MongoDB URI and JWT secret
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
4. Start the backend server
   npm run dev

### Frontend Setup
1.Navigate to the frontend directory and install dependencies
  cd frontend
  npm install
2. Start the frontend server
  npm run dev

Run the Application
The backend server will run on http://localhost:5000
The frontend server will run on http://localhost:3000
API Endpoints
POST /api/reservations: Create a new reservation.
GET /api/reservations: Get all reservations (Admin).
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login a user.
Reservation Form
The reservation form allows users to book a table by providing:

Name
Email
Phone Number
Date
Time
Number of Guests
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Contact
For any questions or inquiries, please contact your-omkarbansod221@gmail.com.



