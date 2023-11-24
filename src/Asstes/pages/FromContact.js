import React, { useState } from "react";
import './Contact.css'
const Form = () => {
    const [name , setname] = useState("");
    const [show , setshow] = useState(false);

    const changeanme =(event) => {
        setname(event.target.value)
    }

    const FormControl = (event) => {
        event.preventDefault();
        if (name.length == "") {
            setshow(true)
        }
        else {
            console.log(name)
        }
    }

    return (
        <form onSubmit={FormControl} className="contact-us-inheart col-lg-6 col-md-6">
            <input name="name" type="text" placeholder="Your Name" onChange={changeanme} />
            {show && <p>Not Empty</p>}
            <input name="email" type="email" placeholder="Email" />
            <input name="phone" type="text" placeholder="Phone Numbers" />
            <select>
                <option>select Depatment</option>
                <option>one</option>
                <option>two</option>
                <option>three</option>
            </select>
            <textarea name="message" placeholder="Type Message" />
            <button>Submit</button>
        </form>
    )
}
export default Form;