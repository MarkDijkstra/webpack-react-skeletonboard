import React from "react";

export class Main extends React.Component {
    render(){
        return <div className="content-main">
                   <div className="content-main__inner">
                       {this.props.children}
                   </div>
               </div>;
        }
};