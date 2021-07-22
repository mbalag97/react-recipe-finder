import { useState } from "react";

import { ThemeProvider } from "styled-components";
import styled, { css } from "styled-components";

import SearchIcon from "@material-ui/icons/Search";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import Switch from "@material-ui/core/Switch";

import picture from "../Images/searching.jpg";
import Axios from "axios";

import {
  Container,
  Header,
  SearchComponent,
  ThemeComponent,
  SearchInput,
  AppNameComponent,
} from "../Components/headerComponent";

import {
  RecipeListContainer,
  RecipeComponent,
  NoRecipeContainer,
  NoRecipeImage,
} from "../Components/recipeComponent";
import { theme } from "../Components/themeComponent";
import {
  REACT_APP_EDAMAM_APP_ID,
  REACT_APP_EDAMAM_APP_KEY,
} from "../Config/config";

const SwitchComponent = styled(Switch)`
z-index:0;
`
const RecipePage = () => {
  const [timeoutId, setTimeoutId] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const fetchRecipe = async (searchString) => {
    console.log({ searchString });
    var config = {
      method: "get",
      url: `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${REACT_APP_EDAMAM_APP_ID}&app_key=${REACT_APP_EDAMAM_APP_KEY}`,
      headers: {},
    };

    const recipeDetails = await Axios(config);
    setRecipeList(recipeDetails.data.hits);
  };
  const switchOnchange = (event) => {
    event.preventDefault();
    setDarkTheme(!darkTheme);
  };

  const onSearchChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 1000);
    setTimeoutId(timeout);
  };
  return (
    <ThemeProvider theme={darkTheme ? theme[0] : theme[1]}>
      <Container>
        <Header>
          <AppNameComponent>
            <FastfoodRoundedIcon fontSize="large" color="inherit" />
            Recipe Finder
          </AppNameComponent>
          <ThemeComponent>
            <p>Light</p>
            <SwitchComponent
              checked={darkTheme}
              color="secondary"
              onChange={switchOnchange}
            />
            <p>Dark</p>
          </ThemeComponent>
          <SearchComponent>
            <SearchIcon fontSize="small" color="inherit" />
            <SearchInput
              placeholder="Search Recipe . .. ..."
              onChange={onSearchChange}
            />
          </SearchComponent>
        </Header>
        <RecipeListContainer>
          {recipeList.length ? (
            recipeList.map((recipe, index) => {
              return <RecipeComponent key={index} recipeList={recipe.recipe} />;
            })
          ) : (
            <NoRecipeContainer>
              <p>Search for Recipe ..</p>
              <NoRecipeImage src={picture} alt="search" />
            </NoRecipeContainer>
          )}
        </RecipeListContainer>
      </Container>
    </ThemeProvider>
  );
};

export default RecipePage;
