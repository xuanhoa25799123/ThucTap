import React from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Roommap from './pages/roommap';
import Booking from './pages/booking';
import { Mini } from './layouts/mini';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <RouteWrapper path="/roommap" component={ Roommap } layout={ Mini } />
                <RouteWrapper path="/booking" component={ Booking } layout={ Mini } />
                <Route exact path="/">
                    <Redirect to="/roommap" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <Route { ...rest } render={ (props) =>
            <Layout { ...props }>
                <Component { ...props } />
            </Layout>
        } />
    );
}

export default App;
