import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const Header = styled.div`
color: ${props => props.theme.color};
background: ${props => props.theme.background};
display:flex;
flex-direction:row;
align-items: center;
padding: 20px;
font-size: 25px;
font-weight: bold;
justify-content:space-between;
border-bottom: 1px solid black;
`;
export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SearchComponent = styled.div`
display:flex;
flex-direction: row;
background: white;
padding: 10px;
border: 1px solid;
border-radius: 6px;
color: black;
width: 50%;
`;
export const SearchInput = styled.input`
border: none;
outline: none;
margin-left: 15px;
font-size: 16px;
font-weight: bold;
width: 100%;
`;
export const ThemeComponent = styled.div`
background : ${props => props.theme.background};
color: ${props => props.theme.color};
display: flex;
flex-direction : row;
& p{
    margin: 0px;
}
`;