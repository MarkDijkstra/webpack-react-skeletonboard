import React from "react";

export class NotFound extends React.Component {
    render() {
        return <div>
        <h3>No match for <code>{location.pathname}</code></h3>
            </div>;
    }

}