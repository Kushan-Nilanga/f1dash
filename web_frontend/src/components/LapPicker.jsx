import React, { useState } from "react"
import axios from "axios"
import {useDispatch} from 'react-redux'
import {addData} from '../actions'


function DriverPickerComponent(props) {
	var [data, dataFetch] = useState()
	var [activeDriver, changeDriver] = useState(0)

	const dispatch = useDispatch()

	function render() {

		function onDriverClick(e) {
			if (activeDriver != e.target.id) {
				axios.get(`http://localhost:5000/api/${props.year}/${props.venue}/${props.session}/${e.target.id}`)
					.then(res => {
						dataFetch(res.data)
						changeDriver(e.target.id)

						
						dispatch(addData(res.data))

					})
			} else { changeDriver(0) }
		}


		var placeholder = []
		props.driverList.forEach(driver => {
			if (activeDriver == driver || activeDriver == 0)
				placeholder.push(
					<>
						<li

							key={driver}
							onClick={onDriverClick}
							id={driver}
							className={activeDriver == driver ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
							{driver}
						</li>
						{activeDriver == driver ? console.log(data) : <></>}
					</>
				)
		});

		return placeholder
	}

	return (
		<ul className="list-group">
			{render()}
		</ul>
	)
}

function SessionPickerComponent(props) {
	var [drivers, driverFetch] = useState()
	var [activeSession, changeSession] = useState(0)

	function render() {

		function onSessionClick(e) {
			if (activeSession != e.target.id) {
				axios.get(`http://localhost:5000/api/${props.year}/${props.venue}/${e.target.id}`)
					.then(res => {
						driverFetch(res.data)
						changeSession(e.target.id)
						console.log(res.data)
					})
			} else { changeSession(0) }
		}


		var placeholder = []
		props.sessionList.forEach(session => {
			if (activeSession == session || activeSession == 0)
				placeholder.push(
					<>
						<li

							key={session}
							onClick={onSessionClick}
							id={session}
							className={activeSession == session ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
							{session}
						</li>
						{activeSession == session ? <DriverPickerComponent year={props.year} venue={props.venue} session={session} driverList={drivers} /> : <></>}
					</>
				)
		});

		return placeholder
	}

	return (
		<ul className="list-group">
			{render()}
		</ul>
	)
}

function VenuePickerComponent(props) {
	var [activeVenue, changeVenue] = useState(0);
	var [sessions, sessionFetch] = useState();
	console.log(props.venueList)


	function render() {

		function onVenueClick(e) {
			if (activeVenue != e.target.id) {
				axios.get(`http://localhost:5000/api/${props.year}/${e.target.id}`)
					.then(res => {
						sessionFetch(res.data)
						changeVenue(e.target.id)
					})
			} else { changeVenue(0) }

		}

		var placeholder = []
		props.venueList.forEach(venue => {
			if (activeVenue == venue || activeVenue == 0) {
				placeholder.push(
					<>
						<li
							key={venue}
							id={venue}
							onClick={onVenueClick}
							className={activeVenue == venue ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
							{venue}
						</li>
						{activeVenue == venue ? <SessionPickerComponent year={props.year} venue={venue} sessionList={sessions} /> : <></>}
					</>
				)
			}
		});

		return placeholder
	}

	return (
		<ul className="list-group">
			{render()}
		</ul>)
}

export function LapPickerComponent(props) {
	var [activeYear, changeYear] = useState(0)
	var [venues, venueFetch] = useState([])

	// Rendering Year List
	function render() {
		// OnClick action on a year
		function yearOnClick(e) {
			if (activeYear != e.target.value) {
				axios.get(`http://localhost:5000/api/${e.target.value}`).then(res => {
					venues = res.data
					changeYear(e.target.value)
					venueFetch(venues)
				})
			} else { changeYear(0) }
		}

		var placeholder = []
		props.yearList.forEach(year => {
			if (activeYear == year || activeYear == 0)
				placeholder.push(<>
					<li
						key={year}
						value={year}
						onClick={yearOnClick}
						className={activeYear == year ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
						{year}
					</li>
					{activeYear == year ? <VenuePickerComponent year={year} venueList={venues} /> : <></>}
				</>
				)
		})
		return placeholder
	}

	return (
		<ul className="list-group">
			{render()}
		</ul>
	)
}