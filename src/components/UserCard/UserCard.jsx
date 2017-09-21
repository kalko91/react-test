import React from 'react';
import { Component } from 'react';
import EditIcon from './images/edit.svg';
import {Icon} from '../index';
import DeleteIcon from './images/delete.svg';
import ArrowIcon from './images/arrow.svg';
import EmailIcon from './images/email.svg';
import PhoneIcon from './images/phone.svg';
//<Icon glyph={EditIcon.id} viewBox={EditIcon.viewBox} />
import "./user_card.scss";

export class UserCard extends Component {
    render() {
        return (
            <div className="card">
                <p className="card__name">John Smith</p>
                <p className="card__title">Father</p>
                <div className="card__wrapper">
                    <p className="card__data"><span className="card__icon"><Icon glyph={EmailIcon.id} viewBox={EmailIcon.viewBox} /></span>email@gmail.com</p>
                    <p className="card__data"><span className="card__icon"><Icon glyph={PhoneIcon.id} viewBox={PhoneIcon.viewBox} /></span>+52181801214563464</p>
                </div>
                <div className="btn btn_edit"><a className="btn__link"><Icon glyph={EditIcon.id} viewBox={EditIcon.viewBox} /></a></div>
                <div className="btn btn_del" ><a className="btn__link"><Icon glyph={DeleteIcon.id} viewBox={DeleteIcon.viewBox} /></a></div>
                <div className="btn btn_arrow"><a className="btn__link"><Icon glyph={ArrowIcon.id} viewBox={ArrowIcon.viewBox} /></a></div>
            </div>
        );
    }
}