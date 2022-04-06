import React from "react"
import ReactDOM from "react-dom"
// import CommentDetails from "./CommentDetails"
// import Approvalcard from "./ApprovalCard"
// import Message from "./message"
import Outer from "./outer"
// import Inner  from "./inner"




// const App = () => {
//     return (
        
//         <div className="ui container comments">
//             <Approvalcard>
//             <CommentDetails author="neha" time=" 4pm 5 April"/>
           

//             </Approvalcard>
//             <CommentDetails author="vaishnavi" time=" 5pm 5 April" />
//             <CommentDetails  author="roshani" time=" 6pm 5 April"/>
//             <CommentDetails  author="payal" time=" 7pm 5 April"/>
            
           

//         </div>
//     )

    // Exercise of message.js
    // const App = () => {
    //     return (
    //         <div className="box">
    //             <h1> Hi </h1>
    //             <Message text="Utterwise Technology" para="Done it"/>
                

    //         </div>
            
    //     )
    // }
    
    
const App = () => {
    return (
        <div className="container">
            <div className="outer container">
                <h1> Original text from index.js file (outer)</h1>
                <div className="inner container">
                <h1> Original text from index.js file (inner)</h1>

                </div>

            </div>
            
         
            
            </div>
        )
    }








ReactDOM.render(<App/>,document.querySelector("#root"))



