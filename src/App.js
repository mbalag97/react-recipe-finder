import {
  BrowserRouter,
  Route,
  Redirect,
  Switch as Changer,
} from "react-router-dom";

import TicTacToe from "./Pages/TicTacToePage";
import RecipePage from "./Pages/RecipePage";
import Navbar from "./Components/NavBar";
import CCP from "./Pages/ccp"
import WeatherApp from "./Pages/Weather";

// require('dotenv').config({ path: '../.env' });

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Changer>
        <Route path="/react-recipe-finder/recipe" exact>
          <RecipePage />
        </Route>
        <Route path="/react-recipe-finder/tic-tac" exact>
          <TicTacToe />
        </Route>
        <Route path="/react-recipe-finder/ccp" exact>
          <CCP />
        </Route>
        <Route path="/react-recipe-finder/weather" exact>
          <WeatherApp />
        </Route>
        <Redirect to="/react-recipe-finder/recipe" />
      </Changer>
    </BrowserRouter>
  );
};

export default App;
