import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VENUES } from "../../api/apiEndpoints";
import { API_BASE_URL } from "../../api/apiBase";
import * as S from "./index.styles";
import logo from "../../assets/logo.png";
import noimage from "../../assets/noimage.jpg"

const url = `${API_BASE_URL}${VENUES}`;

function LandingPage() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    async function fetchVenues(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const sortedVenues = data.sort((a, b) => {
            return new Date(b.meta.wifi) - new Date(a.meta.wifi);
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
      <S.HeroSection>

      <S.HeroImgContainer>
        <S.HolidazeHero src={logo} alt="Holidaze logo"/>
        <S.HeroText>Find unique places <br/>
to rent and stay in.</S.HeroText>
        <Link to="/venues">
          <S.HeroCta>See what's available</S.HeroCta>
        </Link>
        </S.HeroImgContainer>

        <S.HeroCard to="/register">
          <S.Arrow/>
          <S.HeroText>List your home</S.HeroText>
          <S.HeroText>Register as a Venue Manager.
          </S.HeroText>
        </S.HeroCard>

        <S.HeroCard2 to="/register">
          <S.Arrow/>
          <S.HeroText>Register</S.HeroText>
          <S.HeroText>Create an account and start booking your future stays. </S.HeroText>
        </S.HeroCard2>

      </S.HeroSection>

      <S.ViewVenues>
        <h2>Newest venues</h2>

        <S.ArrowLink to="/venues">
          <p>View all venues</p>
          <S.EastArrow/>
        </S.ArrowLink>
      </S.ViewVenues>



      <S.CardList>
        {venues.map((venue) => (
             <S.ALink to={`/venue/${venue.id}`}>
             <S.Card key={venue.id}>
               <S.VenueImage src={venue.media ? venue.media : noimage}/>
     
                 <S.CopyWrapper>
                   <S.CardTitle>{venue.name}</S.CardTitle>
                   <S.PlaceText>
                     <S.Place /> {venue.location.address}, {venue.location.country}
                   </S.PlaceText>
                   <S.BottomText>
                     <S.PriceText>{venue.price} kr night</S.PriceText>
                     <S.RatingText>
                       {venue.rating}
                       <S.Star></S.Star>
                     </S.RatingText>
                   </S.BottomText>
                 </S.CopyWrapper>
               </S.Card>
             </S.ALink> 
                     ))}
      </S.CardList>

    </S.LandingContainer>
  );
}

export default LandingPage;
