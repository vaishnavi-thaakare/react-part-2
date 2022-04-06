import React from "react"



const Message = props => {
    return (
        <div className="content">
        <div className="text">{props.text}</div>
        <div className="para">{props.para}</div>
    </div>
        
    )
    
}



export default Message;