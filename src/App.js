import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Home from "./pages/Home";
import Rendering from "./pages/Rendering";
import Website from "./pages/Website";
import About from "./pages/About";
import Games from "./pages/Games";
import Smokeaway from "./pages/Smokeaway";
import Mtrack from "./pages/Mtrack";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rendering">
            <Rendering />
          </Route>
          <Route path="/website">
            <Website />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route path="/games/smokeaway">
            <Smokeaway />
          </Route>
          <Route path="/mtrack">
            <Mtrack />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
