import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from "./hotel.module.css"
import HotelCards from './hotelcards.js';

function HotelBooking() {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [averageRatings, setAvgRating] = useState(1);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [data,setData]=useState([]);

  var isSubmitted= false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform hotel search with filter criteria
    let placeId = '64058586d3cca7ef541834d9';
    try{
      let res = await fetch(`http://localhost:8080/hotels?placeId=${placeId}&start=${startDate}&end=${endDate}&minPrice=${minPrice}&maxPrice=${maxPrice}&rating=${averageRatings}`,{
          method: "GET",
          credentials: 'include'
      })
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("json!");
        console.log(resJson);
        // data = resJson.data;
        setData(resJson.data);
        console.log("data!");
        console.log(data);
        isSubmitted=true;
          // setMessage(resJson.message);
      } else {
          // setMessage("Some error occured");
      }
      // window.location = "/hotelcards";
  }catch(err){
// setMessage("Some error occured");
  }
  };

  return (
    <>
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
          <label htmlFor="startDate">Check-in Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label htmlFor="endDate">Check-out Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <label htmlFor="averageRatings">Average Rating(above):</label>
          <input
            type="number"
            id="averageRatings"
            value={averageRatings}
            onChange={(e) => setAvgRating(e.target.value)}
          />
          <label htmlFor="minPrice">Minimum price:</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label htmlFor="maxPrice">Maximum Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          {/* <form action="/hotelcards"> */}
            <button variant="primary" type="submit">Search Hotels</button>
          {/* </form> */}
        </form>
        {/* {isSubmitted && <HotelCards/>} */}
          {/* {
            data && data.length>0 && data.map((item)=><p>{item.name}</p>)
          } */}
        <HotelCards hotels={data? data : []}/>
      </div>
    </>
  );
}

export default HotelBooking;