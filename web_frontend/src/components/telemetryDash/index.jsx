import { useSelector } from "react-redux"

function processData() {
	return "processed data"
}

export function Dashboard() {
	const data = useSelector(state => state.trackdata)

	function renderGraphs() {
		if (data.length !== 0) {
			return (
				<>
					<div>
						Trottle and Break percentage
					</div>
					<div>
						Speed and RPM
					</div>
					<div>
						Gear and DRS
					</div>
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