import React from 'react';
import { Component } from 'react';
import EditIcon from './images/edit.svg';
import {Icon} from '../index';
import DeleteIcon from './images/delete.svg';
//<Icon glyph={EditIcon.id} viewBox={EditIcon.viewBox} />

export class UserCard extends Component {
    render() {
        return (
            <div class="card">
                <p class="card__name">John Smith</p>
                <p class="card__title">Father</p>
                <div class="card__wrapper">
                    <p class="card__email">email@gmail.com</p>
                    <p class="card__phone">+52181801214563464</p>
                </div>
                <button class="btn bnt_edit"></button>
                <button class="btn bnt_del"></button>
                <button class="btn bnt_next"></button>
            </div>
        );
    }
}