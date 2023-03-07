import React, { useState } from 'react';
import styles from "./hotel.module.css"

function HotelBooking() {
  const [location, setLocation] = useState('');
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform hotel search with filter criteria
    console.log(`Performing hotel search with filters:
      Location: ${location},
      Check-in date: ${checkinDate},
      Check-out date: ${checkoutDate},
      Number of rooms: ${numRooms},
      Number of adults: ${numAdults},
      Number of children: ${numChildren}`);
  };

  return (
    <div className={styles.hotel_booking_container}>
      <h1>Book a Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="checkinDate">Check-in Date:</label>
        <input
          type="date"
          id="checkinDate"
          value={checkinDate}
          onChange={(e) => setCheckinDate(e.target.value)}
        />
        <label htmlFor="checkoutDate">Check-out Date:</label>
        <input
          type="date"
          id="checkoutDate"
          value={checkoutDate}
          onChange={(e) => setCheckoutDate(e.target.value)}
        />
        <label htmlFor="numRooms">Number of Rooms:</label>
        <input
          type="number"
          id="numRooms"
          value={numRooms}
          onChange={(e) => setNumRooms(e.target.value)}
        />
        <label htmlFor="numAdults">Number of Adults:</label>
        <input
          type="number"
          id="numAdults"
          value={numAdults}
          onChange={(e) => setNumAdults(e.target.value)}
        />
        <label htmlFor="numChildren">Number of Children:</label>
        <input
          type="number"
          id="numChildren"
          value={numChildren}
          onChange={(e) => setNumChildren(e.target.value)}
        />
        <button type="submit">Search Hotels</button>
      </form>
    </div>
  );
}

export default HotelBooking;