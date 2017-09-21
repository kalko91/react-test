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
        emails: ['john@gmail.com'],
        phones: [
            '12025550147'
        ],
        action: 'plain'
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        type: 'Father',
        emails: ['john@gmail.com'],
        phones: [
            '12025550147'
        ],
        action: 'edit'
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        type: 'Father',
        emails: ['john@gmail.com'],
        phones: [
            '12025550147'
        ],
        action: 'clickable'
    },

];
export default class App extends Component {
    render() {
        return (
            <div >
                {Users.map(function(object,i){
                    return <UserCard/>
                })}
            </div>
        );
    }
}

App.propTypes = {
};