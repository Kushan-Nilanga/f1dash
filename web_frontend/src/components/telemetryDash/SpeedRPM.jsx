import { Line } from 'react-chartjs-2'

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

function processData(data) {
	console.log(data)

	var yAxes = []
	var xAxis = []


	data.forEach(element => {
		if (element.length > xAxis.length) {
			xAxis = element.map(x => x['Time'])
		}
		yAxes.push(
			{
				label: "Throttle",
				data: element.map(x => x['Throttle']),
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(0, 99, 132, 0.2)',
			}
		)
		yAxes.push(
			{
				label: "Brake",
				data: element.map(x => x['Brake']),
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 0, 0, 0.2)',
			}
		)
	});

	return (
		{
			labels: xAxis,
			datasets : yAxes
		}
	)
}

export function SNRPM_Component(props) {
	var data = processData(props.data)
	console.log(data)
	return (
		<>
			<Line data={data} options={options} />
		</>
	)
}