import React from 'react';
import './style.css';

function Row({children}) {
    return (
        <div className="row">
            {children}
        </div>
    )
}
export default Row;