import React from "react";


const Approvalcard = (props) => {
    return (
        <div className="ui card">
            <div className="content"> {props.children} </div>
            <div className="extra-content">
                <div className="two buttons">
                    <div className="green-button">Approve</div>
                    <div className="red-button">Reject</div>

                </div>

            </div>

        </div>


    );
}



export default Approvalcard;