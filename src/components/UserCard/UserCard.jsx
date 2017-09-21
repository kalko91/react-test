import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import EditIcon from './images/edit.svg';
import {Icon} from 'components/Icon/Icon.jsx';
import DeleteIcon from './images/delete.svg';
import ArrowIcon from './images/arrow.svg';
import EmailIcon from './images/email.svg';
import PhoneIcon from './images/phone.svg';
import PhoneNumber from 'react-phone-number';
import "./user_card.scss";

let ContactInfo = React.createClass({
    render: function () {
        return (
            <div className="card__wrapper">
                {this.props.emails.map(function (email, i) {
                        return (<p key={i} className="card__data">
                                <span className="card__icon">
                                <Icon glyph={EmailIcon.id} viewBox={EmailIcon.viewBox}/>
                                </span>
                            {email}
                        </p>)
                    }
                )}

                {this.props.phones.map(function (phone, i) {
                        return (<p key={i} className="card__data">
                                <span className="card__icon">
                                <Icon glyph={PhoneIcon.id} viewBox={PhoneIcon.viewBox}/>
                                </span>
                            <PhoneNumber number={phone}/>
                        </p>)
                    }
                )}

            </div>
        );
    }
});

let ActionButtons = React.createClass({
    editAction:function() {
        console.log('Edit');
    },
    deleteAction:function() {
        console.log('Delete');
    },
    render: function () {
        return (
            <span>
            <div onClick={this.editAction} className="btn btn_edit"><a className="btn__link"><Icon glyph={EditIcon.id}
                                                                            viewBox={EditIcon.viewBox}/></a></div>

            <div onClick={this.deleteAction} className="btn btn_del"><a className="btn__link"><Icon glyph={DeleteIcon.id}
                                                                        viewBox={DeleteIcon.viewBox}/></a></div>
            </span>
        )
    }
});

let NextButtons = React.createClass({
    render: function () {
        return (
            <span>
            <div className="btn btn_arrow"><a className="btn__link"><Icon glyph={ArrowIcon.id}
                                                                                              viewBox={ArrowIcon.viewBox}/></a></div>
            </span>
        )
    }
});


export default class UserCard extends Component {
    constructor(props) {
        super(props);
        this.detailAction = this.detailAction.bind(this);
    }
    detailAction() {
        console.log('Detail');
    }

    render() {
        return (
            <div className={"card " + (this.props.obj.action == 'detail'?'pointer':'')} onClick={this.props.obj.action == 'detail' && this.detailAction}>
                <p className="card__name">{this.props.obj.firstName} {this.props.obj.lastName}</p>
                <p className="card__title">{this.props.obj.type}</p>
                <ContactInfo emails={this.props.obj.emails} phones={this.props.obj.phones}/>
                {this.props.obj.action == 'edit' && <ActionButtons />}
                {this.props.obj.action == 'detail' && <NextButtons />}
            </div>
        );
    }
}

UserCard.propTypes = {
    obj: PropTypes.object,
};