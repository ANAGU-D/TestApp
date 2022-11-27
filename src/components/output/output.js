import React, { useEffect, useState } from "react";
import '../output/output.css'

function Output() {

    let [Will, setWill] = useState('')

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('will'));
        if (items) {
           setWill(items);
        }
        console.log(items)
    }, [])

    return(
        <div className="output-container">
            <div className="legal-name">
                    <h1 className="text-3xl font-semibold">{Will.firstName} {Will.lastName}</h1>
            </div>
            <hr/>
            <div className="into mt-10">
                <div className="into-head">
                    <h2 className="text-2xl  font-semibold">Introduction</h2>
                </div>
                <div className="into-para w-11/12" >
                    <p className=" ml-20">A last will and testament or will allows a person “testator” to make a sworn statement about which person or people "beneficiary" will receive real estate and personal property after their death. Most states require two disinterested witnesses to sign in order for the will to be valid. After signing, copies should be given to all beneficiaries and the testator`s attorney.</p>
                </div>
            </div>

            <div className="prop-b mt-8">
                <h2 className="text-2xl  font-semibold">Properties and Beneficiary</h2>
                <ul className="ml-12 mt-2">
                    {Will.will?.map(wil => {
                        return (<li>I will my {wil[0]} to {wil[1]}</li>)
                    })}
                </ul>
            </div>
            <div className="instruction mt-5">
                <div className="instruction-head">
                    <h2 className="text-2xl  font-semibold ">Instructions</h2>
                </div>
                <p className="into-para w-11/12 ml-20">{Will.instructions}</p>
            </div>
        </div>
    )
}
export default Output
