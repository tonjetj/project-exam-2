import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 5px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #202124;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

function SearchBar(){
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search..." />
      <SearchButton>Search</SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
