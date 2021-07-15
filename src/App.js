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

// require('dotenv').config({ path: '../.env' });

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Changer>
        <Route path="/" exact>
          <RecipePage />
        </Route>
        <Route path="/tic-tac" exact>
          <TicTacToe />
        </Route>
        <Route path="/ccp" exact>
          <CCP />
        </Route>
        <Redirect to="/" />
      </Changer>
    </BrowserRouter>
  );
};

export default App;
