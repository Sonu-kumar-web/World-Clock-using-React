import React, { Fragment } from "react";
import Login from "./Login";
import Clock from "./Clock";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
   render() {
      return (
         <Router>
            <Fragment>
               <Switch>
                  <Route exact path="/" component={Login} />

                  <Route exact path="/clock" component={Clock} />
               </Switch>
            </Fragment>
         </Router>
      );
   }
}

export default App;
