import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import BottomNavBar from "./Components/navBar/navBar";
import Trending from "./Containers/trending/trending";
import Movies from "./Containers/movies/movies";
import Favourite from "./Containers/favourite/favourite";
import ScrollTop from "./scrollToTop";
import Comments from "./Components/comments/comments";
import { GlobalProvider, GlobalState } from "./Context/globalState";
import { useContext } from "react";
import MovieOverview from "./Containers/movieOverview/movieOverview";

function App() {
  const { id } = useContext(GlobalState);
  return (
    <GlobalProvider>
      <body data-theme="light">
        <div className="App">
          <div className="left">
            <div className="box">
              <Comments />
            </div>
          </div>
          <div className="middle">
            <BrowserRouter>
              <ScrollTop />
              <Switch>
                <Route exact path="/Movies-App">
                  <Movies />
                </Route>

                <Route path="/trending">
                  <Trending />
                </Route>

                <Route path="/favourite">
                  <Favourite />
                </Route>

                <Route path={id}>
                  <MovieOverview />
                </Route>

                <Redirect exact to="/Movies-App" />
              </Switch>
              <BottomNavBar />
            </BrowserRouter>
          </div>
        </div>
      </body>
    </GlobalProvider>
  );
}

export default App;
