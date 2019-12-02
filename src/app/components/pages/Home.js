import React from "react";

export class Home extends React.Component {
    render() {
        return <div className="x3_container--fluid">
        <div className="x3_row">
                <div className="x3_col--xl--12">
                    <h3 className="heading">Home</h3>
                </div>
            </div>
            <div className="x3_row">
                <div className="x3_col--sm--6">
                    <div className="card">left</div>
                </div>
                <div className="x3_col--sm--6">
                    <div className="card">right</div>
                </div>
            </div>
            </div>;
    }

}