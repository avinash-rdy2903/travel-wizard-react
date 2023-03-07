import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
// import Main from "./components/Main";
import Signup from "./components/Singup/signup";
import Login from "./components/Login/login";
// import Home from "./components/Home/home"
import NavigationBar from "./components/NavBar/navbar"
import FlightSearch from "./components/Flights/flight"
import HotelBooking from "./components/Hotels/hotel"
import HotelCards from "./components/Hotels/hotelcards"

function App() {
	const user = localStorage.getItem("token"); 

	return (
		<BrowserRouter>
			<NavigationBar/>
			<Routes>
				{ user && <Route path="/" exact element={<HotelBooking />} />}
				<Route path="/flights" exact element={<FlightSearch />} />
				<Route path="/hotels" exact element={<HotelBooking />} />
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/hotelcards" exact element={<HotelCards />} />
				<Route path="/" exact element={<Navigate replace to= "/login" />} />
			</Routes>
		</BrowserRouter>
		 
	);
}

export default App;


// After setting a HOME page we can redirect user at HOME.
// {/*user && <Route path="/" exact element={<HOME />} /> */} -		FOR NOW I HAVE MADE THE MAIN SCREEN AS Hotelbooking.