import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
// import Main from "./components/Main";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import Home from "./components/Home/home.js"
import NavigationBar from "./components/NavBar/navbar"
import FlightSearch from "./components/Flights/flightSearch"
import Flight from "./components/Flights/flight";
import HotelBooking from "./components/Hotels/hotelSearch"
import HotelCards from "./components/Hotels/hotelcards.js"
import Hotel from "./components/Hotels/hotel";
import Itineraries from "./components/Itineraries/itineraries";

function App() {
	const user = localStorage.getItem("token"); 

	return (
		<BrowserRouter>
			<NavigationBar/>
			<Routes>
				{ user && <Route path="/" exact element={<Home />} />}
				<Route path="/flights" exact element={<FlightSearch />} />
				<Route path="/flight" exact element={<Flight />} />
				<Route path="/hotels" exact element={<HotelBooking />} />
				<Route path="/hotel" exact element={<Hotel />} />
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/itineraries" exact element={<Itineraries />} />
				<Route path="/hotelcards" exact element={<HotelCards />} />
				{/* <Route path="/hotelcards" render={(props) => <HotelCards {...props} authed={true} />} /> */}
				{/* <Route path="/" exact element={<Navigate replace to= "/login" />} /> */}
			</Routes>
		</BrowserRouter>
		 
	);
}

export default App;


// After setting a HOME page we can redirect user at HOME.
// {/*user && <Route path="/" exact element={<HOME />} /> */} -		FOR NOW I HAVE MADE THE MAIN SCREEN AS Hotelbooking.