import styled from "styled-components";

import CityComponent from "../Components/cityComponent";
import WeatherInfoComponent from "../Components/weatherInfoComponent";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: zen loop;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const WeatherApp = (props) => {
  return (
    <WeatherContainer>
      <AppLabel>Weather App</AppLabel>
      <CityComponent/>
      <WeatherInfoComponent />
    </WeatherContainer>
  );
};

export default WeatherApp;
