import React from 'react';
import {Component} from 'react';
import './app.scss';
import UserCard from 'components/UserCard/UserCard.jsx';
// console.log(styles);

let Users = [
    {
        firstName: 'John',
        lastName: 'Smith',
        type: 'Father',
        emails: [
            'john@gmail.com',
            'john@gmail.com',
        ],
        phones: [
            '+61412345678'
        ],
        action: 'plain'
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        type: 'Father',
        emails: ['john@gmail.com'],
        phones: [
            '+61412345678',
            '+61412345678',
        ],
        action: 'edit'
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        type: 'Father',
        emails: ['john@gmail.com'],
        phones: [
            '+61412345678'
        ],
        action: 'detail'
    },

];
export default class App extends Component {
    render() {
        return (
            <div className="row">
                {Users.map(function(object,i){
                    return <UserCard obj={object} key={i}/>
                })}
            </div>
        );
    }
}

App.propTypes = {
};