import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Register from './components/Register';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={MovieList} />
                    <Route path="/movies/:id" component={MovieDetails} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={AdminDashboard} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
