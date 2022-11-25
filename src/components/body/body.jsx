import React from "react";
import './bodystyle/bodystyle.css'
const Body = ()=>{
    return(
    <div>
        <div className="form-container">
            <div className="heading2">
                <h3>Last Will and Testament</h3>
            </div>
            
            <p>Basic Details</p>
            <div className="form-container2">
            <form action="submit">
                <div >
                <div> <label htmlFor="name" >Legal Full Name</label></div>
                <div className="name">
                <input type='text' placeholder="First Name"/>
                <input type='text' placeholder="Last Name"/>
                <input type='text' placeholder="Middle Name"/>
                </div>
                </div>
                <div >
                <div><label htmlFor="email">Email Address</label></div>
                <div className="email">
                <input type='email' placeholder="anagudaniel@email.com"/>
                </div>
                </div>

                <div className="gender-cont" >

                <div><label htmlFor="gender">Gender</label></div>
                <div className="gender"> 
                
                <label><input type='radio' name="gender"/><span>Male</span></label>
                
                <label> <input type='radio' name="gender"/><span>Female</span></label>
                <label><input type='radio' name="gender"/><span>Nonbinary</span></label>
                </div>

                </div>
            </form>
            </div>
        </div>
    </div>

)
}

export default Body