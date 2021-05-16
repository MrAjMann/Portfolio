import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import SinglePost from "./pages/SinglePost";
import Post from "./pages/Post";
import Projects from "./pages/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import './scss/App.scss'

function App() {
  return (
  <BrowserRouter>
      <NavBar/>
    <Switch>
      <Route component ={Home} path='/' exact/>
      <Route component ={About} path='/about' />
      <Route component ={SinglePost} path='/post/:slug' />
      <Route component ={Post} path='/post' />
      <Route component ={Projects} path='/projects' />
    </Switch>
  </BrowserRouter>
  )
}


export default App;
