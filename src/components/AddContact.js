import React, { useState } from "react";

const AddContact = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    // add = (e) =>{
    //     e.preventDefault();
    //     if(this.state.name === "" || this.state.email === ""){
    //         alert("All the fields are mandatory!!");
    //         return;
    //     }
    //     this.props.addContactHandler(this.state);
    //     this.setState({
    //         name:"",
    //         email:"",
    //     });
    // }

    // console.log("name", name);
    // console.log("email", email);

    return (
        <div className="ui main">
            <h2> Add Contact </h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="button" className="ui button blue" onClick={() => { props.addContactHandler({ name, email }); setEmail(""); setName("") }}>Add</button>
            </form>
        </div>
    )
}
export default AddContact;