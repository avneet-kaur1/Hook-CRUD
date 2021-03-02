import React, { useState } from 'react'
// import firebase from "./firebase"

function Crudhooks(){
        const [fName, setfName] = useState('');
        const [lName, setlName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
        // const [picture, setPicture] = useState(null);
        // const [imgData, setImgData] = useState(null);
    
    const submitValue = () => {
        const fromdetails = {
            'First Name' : fName,
            'Last Name' : lName,
            'Phone' : phone,
            'Email' : email
        }
        console.log(fromdetails);
    }
    
    return (
        <div>
            {/* <div>
                <input type="file"   name="picture"  onChange={onChangePicture}/>
            </div>
            <div>
            <img src={imgData}  height="80" width="100" />
            </div> */}
        <hr/>
        <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} /><br/>
        <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} /><br/>
        <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} /><br/>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/>
        <button onClick={submitValue}>Submit</button>
        </div>
    );
}
export default Crudhooks