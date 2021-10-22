import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <PrivateRoute exact path="/about">
        <About title="About" />
      </PrivateRoute>
      <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
      <PrivateRoute exact path="/" component={Home}></PrivateRoute>
    </Switch>
  );
};

export default Router;
