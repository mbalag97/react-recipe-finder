import { useState } from "react";
import styled from "styled-components";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import React from "react";

export const NoRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-item:center;
  justify-content: space-evenly;
  background: ${(props) => props.theme.recipeListBackground};
  color: ${(props) => props.theme.color};
  flex-wrap: wrap;
  height: 100%;
  & p{
    font-weight:bold;
    margin:auto;
  }
`;
export const NoRecipeImage = styled.img`
opacity:80%;
width: 100%;
`;

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
  background: ${(props) => props.theme.recipeListBackground};
  gap: 20px;
  flex-wrap: wrap;
  color: ${(props) => props.theme.color};
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: ${(props) => props.theme.recipeBackground};
  color: ${(props) => props.theme.color};
  box-shadow: 1px 1px 6px ${(props) => props.theme.recipeBackground_boxShadow};
  width: 300px;
  margin: 10px 10px;
`;

// const RecipeImageContainer = styled.div`
//   display: relative;
// `;

const RecipeCoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const RecipeNameHolder = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;
  color: ${(props) => props.theme.color};
  margin: 10px 0px;
`;
// const SideBar = styled(RecipeNameHolder)`
//   margin: 0px;
//   &:hover {
//     color: cyan;
//   }
// `;

const RecipeIngredientsHolder = styled.span`
  font-size: 18px;
  border: 1px solid green;
  background: #85fd99;
  cursor: pointer;
  color: black;
  margin: 6px 0px;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
`;

const RecipeMoreHolder = styled(RecipeIngredientsHolder)`
  border: 1px solid orange;
  background: #ffd951;
`;
// const RecipeSideBar = styled.div`
//   background: ${(props) => props.theme.recipeBackground};
//   color: ${(props) => props.theme.color};
//   box-shadow: 1px 1px 6px ${(props) => props.theme.recipeBackground_boxShadow};
//   float: left;
//   height: 100px;
//   width: 100px
// `;
export const RecipeComponent = (props) => {
  // const [showSideBar, setShowSideBar] = useState(false);
  // const handleSideBarClick = (event) => {
  //   setShowSideBar(!showSideBar);
  // };
  // console.log(props.recipeList.healthLabels.includes("Vegetarian"));
  const [showDialog, setShowDialog] = useState(false);
  return (
    <React.Fragment>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight in grams</th>
            </thead>
            <tbody>
              {props.recipeList.ingredients.map((ingredient, index) => {
                return (
                  <tr key={index}>
                    <td>{ingredient.text}</td>
                    <td>{ingredient.weight}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            Close
          </Button>
          <Button
            color="primary"
            onClick={() => window.open(props.recipeList.url)}
            color="primary"
          >
            View Full Recipe
          </Button>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <RecipeCoverImage src={props.recipeList.image} />
        <RecipeNameHolder>
          {props.recipeList.label}
          {/* <SideBar onClick={handleSideBarClick}>
          {showSideBar ? "<" : ">"}
        </SideBar> */}
        </RecipeNameHolder>
        <RecipeIngredientsHolder
          onClick={() => {
            setShowDialog(true);
          }}
        >
          Ingredients
        </RecipeIngredientsHolder>
        <RecipeMoreHolder onClick={() => window.open(props.recipeList.url)}>
          View Full Recipe
        </RecipeMoreHolder>
        {/* {showSideBar && <RecipeSideBar />} */}
      </RecipeContainer>
    </React.Fragment>
  );
};
