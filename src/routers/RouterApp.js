import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { HomeScreen } from '../components/Screens/HomeScreen';
import { LoginScreen } from '../components/Screens/Login/LoginScreen';
import { RegisterScreen } from '../components/Screens/Login/RegisterScreen';
import { RoverPhotosScreen } from '../components/Screens/PhotosRover/RoverPhotosScreen';
import { TechPortScreen } from '../components/Screens/techPort/TechPortScreen';
import { TechTransferScreen } from '../components/Screens/techTransfer/TechTransferScreen';

export const RouterApp = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/tech/transfer" component={TechTransferScreen} />
                    <Route exact path="/tech/port" component={TechPortScreen} />
                    <Route exact path="/fotos/rover" component={RoverPhotosScreen} />
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />
                </Switch>
            </Router>
        </div>
    )
}
