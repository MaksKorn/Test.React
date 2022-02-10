import React from "react";
export class Avatar extends React.Component {
    render () {
        return (
            <p> {this.props.firstName} {this.props.lastName}</p>
        )
    }
}


