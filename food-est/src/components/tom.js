import React from 'react';
import tom from './tom.png';
import "./tom.css";

function Tom() {

    return (
        <div className="tom">
			<img src={tom} className="tom" alt="tom" />
		</div>
    );
}

export default Tom;
