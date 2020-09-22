import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import JokesContextProvider from '../contexts/jokes'

import Header from '../components/header'
import Footer from '../components/footer'
import home from '../pages/home'
import favorites from '../pages/favorites'

const route = () => {
    return(
        <Router basename="/dad-jokes">
            <Header />
            <Switch>
                <JokesContextProvider>
                    <Route exact path="/" component={home} />
                    <Route path="/favorites/" component={favorites} />
                </JokesContextProvider>
            </Switch>
            <Footer />
        </Router>
    )
}

export default route