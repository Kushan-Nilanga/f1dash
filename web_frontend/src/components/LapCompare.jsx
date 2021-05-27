import React, {useState} from "react"
import { LapPickerComponent } from "./LapPicker";

var mkey = 0;
export function LapCompareComponent() {
	var [lapList, changeComponent] = useState([])

	const handleRemoveLap = (event) => {
		changeComponent([...lapList, lapList.splice(event.target.value)])
	}

	const handleAddLap = (event) => {
		event.preventDefault();
		changeComponent([...lapList, 
			<div key={mkey} className="card col">
				<LapPickerComponent yearList={[2018, 2019, 2020, 2021]}/>
				<button value={mkey}  className="btn btn-outline-secondary" onClick={handleRemoveLap}>Remove</button>
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