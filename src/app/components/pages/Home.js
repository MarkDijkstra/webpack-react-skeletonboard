import React from "react";

export class Home extends React.Component {
    render() {
        return <div className="x3_container--xl">
            
                <div className="x3_row">
                    <div className="x3_col--sm--2">
                        <div className="card">1</div>
                    </div>
                    <div className="x3_col--sm--2">
                        <div className="card">2</div>
                    </div>
                    <div className="x3_col--sm--2">
                        <div className="card">3</div>
                    </div>
                    <div className="x3_col--sm--2">
                        <div className="card">4</div>
                    </div>
                    <div className="x3_col--sm--2">
                        <div className="card">5</div>
                    </div>
                    <div className="x3_col--sm--2">
                        <div className="card">6</div>
                    </div>
                </div>
            
                <div className="x3_row">
                    <div className="x3_col--sm--3">
                        <div className="card">1</div>
                    </div>
                    <div className="x3_col--sm--3">
                        <div className="card">2</div>
                    </div>
                    <div className="x3_col--sm--3">
                        <div className="card">3</div>
                    </div>
                    <div className="x3_col--sm--3">
                        <div className="card">4</div>
                    </div>
                </div>
        
                <div className="x3_row">
                    <div className="x3_col--sm--6">
                        <div className="card">1</div>
                    </div>
                    <div className="x3_col--sm--6">
                        <div className="card">2</div>
                    </div>
                </div>
        
                <div className="x3_row">
                    <div className="x3_col--sm--12">
                        <div className="card">                            
                            
                            <a href="#" className="x3_btn x3_btn--primary x3_btn--xl x3_mr--2">Primary</a>
                            <a href="#" className="x3_btn x3_btn--secondary x3_btn--xl x3_mr--2">Secondary</a>
                            <a href="#" className="x3_btn x3_btn--succes x3_btn--xl x3_mr--2">Succes</a>
                            <a href="#" className="x3_btn x3_btn--danger x3_btn--xl x3_mr--2">Danger</a>
                            <a href="#" className="x3_btn x3_btn--alert x3_btn--xl x3_mr--2">Alert</a>
                            <a href="#" className="x3_btn x3_btn--info x3_btn--xl x3_mr--2">Info</a>
        
                        </div>
                    </div>
                </div>
            </div>;
    }

}