import React, { useState } from 'react';
import styles from "./FlightSearch.module.css";
import FlightCards from './flightCards';
import axiosInstance, { AxiosInstance } from '../../API/axiosInstance';
function FlightSearch() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numPassengers, setNumPassengers] = useState(1);
  const [data,setData]=useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform flight search with filter criteria
    console.log(`Performing flight search with filters:
      From: ${from},
      To: ${to},
      Departure date: ${departureDate},
      Return date: ${returnDate},
      Number of passengers: ${numPassengers}`);
      let placeId = '64058586d3cca7ef541834d9';
      try{
        // TODO: this is the fetch link for hotels, alter it for flights
        let res = await axiosInstance.get(`flights?source=${from}&destination=${to}&date=${departureDate}`);
        let resJson = await res.json();
        if (res.status === 200) {
          console.log("flight json!");
          console.log(resJson);
          setData(resJson.data);
          console.log("flight data!");
          console.log(data);
            // setMessage(resJson.message);
        } else {
            // setMessage("Some error occured");
        }
      }catch(err){
        // setMessage("Some error occured");
      }
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
      <FlightCards flights={data? data : []}/>
    </div>
  );
}

export default FlightSearch;