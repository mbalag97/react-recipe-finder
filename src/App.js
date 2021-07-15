import {
  BrowserRouter,
  Route,
  Redirect,
  Switch as Changer,
} from "react-router-dom";

import TicTacToe from "./Pages/TicTacToePage";
import RecipePage from "./Pages/RecipePage";

// require('dotenv').config({ path: '../.env' });

const App = () => {
  return (
    <BrowserRouter>
      <Changer>
        <Route path="/" exact>
          <RecipePage />
        </Route>
        <Route path="/tic-tac" exact>
          <TicTacToe />
        </Route>
        <Redirect to="/" />
      </Changer>
    </BrowserRouter>
  );
};

export default App;
