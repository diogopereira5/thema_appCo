import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import Theme4 from "../themes/theme4";
import Login1 from "../themes/login1";
import SignUp1 from "../themes/signup1";
import ResetPassword from "../themes/resetPassword";
import ChangePassword from "../themes/changePassword";
import Download from "../themes/download";
import Review from "../themes/review";
import NotFound from "../themes/404";


export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Theme4} />
            <Route exact path="/login1" component={Login1} />            
            <Route exact path="/signup1" component={SignUp1} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route exact path="/changePassword" component={ChangePassword} />
            <Route exact path="/download" component={Download} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/404" component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
