import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";
import LandingPage from "./LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/menu2" component={() => <div>menu2</div>} />
          <Route exact path="/menu3" component={() => <div>menu3</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
