import React from "react";
import user from "../images/user.jpeg";

const ContactCard = (props) =>{
    const{id, name,email} = props.contact;
    return(
        <div className="item" style={{display:"fixed",marginTop:"7px",marginBottom:"5px",fontSize:"15px",justifyContent:"center", marginLeft:"20px"}} >
            <img className="ui avatar image" src={user} alt="user-img"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="ui labeled trash icon " 
                    style={{color:"red",
                    display:"flex", 
                    marginLeft:"96%",
                     marginTop:"-19px",
                    // marginBottom:"px",
                    fontSize:"20px"
                }}
                    onClick={()=> props.clickHandler(id)}
            ></i>
        </div>
    )
}
export default ContactCard;
