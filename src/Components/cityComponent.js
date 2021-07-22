import styled from "styled-components";
import picture from "../Images/weather.jpg";
const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherLogo = styled.img`
  height: 140px;
  max-width: 100%;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const CitySearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  font-size: 18px;
  margin: 20px auto;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    padding: 10px;
    font-size: 14px;
    border: none;
    color: white;
    background: black;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CityComponent = (props) => {
  return (
    <CityContainer>
      <WeatherLogo src={picture} alt="weather" />
      <ChooseCityLabel>Find weather for</ChooseCityLabel>
      <CitySearchBox>
        <input placeholder="Enter City name . .. ... "></input>
        <button>Search</button>
      </CitySearchBox>
    </CityContainer>
  );
};

export default CityComponent;
