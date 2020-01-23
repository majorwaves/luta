import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Fighter from "./pages/Fighter";
import Header from "./components/Header";

const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  padding: 13rem 0 4rem;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fighter/:id" component={Fighter} />
        </Switch>
      </Main>
    );
  }
}

export default App;
