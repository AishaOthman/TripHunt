import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import {EditDestinations} from "../Serves/firebase";
import Flights from "./Flights";
import Hotels from "./Hotels";
import Plans from "./Plans";
import Cruses from "./Cruses";
import CarRental from "./CarRental";
import DiscoverNearby from "./DiscoverNearby"



function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/reset" element={<Reset />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/editDestinations" element={<EditDestinations />} />
                    <Route exact path="flights" element={<Flights />} />
                    <Route exact path="/hotels" element={<Hotels.js />} />
                    <Route exact path="/plans" element={<Plans />} />
                    <Route exact path="/cruses" element={<Cruses />} />
                    <Route exact path="/carRental" element={<CarRental />} />
                    <Route exact path="/discoverNearby" element={<DiscoverNearby />} />

                </Routes>
            </Router>
        </div>
    );
}
export default App;