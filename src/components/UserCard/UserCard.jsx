import React from 'react';
import { Component } from 'react';
import EditIcon from './images/edit.svg';
import {Icon} from '../index';
import DeleteIcon from './images/delete.svg';
//<Icon glyph={EditIcon.id} viewBox={EditIcon.viewBox} />

export class UserCard extends Component {
    render() {
        return (
            <div>
                John Smith
                Father
                email@gmail.com
                +52181801214563464

            </div>
        );
    }
}