import React, { useState } from "react"
import axios from "axios"

function VenuePicker(year) {
	return (
		<>
		</>
	)
}

function SessionPicker(year, venue) {
	return (
		<>
		</>
	)
}

function DriverPicker(year, venue, session) {
	return (
		<>
		</>
	)
}

function yearOnClick(e){
	
}

export function LapPickerComponent(props) {

	var placeholderYears = []
	console.log(props.yearList)
	for (var i = 0; i < props.yearList.length; i++) {
		placeholderYears.push(
			<li 
				value={props.yearList[i]} 
				onClick={yearOnClick}
				className="list-group-item list-group-item-action">
				{props.yearList[i]}
			</li>
		)
	}

	return (
		<>
			{placeholderYears}
		</>
	)
}