import React, {useContext} from 'react';
import {BrowserRouter,Route, Routes, Router} from "react-router-dom";
// import Main from "./components/Main";
import axiosInsatnce from "./API/axiosInstance";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import Home from "./components/Home/home.js"
import NavigationBar from "./components/NavBar/navbar"
import FlightSearch from "./components/Flights/flightSearch"
import Flight from "./components/Flights/flight";
import HotelBooking from "./components/Hotels/hotelSearch"
import HotelCards from "./components/Hotels/hotelcards.js"
import Hotel from "./components/Hotels/hotel";
import Itinerary from "./components/Itinerary/itinerary";
import Search from "./components/Search/search";
import SearchResult from "./components/Search/searchresults";
import {useUserState, usePlaceCartState, useHotelCartState, useFlightCartState} from './globalState/globalState';


const App = ()=>{
	// const {user} = useContext(GlobalStateProvider);
	
	return (
		// 
		<BrowserRouter>

		<div className="app">
			
			<NavigationBar />
				<Routes>
					<Route path="/"  exact element={<Home />} />
					<Route path="/flights"  exact element={<FlightSearch />} />
					<Route path="/flight"  exact element={<Flight />} />
					<Route path="/hotels"  exact element={<HotelBooking />} />
					<Route path="/hotel"  exact element={<Hotel />} />
					<Route path="/signup"  exact element={<Signup />} />
					<Route path="/login"  exact element={<Login />} />
					<Route path="/itinerary"  exact element={<Itinerary />} />
					<Route path="/hotelcards"  exact element={<HotelCards />} />
					<Route path="/search"  exact element={<Search />} />
					<Route path="/searchResult"  exact element={<SearchResult />} />
					{/* <Route path="/hotelcards" render={(props) => <HotelCards {...props} authed={true} />} /> */}
					{/* <Route path="/" exact element={<Navigate replace to= "/login" />} /> */}
				</Routes>
			
		</div>
		</BrowserRouter>

	);
}

export default App;