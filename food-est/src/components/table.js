import React from 'react';
import Collapsible from './collapsible';

function FreeFoodTable() {

    return (

        <table id="foodTable">
          <tr>
            <th>Event</th>
            <th>Organizer</th>
            <th>Date</th>
            <th><Collapsible desc="desc here"/></th>
          </tr>
          <tbody id="foodEvents"></tbody>
        </table>
    );
}

function FreeFoodSrc({link, group, title, date}) {

    return (
        <div className="container">
            <tr>
                <td><a href={link}>{title}</a></td> 
                <td>{group}</td>
                <td>{date}</td>
            </tr>
        </div>
    );
}

export default FreeFoodTable;
export {FreeFoodSrc};