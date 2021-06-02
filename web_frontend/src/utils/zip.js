export default (arrayOfArrays, fillEmpty = undefined) => {
	var zipped = []
	const longest = Math.max(arrayOfArrays.map(x => x.length))

	for (var i = 0; i < longest; i++) {
		var row = {}
		let j = 0;
		arrayOfArrays.forEach(element => {
			const data = element.length > i ? element[i] : fillEmpty
			row.j = data
			j++
		});
		zipped.push(row)
	}
	return zipped
}