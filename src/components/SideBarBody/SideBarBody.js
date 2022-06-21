import React from 'react';

import "./SideBarBody.css"




function SideBarBody(props) {



    return (

        <div className="SideBarBodyContainer" 
        style={{
            background:props.background,
            border:props.border,   
        }}>
           
           {props.SideBarBody}

        </div>
    );
}

export default SideBarBody;

