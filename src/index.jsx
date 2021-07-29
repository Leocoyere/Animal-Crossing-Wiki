import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import VillagersList from './pages/Villagers/VillagersList'
import GlobalStyle from './utils/style/GlobalStyle'
import VillagerPage from './pages/Villagers/VillagerPage'
import FishesList from './pages/Fishes/FishesList'
import FishPage from './pages/Fishes/FishPage'
import BugsList from './pages/Bugs/BugsList'
import Home from './pages/Home'
import { ThemeProvider } from './utils/context'
import Navigation from './components/Navigation'
import BugPage from './pages/Bugs/BugPage'
import Error from './pages/Error'
import CreaturesList from './pages/SeaCreatures/CreaturesList'
import CreaturePage from './pages/SeaCreatures/CreaturePage'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <ThemeProvider>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/villagers">
                        <Navigation isHome={false} />
                        <VillagersList />
                    </Route>

                    <Route path="/villagers/:id">
                        <Navigation isHome={false} />
                        <VillagerPage />
                    </Route>
                    <Route exact path="/fishes">
                        <Navigation isHome={false} />
                        <FishesList />
                    </Route>
                    <Route path="/fishes/:name">
                        <Navigation isHome={false} />
                        <FishPage />
                    </Route>
                    <Route exact path="/bugs">
                        <Navigation isHome={false} />
                        <BugsList />
                    </Route>
                    <Route path="/bugs/:name">
                        <Navigation isHome={false} />
                        <BugPage />
                    </Route>
                    <Route exact path="/sea creatures">
                        <Navigation isHome={false} />
                        <CreaturesList />
                    </Route>
                    <Route path="/sea creatures/:name">
                        <Navigation isHome={false} />
                        <CreaturePage />
                    </Route>
                    <Route>
                        <Error />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
