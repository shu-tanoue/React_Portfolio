import React from "react";
import Header from "./compornents/Header";
import About from "./compornents/About";
import Work from "./compornents/Work";
import Home from "./compornents/Home";
import Details from "./compornents/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Styled from "styled-components";

const App = () => {
  return (
    <Styles dark={true}>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Work" component={Work} />
            <Route path="/Details" component={Details} />
          </Switch>
        </div>
      </Router>
    </Styles>
  );
};

const Styles = Styled.div`
  ${(props) => (props.dark ? `background: #0d1117;` : `background: white;`)};
  ${(props) => (props.dark ? `color: white;` : `color: black;`)};
`;

export default App;
