
import styles from './itinerary.module.css';
import {useUserState, usePlaceCartState, useHotelCartState, useFlightCartState} from '../../globalState/globalState';


function Itineraries() {
	const {user,setUser} = useUserState();
	const {placeCart,setPlaceCart} = usePlaceCartState();
	const {hotelCart,setHotelCart} = useHotelCartState();
	const {flightCart,setFlightCart} = useFlightCartState();

    const oldDate = new Date(1500,0,1);

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
        // console.log("is empty?");
        // console.log(flightCart);
        // console.log(obj.user === undefined);
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

    const Dates = getListOfDates();

    function displayDate(date) {
        return date.toUTCString().substring(0, 16);
    }

    function datesAreSame(a,b) {
        // make sure in date format
        a = new Date(a);
        b = new Date(b);
        // set times to 0
        a.setHours(0,0,0,0);
        b.setHours(0,0,0,0);

        // compare
        return a.toDateString() === b.toDateString();
    }

    function getListOfDates() {
        var startDate;
        var endDate;
            // find start date
            var splaces = isEmptyObject(placeCart)? oldDate : new Date(placeCart.places[0].visitingDate);
            var sflights = isEmptyObject(flightCart)? oldDate : new Date(flightCart.flights[0].date);
            var shotels = isEmptyObject(hotelCart)? oldDate : new Date(hotelCart.hotels[0].startDate);
            var psdates = [splaces, sflights, shotels];
            for (var i = 0; i < 3; i++) {
                if (startDate === undefined && psdates[i] > oldDate) startDate = psdates[i];
                else if (psdates[i] < startDate && psdates[i] > oldDate) startDate = psdates[i];
            }
            // // find end date
            var eplaces = isEmptyObject(placeCart)? oldDate : new Date(placeCart.places[placeCart.places.length - 1].visitingDate);
            var eflights = isEmptyObject(flightCart)? oldDate : new Date(flightCart.flights[flightCart.flights.length - 1].date);
            var ehotels = isEmptyObject(hotelCart)? oldDate : new Date(hotelCart.hotels[hotelCart.hotels.length - 1].endDate);
            if (eplaces > eflights && eplaces > ehotels) endDate = eplaces;
            else if (eflights > eplaces && eflights > ehotels) endDate = eflights;
            else if (ehotels > eflights && ehotels > eplaces) endDate = ehotels;

        startDate = new Date(displayDate(startDate));
        // console.log("splaces " + splaces +"shotels " + shotels +"sflights " + sflights);
        // // console.log("feeeeeeeep" + ((new Date(1,3,2020)) < (new Date(1,4,2020))));
        // console.log("FOOOOOOpppp" + (shotels < sflights && shotels < splaces));
        // console.log("start date " + startDate + "\nEnddate " + endDate);
        
        var dateList = [];
        for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            dateList.push(new Date(d));
        }
        // console.log("Date list: " + dateList);
        return dateList;
    }

    function findFlightByDate(date) {
        date = new Date(date);
        date = new Date(displayDate(date));
        if (isEmptyObject(flightCart)) {
            // console.log("this bitch empty; YEET");
            // return <div><p>bitch is empty</p></div>;
            return <></>;
        }
        return (flights.map(flight => {
            // console.log("bitch NOT empty");
            const theysame = datesAreSame(flight.date, date);
            if (theysame) {
                // console.log("dates are same");
                console.log(theysame);
                const flightDate = new Date(flight.date);
                return (
                    <div className={styles.card__description}>
                        <p>Flight to {flight.flight.destination} from {flight.flight.source}
                        <br/> Departure: {flightDate.toTimeString()}
                        <br/> Arrival: {(new Date(flight.flight.arrivalDate)).toTimeString()}</p>
                    </div>
                );
            }
            else {
                // console.log("dates NOT same");
                return (
                    <></>
                );
            }

        }))
    }

    function findPlaceByDate(date) {
        date = new Date(date);
        // console.log("DAAATTTEEE " + date)
        date = new Date(displayDate(date));
        // console.log("fmll " + date);
        if (isEmptyObject(placeCart)) {
            // console.log("this place cart empty; YEET");
            // return <div><p>bitch is empty</p></div>;
            return <></>;
        }
        return (places.map(place => {
            // console.log("bitch NOT empty");
            var placeDate = new Date(place.visitingDate);
            placeDate = new Date(displayDate(placeDate));
            const theysame = datesAreSame(placeDate, date);
            // console.log("fmfbgmm " + placeDate);
            if (theysame) {
                // console.log("dates are same");
                // console.log(theysame);
                return (
                    <div className={styles.card__description}>
                        <h2 className={styles.card__title}>{place.place.name}</h2>
                    </div>
                );
            }
            else {
                // console.log("dates NOT same");
                return (
                    <></>
                );
            }

        }))
    }


    if (Dates.length === 0) {
    //   console.log("none");
      return (<div><h1>No results.</h1></div>)
    }
    else {
        // console.log("trying dates");
        return (
        <div className={styles.wrapper}>
            {Dates.map(date =>   {
                return (
                    
                    <Card
                        date = {date}
                    /> 
                    
                )
            }
            )}
        </div>
        );
    }
    
    function Card(props) {
        // const date = new Date(props.place.visitingDate);
        console.log('card');
        // console.log(props.date);
        // console.log(date);
        return (
          <div className={styles.card}>
            <div className={styles.card__body}>
              <p className={styles.card__date}>{displayDate(props.date)}</p>
              {findPlaceByDate(props.date)}
              {findFlightByDate(props.date)}
            </div>
          </div>
        );
    }
}

export default Itineraries;