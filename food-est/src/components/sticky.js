import React from 'react';
import note from './post-it-note.png';
import "./sticky.css";

function Sticky({e}) {

    return (
        <div className="postingWrap">
        <center><img src={note} alt="Sticky note"></img></center>
        <div className="posting"> yo </div>
        {/* <div className="posting">heyo heyo heyo heyo heyo heyo heyoooo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo heyo </div> */}
        </div>
    );
}

export default Sticky;
