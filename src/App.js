import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Projects from "./pages/Projects/Projects";
// Import Individual Projects
import ProjectA from "./pages/Projects/DevSearch";
import ProjectB from "./pages/Projects/CompariTube";
import ProjectC from "./pages/Projects/ThirdDimension";
import ProjectD from "./pages/Projects/ArcadeSecretary";
import NavBar from "./components/NavBar/NavBar";
import Post from "./pages/Post";
import "./scss/App.scss";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Projects} exact path="/projects" />
        <Route component={ProjectA} exact path="/projects/devsearch" />
        <Route component={ProjectB} exact path="/projects/comparitube" />
        <Route component={ProjectC} exact path="/projects/thirddimension" />
        <Route component={ProjectD} exact path="/projects/arcadesecretary" />
        <Route component={Post} path="/post" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
