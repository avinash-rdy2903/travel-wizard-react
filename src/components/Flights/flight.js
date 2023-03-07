import React, { useState } from 'react';
import styles from "./flight.module.css"

function FlightSearch() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numPassengers, setNumPassengers] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform flight search with filter criteria
    console.log(`Performing flight search with filters:
      From: ${from},
      To: ${to},
      Departure date: ${departureDate},
      Return date: ${returnDate},
      Number of passengers: ${numPassengers}`);
  };



  return (
    <div className={styles.flight_search_container}>
      <h1>Search for Flights</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <label htmlFor="numPassengers">Number of Passengers:</label>
        <input
          type="number"
          id="numPassengers"
          value={numPassengers}
          onChange={(e) => setNumPassengers(e.target.value)}
        />
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
}

export default FlightSearch;