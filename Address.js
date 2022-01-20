import React from 'react';

export function Address(props) {
    return <div>
        <p> Адреса:</p>
        <p> {props.address.street}</p>
        <p>{props.address.city}</p>
        <p>{props.address.postIndex}</p>
        <p>{props.address.country}</p>
    </div>

}