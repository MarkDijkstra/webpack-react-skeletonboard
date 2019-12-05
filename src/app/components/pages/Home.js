import React from "react";

export class Home extends React.Component {
    render() {
        return <div className="x3_container--xl">
                <div className="x3_row">
                    <div className="x3_col--sm--6">
                        <div className="card">left</div>
                    </div>
                    <div className="x3_col--sm--6">
                        <div className="card">
                             <a href="#" className="x3_btn x3_btn--primary x3_btn--xl">button</a>
            <br/>
            <a href="#" className="x3_btn x3_btn--secondary x3_btn--xl">secondary</a>
            <br/>
            <a href="#" className="x3_btn x3_btn--green x3_btn--xl">green</a>
            <br/>
            <a href="#" className="x3_btn x3_btn--red x3_btn--xl">red</a>
                         </div>
                    </div>
                </div>
                <div className="x3_row">
                    <div className="x3_col--sm--12">
                        <div className="card">full</div>
                    </div>
                </div>
            </div>;
    }

}