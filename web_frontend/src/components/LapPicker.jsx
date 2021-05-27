import React, { useState } from "react"
import axios from "axios"

function VenuePickerComponent(props) {
	var venueComponent = []
	var [activeVenue, changeVenue] = useState();
	console.log(props.venueList)
	function renderVenues(){
		var drivers = []

		var placeholder = []
		props.venueList.forEach(venue => {

			placeholder.push(
				<li
					key={venue}
					value={venue}
					className={"list-group-item list-group-item-action"}>
					{venue}
				</li>
			)
		});

		return placeholder
	}

	return (
		<ul className="list-group">
			{renderVenues()}
		</ul>)
}

export function LapPickerComponent(props) {

	var [placeholderYears, updateYears] = useState([])
	var [activeYear, activateYear] = useState(0)
	var [venues, venueFetch] = useState([])
	placeholderYears = props.yearList


	// Rendering Year List
	function renderYears() {
		// OnClick action on a year
		function yearOnClick(e) {
			axios.get(`http://localhost:5000/api/${e.target.value}`).then(res => {
				venues = res.data
			})
			activateYear(e.target.value)
			updateYears([placeholderYears])
		}

		var placeholder = []
		for (var i = 0; i < props.yearList.length; i++) {
		
			placeholder.push(
				<li
					key={props.yearList[i]}
					value={props.yearList[i]}
					onClick={yearOnClick}
					className={activeYear == props.yearList[i] ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
					{props.yearList[i]}
					{activeYear == props.yearList[i] ? <VenuePickerComponent year={props.yearList[i]} venueList={venues}/> : <></>}

				</li>)
		}
		return placeholder
	}

	return (
		<ul className="list-group">
			{renderYears()}
		</ul>
	)
}