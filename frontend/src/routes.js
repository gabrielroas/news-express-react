import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import News from "./pages/News";
import CreateNews from "./pages/CreateNews";
import EditNews from "./pages/EditNews";

// import App from "./pages/App";



import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={Home} />
      <PrivateRoute path="/news/create" component={CreateNews} />
      <Route exact path="/news/view/:news_url" component={News} />
      <PrivateRoute path="/news/view/:news_url/edit" component={EditNews} />

      {/* <Route exact path="/news/search/:news_url" component={News} /> */}


      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      {/* <Route exact path="/" component={isAuthenticated() ? App : Home} /> */}
      {/* <PrivateRoute path="/app" component={App} /> */}
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;