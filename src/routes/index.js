import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from '../components/header'
import Footer from '../components/footer'
import home from '../pages/home'
import favorites from '../pages/favorites'

const route = () => {
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/favorites" component={favorites} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default route