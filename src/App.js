import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Hotels from "./Hotels";
// import Mailer from "./Mailer";
import NavBar from "./NavBar";


const url = "http://localhost:2020/hotels";

function App() {
  <NavBar />
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  const removeHotel = (id) => {
    const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(updatedHotels);
  };

  const fetchHotels = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const hotels = await response.json();
      setLoading(false);
      setHotels(hotels);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchHotels();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (hotels.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>Sorry your card is empty</h2>
          <button className="btn" onClick={() => fetchHotels()}>
           Please Reload
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Hotels hotels={hotels} removeHotel={removeHotel} />
    </main>
  );
  

}

export default App;
