import React from "react";

export const SubHeaderHome = (props) => {

    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
    }

    return   <div className="x3_container--xl">
                 <div className="header-main__heading">
                     <h3>Dashboard</h3>
                  </div>
                 <div className="header-main__subnav">
                      <a href="#" className="x3_btn x3_btn--secondary x3_btn--xl" onClick={handleClick}>button</a>
                 </div>
             </div>;

};