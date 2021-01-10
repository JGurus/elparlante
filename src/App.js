import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from "./components/navBar/NavBar"
// import MenuTop from "./components/menuTop/MenuTop"
// import MenuBot from "./components/menuBot/MenuBot"
import Home from "./views/home/Home"
import Notas from "./views/notas/Notas"
import Podcast from "./views/podcast/Podcast"
const App = () => 
(
  <Router>
    <NavBar />
    {/* <MenuTop />
    <MenuBot /> */}
    <Switch>
      <Route path="/" exact> <Home /> </Route>
      <Route path="/notas"> <Notas /> </Route>
      <Route path="/podcast"> <Podcast /> </Route>
    </Switch>
  </Router>    
)

export default App;
