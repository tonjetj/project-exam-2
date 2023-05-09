import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  border: 0.5px solid grey;
  border-radius: 20px;
  height: 20px;
  padding: 5px 50px;
  margin: 0 auto; 
  background-color: #202124;
  color: white;
  text-align: right; 
`;

const Search = styled(SearchIcon)`
  position: absolute;
  left: 205px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
`;

// const SearchButton = styled.button`
//   background-color: #202124;
//   color: #fff;
//   border: none;
//   border-radius: 20px;
//   padding: 5px 10px;
//   cursor: pointer;
// `;

function SearchBar() {
  return (
    <SearchWrapper>
      <SearchInputWrapper>
        
        <SearchInput type="text" placeholder="Search" />
        <Search />
      </SearchInputWrapper>
    </SearchWrapper>
  );
}

export default SearchBar;
