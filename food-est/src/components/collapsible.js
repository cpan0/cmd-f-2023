import React from "react";
import "./collapsible.css";

function Collapsible({desc}) {
    return (
        <div>
        <button type="button" class="collapsible">open</button>
        <div class="content">
            <p>{desc}</p>
        </div>
        </div>
    );
}

var clpsibles = document.getElementsByClassName("collapsible");
for(var i = 0; i < clpsibles.length; i++) {
    clpsibles[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }); 
    
}
export default Collapsible;