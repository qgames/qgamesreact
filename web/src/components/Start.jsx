﻿import config from '../config.json';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from './Loader';
import TournamentList from './TournamentList';

export default class Start extends React.Component {
    render() {
        return (
            <div className="view">
                <div className="row" id="top">
                    <div className="col-md-12" >
                        <a className="btn btn-primary btn-lg create-tournament" id="create-tournament" href="/#/createtournament" role="button">Skapa turnering</a>
                    </div>
                </div>
                <div className="row" id="middle">
                    <div className="col-md-12" >
                        <TournamentList />
                    </div>
                </div>
            </div>
            );
    }
}
