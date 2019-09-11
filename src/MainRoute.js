import React from "react";
import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
import Home from './pages/Home/Home'
import LogIn from './pages/LogIn/LogIn'

class MainRoute extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default MainRoute;
