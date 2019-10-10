import axios from 'axios'
import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";


import Landing from "views/main/Landing.jsx";
import Login from "views/main/Login.jsx";
import Profile from "views/main/Profile.jsx";
import SignUp from "views/main/SignUp";
import Events from 'views/EventPlanner/Events';

class App extends React.Component {
    state = {
        user: null,
        value: ''
    }
    componentDidMount() {
        //Go look for a token
        this.getUser()
    }

    updateProfile = (e) => {
        e.preventDefault()
        this.getUser()
        console.log('Submitted')
    }

    getUser = () => {
        console.log('in getUSER is firing')
        //See if there is a token
        let token = localStorage.getItem('mernToken')

        //If there's a token, try to use it to get the user info
        if(token) {
        console.log('token was', token)
        axios.get(`http://localhost:3000/auth/current/user`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            console.log('SUCCESS', response)
            this.setState({ user: response.data.user})
        })
        .catch(err => {
            console.log('ERROR', err)
        })
        }
        else{
        this.setState({ user: null})
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={props => <Landing {...props} />} />
                    {/* <Route
                        path="/"
                        exact
                        render={props => <Landing {...props} />}
                    /> */}
                    <Route path="/login" 
                        exact 
                        render={props => <Login {...props} updateUser={this.getUser} user={this.state.user}/>} />
                    <Route
                        path="/profile"
                        exact
                        render={props => <Profile {...props} updateUser={this.getUser} user={this.state.user}/>}
                    />
                    <Route
                        path="/signup"
                        exact
                        render={props => <SignUp {...props} updateUser={this.getUser} user={this.state.user} />}
                        />
                    <Route
                        path="/login"
                        exact
                        render={props => <Login {...props} updateUser={this.getUser} user={this.state.user}/>}
                    />
                    <Route
                        path="/newevents"
                        exact
                        render={props => <Events {...props} updateUser={this.getUser} user={this.state.user}/>}
                    />

                    <Redirect to="/" updateUser={this.getUser} user={this.state.user}h/>
                </Switch>
            </BrowserRouter>
            );
        }
}

export default App;
