import React, { useState } from "react";
import * as S from "./index.styles";

const VenuesPage = () => {
  const [sortValue, setSortValue] = useState("");

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <S.VenuesContainer>
      <h1>Venues</h1>
      <S.StyledFormControl sx={{ m: 1, minWidth: 120 }}>
        <S.StyledSelect
          labelId="sort-label"
          value={sortValue}
          onChange={handleSortChange}
          displayEmpty
          inputProps={{ "aria-label": "Sort by" }}
        >
          <S.StyledMenuItem value="">
            <p>Sort By</p>
          </S.StyledMenuItem>
          <S.StyledMenuItem value={10}>Ten</S.StyledMenuItem>
          <S.StyledMenuItem value={20}>Twenty</S.StyledMenuItem>
          <S.StyledMenuItem value={30}>Thirty</S.StyledMenuItem>
        </S.StyledSelect>
      </S.StyledFormControl>
      {/* Render the venue data based on the selected value */}
    </S.VenuesContainer>
  );
};

export default VenuesPage;
