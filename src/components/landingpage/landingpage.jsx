import React from "react";
import '../landingpage/landingpage.css';
const Landingpage = ()=>{
    return(
        <div>
              <div className="landingpage-container">
                    <div className="land-left">
                        <div className="heading">
                        <h1>Protect Your Estate with a Will</h1>
                        </div>
                        <div className="para1">
                         <p>It takes less than 20 minutes to write or update your legal will, for free.</p>
                        </div>
                        <div className="btn">
                            <a href="/body">
                            <button>Make a Will</button>
                            </a>
                        </div>
                    </div>
             </div>     
        </div>
    )
}

export default Landingpage