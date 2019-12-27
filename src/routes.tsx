import React from "react";
import { Route, Switch} from "react-router-dom";
// Add view routes here
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Challenge from "./pages/Challenge/Challenge";
import Results from "./pages/Results/Results";
import {NotFound} from "./pages/NotFound/NotFound";



const Routes: React.FunctionComponent = () => (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/test" component={Challenge} />
        <Route exact path="/results" component={Results} />
        {/* ADD MORE ROUTES HERE: <Route  path="/route" component={RouteComponent} /> */}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
);




export default Routes;
