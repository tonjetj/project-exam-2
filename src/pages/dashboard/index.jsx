import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../api/apiBase";
import { useParams } from 'react-router-dom';
import * as S from "./index.styles";
import noimage from "../../assets/noimage.jpg";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

const DashboardPage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`${API_BASE_URL}/holidaze/profiles/${username}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const json = await response.json();
    
        if (response.ok) {
          console.log(json); 
          setUserData(json);
        } else {
          console.log("Error:", json);
        }
      } catch (error) {
        console.log("Error:", error); 
      }
    };
    

    fetchUserProfile();
  }, [username]);

  if (!userData) {
    
    return <S.SpinnerContainer><S.Spinner/></S.SpinnerContainer>;
  }

  return (
    <S.DashboardContainer>

      <S.ProfileContainer>
      <S.LeftContent>
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
        </S.LeftContent>
        <S.RightContent>
        <S.AvatarContainer>
      {userData.venueManager && (
        <S.ManagerBanner>
          <S.ManagerIcon /> 
          <p>Venue Manager</p>
        </S.ManagerBanner>
      )}
      <S.AvatarImage src={userData.avatar ? userData.avatar : noimage} alt="Avatar" />
    </S.AvatarContainer>
        </S.RightContent>
      </S.ProfileContainer>


      {userData.venueManager ? (
        <S.StyledBox>
          <S.StyledAppBar position="static">
            <S.StyledTabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              variant="fullWidth"
            >
              <S.StyledTab label="Your venues" {...a11yProps(0)} />
              <S.StyledTab label="Booked venues" {...a11yProps(1)} />
              <S.StyledTab label="Upcoming bookings" {...a11yProps(2)} />
              <S.StyledTab label="Favourites" {...a11yProps(3)} />
            </S.StyledTabs>
          </S.StyledAppBar>
          <TabPanel value={value} index={0}>
            <S.TabContainer>
              <S.NewVenue>
              <p>Add new venue</p>
              <S.Button><S.Add/></S.Button>
              </S.NewVenue>
            </S.TabContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Booked venues
          </TabPanel>
          <TabPanel value={value} index={2}>
            Upcoming bookings
          </TabPanel>
          <TabPanel value={value} index={3}>
            Favourites
          </TabPanel>
        </S.StyledBox>
      ) : (
        <S.StyledBox>
          <S.StyledAppBar position="static">
            <S.StyledTabs
              value={value}
              onChange={handleChange}
              textColor="white"
              variant="fullWidth"
              indicatorColor="secondary"
            >
              <S.StyledTab label="Upcoming bookings" {...a11yProps(0)} />
              <S.StyledTab label="Favourites" {...a11yProps(1)} />
            </S.StyledTabs>
          </S.StyledAppBar>
          <TabPanel value={value} index={0}>
            Upcoming bookings
          </TabPanel>
          <TabPanel value={value} index={1}>
            Favourites
          </TabPanel>
        </S.StyledBox>
      )}
    </S.DashboardContainer>
  );
};

export default DashboardPage;