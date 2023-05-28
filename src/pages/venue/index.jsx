import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../api/apiBase";
import noimage from "../../assets/noimage.jpg";

const VenuePage = () => {
  const { id } = useParams();
  const [venueData, setVenueData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchVenueData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`${API_BASE_URL}/holidaze/venues/${id}`);
        const data = await response.json();
        setVenueData(data);
      } catch (error) {
        setIsError(true);
        console.log("Error fetching venue data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVenueData();
  }, [id]);

  if (isLoading || !venueData) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching venue data.</div>;
  }

  const { name, media, location, price, rating } = venueData;

  return (
    <div>
      <Link to="/venues">Back to Venues</Link>
      <h1>{name}</h1>
      <img src={media ? media : noimage} alt="venue" />
      <p>
        {location.address}, {location.country}
      </p>
      <p>Price: {price} kr/night</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default VenuePage;
