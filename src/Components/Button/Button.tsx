import React from 'react';

const Button = (props: any) => {
  return (
    <button type={props.type} 
        style={{ 
            color: props.color, 
            backgroundColor: props.bg, 
            padding: "10px 15px", 
            borderRadius: "4px",
            border: "none"
        }}>
        {props.text}
    </button>
  )
}

export default Button