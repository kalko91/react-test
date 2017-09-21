import React from 'react';
import { Component } from 'react';
import './app.scss';
import {UserCard} from '../index';
// console.log(styles);

export class App extends Component {
    render() {
        return (
            <div >
                <UserCard/>
            </div>
        );
    }
}