import React from "react";
import { Avatar } from "./Avatar";
import { Address } from "./Address";


export class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <Avatar firstName={this.props.info.firstName} lastName={this.props.info.lastName} />
                <Address address={this.props.info.address} />

            </div>
        )
    }
}