import React, { useEffect, useState } from "react";
import { VENUES } from "../../api/apiEndpoints";
import { API_BASE_URL } from "../../api/apiBase";
import * as S from "./index.styles";
import logo from "../../assets/logo.png";

const url = `${API_BASE_URL}${VENUES}`;

function LandingPage() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function fetchVenues(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const sortedVenues = data.sort((a, b) => {
            return new Date(b.created) - new Date(a.created);
          });
          setVenues(sortedVenues.slice(0, 3));
      } catch (error) {
        console.log("Error fetching venues:", error);
      }
    }

    fetchVenues(url);
  }, []);

  return (
    <S.LandingContainer>

      <h1>This is the landing page</h1>
      <S.HeroImgContainer>
        <S.HolidazeHero src={logo} alt="Holidaze logo"/>
        <S.HeroText>Find unique places 
to rent and stay in.</S.HeroText>
        <S.HeroCta>See what's available</S.HeroCta>
        </S.HeroImgContainer>

      <h2>Newest venues</h2>
      <S.CardList>
        {venues.map((venue) => (
          <S.Card key={venue.id}>
            <S.VenueImage src={venue.media} alt="Venue Media" />
            <S.CardTitle>{venue.name}</S.CardTitle>
            <S.CardText><S.Place /> {venue.location.address}, {venue.location.country}</S.CardText>
            <S.CardText>{venue.price} kr night</S.CardText>
            <S.CardText>{venue.rating}<S.Star></S.Star></S.CardText>
          </S.Card>
        ))}
      </S.CardList>

    </S.LandingContainer>
  );
}

export default LandingPage;
