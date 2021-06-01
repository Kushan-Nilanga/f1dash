import React, { useState, useEffect } from "react"
import { LapPickerComponent } from "./LapPicker";
import axios from 'axios'
import { Dashboard } from './telemetryDash'

var yearList = []
var initKey = 0
export function LapCompareComponent() {
	useEffect(() => { axios.get("http://localhost:5000/api").then(res => { yearList = res.data }) })

	var [dataComponents, changeComponent] = useState([])

	function handleAddLap() {
		function handleRemoveData(e) {
			var placeholder = []
			console.log(e.target.id)
			dataComponents.forEach(comp => {
				if (comp.key !== e.target.id) {
					placeholder = [...placeholder, comp]
				}
				console.log(placeholder)
			})
			console.log(placeholder)
			changeComponent(placeholder)
		}
		initKey++
		changeComponent([...dataComponents,
		<div className="card col" key={initKey}>
			<LapPickerComponent yearList={yearList} />
			<button className="btn btn-primary" id={initKey} onClick={handleRemoveData}>Remove Data</button>
		</div>
		])
	}

	return (
		<div className="container">
			<div className="row">
				{dataComponents}
				<div className="card col">
					<button className="btn btn-success" onClick={handleAddLap}>Add lap data</button>
				</div>
			</div>
			<div>
				<Dashboard />
			</div>
		</div>)
}