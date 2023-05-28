import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import { VENUES } from "../../api/apiEndpoints";
import { API_BASE_URL } from "../../api/apiBase";




const url = `${API_BASE_URL}${VENUES}`;

const VenuesPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [sortValue, setSortValue] = useState("Newest");
  const [venues, setVenues] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const fetchAndSetVenues = async (url, selectedValue) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      let sortedValues = [...data];

      switch (selectedValue) {
        case "Newest":
          sortedValues.sort((a, b) => {
            return new Date(b.meta.wifi) - new Date(a.meta.wifi);
          });
          break;
        case "Top Rated":
          sortedValues.sort((a, b) => b.rating - a.rating);
          break;
        case "Low Price":
          sortedValues.sort((a, b) => a.price - b.price);
          break;
        case "High Price":
          sortedValues.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      setVenues(sortedValues);
    } catch (error) {
      console.log("Error fetching venues:", error);
    }
  };

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSortValue(selectedValue);
    fetchAndSetVenues(url, selectedValue);
  };

  const handleResultsPerPageChange = (event) => {
    const selectedValue = event.target.value;
    setResultsPerPage(selectedValue);
    if (selectedValue <= 10) {
      setShowBackToTop(false);
    } else {
      setShowBackToTop(true);
    }
  };

  useEffect(() => {
    fetchAndSetVenues(url, sortValue);
  }, [sortValue]);

  useEffect(() => {
    if (resultsPerPage <= 10) {
      setShowBackToTop(false);
    }
  }, [resultsPerPage]);

  useEffect(() => {
    const scrollListener = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const eighthCard = document.getElementById("card-8");

      if (eighthCard && scrollPosition >= eighthCard.offsetTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const paginatedVenues =
    resultsPerPage === "All" ? venues : venues.slice(0, resultsPerPage);

  return (
    <S.VenuesContainer>
      <h1>Venues</h1>
      <S.SelectWrapper>
  <S.StyledFormControl sx={{ minWidth: 120 }}>
  <S.Label>Sort by</S.Label>
    <S.StyledSelect
      labelId="sort-label"
      label="Sort by"
      value={sortValue}
      onChange={handleSortChange}
      inputProps={{ "aria-label": "Sort by" }}
    >
      <S.StyledMenuItem value={"Newest"}>Newest</S.StyledMenuItem>
      <S.StyledMenuItem value={"Top Rated"}>Top Rated</S.StyledMenuItem>
      <S.StyledMenuItem value={"Low Price"}>Low Price</S.StyledMenuItem>
      <S.StyledMenuItem value={"High Price"}>High Price</S.StyledMenuItem>
    </S.StyledSelect>
  </S.StyledFormControl>

  <S.StyledFormControl sx={{m: 1, minWidth: 100 }}>
  <S.Label>Display</S.Label>
    <S.StyledSelect
      labelId="results-label"
      label="Display"
      value={resultsPerPage}
      onChange={handleResultsPerPageChange}
      inputProps={{ "aria-label": "Results per page" }}
    >
      <S.StyledMenuItem value={10}>10</S.StyledMenuItem>
      <S.StyledMenuItem value={30}>30</S.StyledMenuItem>
      <S.StyledMenuItem value={60}>60</S.StyledMenuItem>
      <S.StyledMenuItem value={"All"}>All</S.StyledMenuItem>
    </S.StyledSelect>
  </S.StyledFormControl>
</S.SelectWrapper>

<S.CardList>
{paginatedVenues.map((venue, index) => (
      <S.CardLink to={`/venues/${venue.id}`}>
        <S.Card key={venue.id} id={`card-${index + 1}`}>
          <S.VenueImage src={venue.media} />

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
        </S.CardLink> 
                ))}
                </S.CardList>


      {showBackToTop && (
        <S.BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top
        </S.BackToTopButton>
      )}
    </S.VenuesContainer>
  );
};

export default VenuesPage;
