import React from 'react';

function FreeFoodTable() {
    // useEffect(() => {
    //     // This function runs whenever Profile mounts
    //     console.log("I AM HERE GET THE DRINKS GOING")
    // }, [])

    return (
        <div className="results">
			<table id="result-table">
			    <caption id="table-title">Here's where you can get free food soon on campus:</caption>
				<thead id = "outputHead">
                    <tr>
                        <td>Event</td>
                        <td>Organizer</td>
                        <td>Date</td>
                        <td>Restricted Guests?</td>
                    </tr>
                </thead>
				<tbody id="output"></tbody>
			</table>
		</div>
    );
}

function FreeFoodSrc({link, group, title, date}) {
    // useEffect(() => {
    //     // This function runs whenever Profile mounts
    //     console.log("I AM HERE GET THE DRINKS GOING")
    // }, [])

    // if don't have title, just make it say "link", and then the column title is "Original Posting"
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