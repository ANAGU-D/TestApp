import React, { useEffect } from "react";
import '../output/output.css'

const Output =(props)=>{
    let will = {}
    useEffect(() => {
        will = props.willO
        console.log(will)
    })

    return(
        <div className="output-container">
            <div className="legal-name">
                    <h1 className="text-3xl font-semibold">{will['firstName']} {will['lastName']}</h1>
            </div>
            <hr/>
            <div className="into mt-10">
                <div className="into-head">
                    <h2 className="text-2xl  font-semibold">Introduction</h2>
                </div>
                <div className="into-para w-11/12 ml-20" >
                    <p>A last will and testament or will allows a person “testator” to make a sworn statement about which person or people "beneficiary" will receive real estate and personal property after their death. Most states require two disinterested witnesses to sign in order for the will to be valid. After signing, copies should be given to all beneficiaries and the testator`s attorney.</p>
                </div>
            </div>

            <div className="prop-b mt-8">
                <h2 className="text-2xl  font-semibold">Properties and Beneficiary</h2>
                <ul className="ml-12 mt-2">
                    {will['will']?.map(will => {
                        <li>I will my {will[0]} to {will[1]}</li>
                    })}
                </ul>
            </div>
            <div className="instruction mt-5">
                <div className="instruction-head">
                    <h2 className="text-2xl  font-semibold ">Instructions</h2>
                </div>
                <p className="into-para w-11/12 ml-20">{will['instructions']}</p>
            </div>
        </div>
    )
}
export default Output
