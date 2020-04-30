import React from "react";
import "./style.css";
// import Image from '../../images/analytics.jpg';

function GraphBanner({children}) {
    return (
        <div className="GraphBanner">
            {children}
            {/* <img src={Image} alt="Responsive" style={{ backgroundSize: 'cover' }} style={{ backgroundAttachment: 'fixed' }}/> */}
        </div>
    )
}

export default GraphBanner;