import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
// import MenuTop from "./components/menuTop/MenuTop";
// import MenuBot from "./components/menuBot/MenuBot"
import Home from "./views/home/Home";
import Notas from "./views/notas/Notas";
import Podcast from "./views/podcast/Podcast";
const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/elparlante/" exact>
        <Home />
      </Route>
      <Route path="/elparlante/notas">
        <Notas />
      </Route>
      <Route path="/elparlante/podcast">
        <Podcast />
      </Route>
    </Switch>
  </Router>
);

export default App;
