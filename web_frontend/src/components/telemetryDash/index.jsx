import { useSelector } from "react-redux"
import { SNRPM_Component } from './SpeedRPM'
import { GNDRS_Component } from './GearDRS'
import { TNB_Component } from './ThrottleBreak'

export function Dashboard() {
	const data = useSelector(state => state.trackdata)
	function renderGraphs() {
		if (data.length) {
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