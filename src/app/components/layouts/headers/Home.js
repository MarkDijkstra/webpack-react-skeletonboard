import React from "react";

export const SubHeaderHome = (props) => {

    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
    }

    return   <div className="header-sub__inner x3_container--xl">
                 <div className="header-sub__left">
                    <h3>Dashboard</h3>
                  </div>
                 <div className="header-sub__right">
                      <a href="#" className="x3_btn x3_btn--green x3_btn--xl" onClick={handleClick}>button</a>
                 </div>
             </div>;

};