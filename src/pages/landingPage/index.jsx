import React, { useEffect, useState } from "react";
import { VENUES } from "../../api/apiEndpoints";
import { API_BASE_URL } from "../../api/apiBase";
import { CardList, Card, CardTitle, CardText, VenueImage, LandingContainer } from "./index.styles";

const url = `${API_BASE_URL}${VENUES}`;

function LandingPage() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function fetchVenues(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const sortedVenues = data.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setVenues(sortedVenues.slice(0, 3));
      } catch (error) {
        console.log("Error fetching venues:", error);
      }
    }

    fetchVenues(url);
  }, []);

  return (
    <LandingContainer>
      <h1>This is the landing page</h1>
      <h2>Newest venues</h2>
      <CardList>
        {venues.map((venue) => (
          <Card key={venue.id}>
            <CardTitle>{venue.name}</CardTitle>
            <CardText>Max Guests: {venue.maxGuests}</CardText>
            <CardText>{venue.price} kr /night</CardText>
             <VenueImage src={venue.media} alt="Venue Media" />
          </Card>
        ))}
      </CardList>
    </LandingContainer>
  );
}

export default LandingPage;
