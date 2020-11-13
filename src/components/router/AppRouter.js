import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Principal } from '../../views/principal/Principal'
import { NavbarComponent } from '../../components/navbar/NavbarComponent'

export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />
            <Switch>
                <Route exact path="/" component={ Principal } />
            </Switch>

        </Router>
    )
}
