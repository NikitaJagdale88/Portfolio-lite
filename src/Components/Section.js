import React from "react";

const Section = ({title, des}) =>{

    return(
      <div className="section">
        <br />
        <hr />
        <br />
        <h2>{title}</h2>
        <br />
        <p>{des}</p>
        <br />
      </div>
      
    )
}
export default Section;