
import styles from './itinerary.module.css';
import {useUserState, usePlaceCartState, useHotelCartState, useFlightCartState} from '../../globalState/globalState';


function Itineraries() {
	const {user,setUser} = useUserState();
	const {placeCart,setPlaceCart} = usePlaceCartState();
	const {hotelCart,setHotelCart} = useHotelCartState();
	const {flightCart,setFlightCart} = useFlightCartState();

    if (user.ln === undefined)  {
        console.log("user not logged in");
        return (
            <>
            <div>Sorry, you must <a href='/login'>Log In</a> to use this feature.</div>
            </>
        )
    }

    console.log(user);
    console.log(user.ln);
    console.log("pc");
    console.log(placeCart);
    console.log("pc.places");
    console.log(placeCart.places);
    console.log("fc");
    console.log(flightCart);

    function isEmptyObject(obj) {
        console.log("is empty?");
        console.log(flightCart);
        return obj.user === undefined;
    }

    // Sort all the data by dates

    function ascending_date_places(a,b) { return new Date(a.visitingDate) - new Date(b.visitingDate); }
    function ascending_date_flights(a,b) { return new Date(a.date) - new Date(b.date); }
    function ascending_date_hotels_start(a,b) { return new Date(a.startDate) - new Date(b.startDate); }
    function ascending_date_hotels_end(a,b) { return new Date(a.endDate) - new Date(b.endDate); }

    // const places = placeCart.places.sort(ascending_date_places);
    const places = isEmptyObject(placeCart)? {} : placeCart.places.sort(ascending_date_places);
    const flights = isEmptyObject(flightCart)? {} : flightCart.flights.sort(ascending_date_flights);
    const hotels = isEmptyObject(hotelCart)? {} : hotelCart.hotels.sort(ascending_date_hotels_start);
    const hotelsByEnd = isEmptyObject(hotelCart)? {} : hotelCart.hotels.sort(ascending_date_hotels_end);

    function displayDate(date) {
        return date.toUTCString().substring(0, 16);
    }

    function datesAreSame(a,b) {
        // make sure in date format
        a = new Date(a);
        b = new Date(b);

        console.log("a");
        console.log(a);
        console.log("b");
        console.log(b);
        // set times to 0
        a.setHours(0,0,0,0);
        b.setHours(0,0,0,0);

        // compare
        console.log(a.toDateString() === b.toDateString());
        return a.toDateString() === b.toDateString();
    }

    function findFlightByDate(date) {
        date = new Date(date);
        return (
            isEmptyObject(flights) ?
            <></>
            : flights.map(flight => {
                return (
                    datesAreSame(flight.date, date) ?
                    <div className={styles.card__description}>
                        {/* <p>Flight to {flight.destination} from {flight.source}</p> */}
                        <p>Departure: {flight.date.toDateTime()}</p>
                        {/* <p>Departure: {flight.departureDate.toDateTime()}</p> */}
                        {/* <p>Arrival: {flight.arrivalDate.toDateTime()}</p> */}
                    </div>
                    : <></>
                )
            })
        )
    }

    if (places.length === 0) {
      console.log("none");
      return (<div><h1>No results.</h1></div>)
    }
    else {
        console.log(places);
        return (
        <div className={styles.wrapper}>
            {places.map(place =>   {
                return (
                    <Card place={place}/>
                    
                )
            }
            )}
            <p>yip yip</p>
        </div>
        );
    }
    
    function Card(props) {
        const date = new Date(props.place.visitingDate);
        console.log('card');
        console.log(props.place.visitingDate);
        console.log(date);
        return (
          <div className={styles.card}>
            <div className={styles.card__body}>
              <p className={styles.card__date}>{displayDate(date)}</p>
              <h2 className={styles.card__title}>{props.place.place.name}</h2>
              {findFlightByDate(date)}
              <p>yes</p>
            </div>
          </div>
        );
      }
}

export default Itineraries;