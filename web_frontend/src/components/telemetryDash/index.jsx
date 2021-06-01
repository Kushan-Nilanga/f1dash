import { useSelector } from "react-redux"
import { SNRPM_Component } from './SpeedRPM'
import { GNDRS_Component } from './GearDRS'
import { TNB_Component } from './ThrottleBreak'

// Takes a stringified json object and parses it
function processData(data) {
	if (!data.length)
		return []
	var parsedList = []
	data.forEach(element => {
		parsedList.push(JSON.parse(element))
	});
	return parsedList
}

export function Dashboard() {
	const data = processData(useSelector(state => state.trackdata))

	function renderGraphs() {
		if (data.length !== 0) {
			return (
				<>
					<TNB_Component data={data} />
					<SNRPM_Component data={data} />
					<GNDRS_Component data={data} />
				</>
			)
		}
		return (<>No data selected</>)
	}


	return (
		<>
			{renderGraphs()}
		</>
	)
}