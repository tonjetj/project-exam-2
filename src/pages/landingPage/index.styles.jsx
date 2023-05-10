import styled from "styled-components";
export const LandingContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px){
    max-width: 45%; 
  }
`;

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CardTitle = styled.p`
font-size: 20px; 
margin: 0 0 1 rem; 
`
export const CardText = styled.p`
font-size: 15px; 
margin: 0 0 1 rem; 
`

export const VenueImage = styled.img`
  max-width: 100px; 
  max-height: 100px; 
  object-fit: cover; 
`;

