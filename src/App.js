import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Projects from "./pages/Projects/Projects";
// Import Individual Projects
import Project from "./pages/Projects/CompariTube";
import NavBar from "./components/NavBar/NavBar";
import Post from "./pages/Post";
import './scss/App.scss'


function App() {
  
  return (
  <BrowserRouter>
      <NavBar/>
    <Switch>
      <Route component ={Home} path='/' exact/>
      <Route component ={About} path='/about' />
      <Route component ={Contact} path='/contact' />
      <Route component ={Projects} exact path='/projects' />
      <Route component ={Project}  path='/projects/comparitube' />
      <Route component ={Post} path='/post' />
    </Switch>
  </BrowserRouter>
  )
}


export default App;
