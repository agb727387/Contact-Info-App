import React from 'react'
import user from '../images/user.png'

const ContactInfoCard = (props) => {
    const { id, name, email, number, notes } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <div className="numberEdits">{number}</div>
                <div>{notes}</div>
            </div>
            <i className="trash alternate outline icon" style={{ color: 'violet', marginTop:
            '7px' }}
            onClick={() => props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactInfoCard