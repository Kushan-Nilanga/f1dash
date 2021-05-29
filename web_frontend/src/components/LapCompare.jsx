import React, { useState, useEffect } from "react"
import { LapPickerComponent } from "./LapPicker";
import axios from 'axios'

var mkey = 0;
var yearList = []
export function LapCompareComponent() {
	useEffect(() => {axios.get("http://localhost:5000/api").then(res => {yearList = res.data})})

	var [lapList, changeComponent] = useState([])

	const handleRemoveLap = (event) => {
		changeComponent(lapList.splice(event.target.value, 1))
	}

	const handleAddLap = (event) => {
		event.preventDefault();
		changeComponent([...lapList,
		<div key={mkey} className="card col">
			<LapPickerComponent yearList={yearList} />
			<button value={mkey} className="btn btn-outline-secondary" onClick={handleRemoveLap}>Remove</button>
		</div>
		])
		mkey++;
	}

	return (
		<div className="container">
			<div className="row">
				{lapList}
				<div className="card col">
					<button className="btn btn-success" onClick={handleAddLap}>Add lap data</button>
				</div>
			</div>
		</div>)
}