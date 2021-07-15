import styled from "styled-components";

export const TicTacAppHeader = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
text-align-center;
background: black;
color: white;
justify-content: center;
align-items: center;
`;

export const TicTacAppHeadingText = styled.p`
  color: white;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
`;

export const RowComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ColumnComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SquareSpan = styled.span`
  width: 100px;
  height: 100px;
  font-size: 64px;
  text-align: center;
  color: cyan;
  font-weight: bold;
  padding: 30px;
  border: solid red;
  border-width: ${(props) =>
    props.bottom && props.right
      ? "0px 15px 15px 0px"
      : props.right
      ? "0px 15px 0px 0px"
      : props.bottom
      ? "0px 0px 15px 0px"
      : "0px 0px 0px 0px"};
`;

export const ClearButton = styled.button`
width-max-content;
margin: 40px auto 10px auto;
padding: 10px;
border-radius: 20px;
color: white;
background: red;
`;
