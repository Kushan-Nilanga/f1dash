import React, { PureComponent } from "react";
import zip from "../../utils/zip";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Brush,
	AreaChart,
	Area,
	ResponsiveContainer,
} from 'recharts';

var ThrottleComponents = []
var BrakeComponents = []

function processData(data) {
	var processedData = []

	// custom zip function
	const parsedData = data.map(x => JSON.parse(x))

	// IDK why this code works but it works so im not gonna worry
	const longest = parsedData.reduce((argmax, curr) => argmax.length > curr.length ? argmax : curr)

	for (var i = 0; i < longest.data.length; i++) {
		const data = { name: longest.data[i]['Time'] }
		parsedData.forEach(element => {
			if (element.data[i] !== undefined) {
				const driver = element.driver
				data[driver + "_Throttle"] = element.data[i]['Throttle']
				data[driver + "_Brake"] = element.data[i]['Brake']
			}
		});
		processedData.push(data)
	}

	console.log(processedData)
	console.log(parsedData.length)
	parsedData.forEach(element => {
		ThrottleComponents.push(element.driver + "_Throttle")
		BrakeComponents.push(element.driver + "_Brake")
		console.log("jello")
	});

	BrakeComponents.map(element =>
		console.log(element)
	)

	return processedData
}

export function TNB_Component(props) {
	var data = processData(props.data)
	return (
		<>
			<ResponsiveContainer width="100%" height={200}>
				<AreaChart
					width={500}
					height={200}
					data={data}
					syncId="anyId"
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					{ThrottleComponents.map(element => {
						const color = `rgba(${Math.random() * 200 + 50},${Math.random() * 200 + 50},${Math.random() * 200 + 50},`
						return (<Area type="monotone" dataKey={element} stroke={color + '1)'} fill={color + '0.1)'} />)
					})}
				</AreaChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={200}>
				<AreaChart
					width={500}
					height={200}
					data={data}
					syncId="anyId"
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<XAxis dataKey="name" />
					<YAxis />
					
					{BrakeComponents.map(element => {
						const color = `rgba(${Math.random() * 200 + 500},${Math.random() * 200 + 50},${Math.random() * 200 + 50},`
						return <Area type="monotone" dataKey={element} stroke={color + '1)'} fill={color + '0.1)'} />
					})}
					
					<Brush />
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}