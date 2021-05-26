var express = require('express');
var fs = require('fs');

var router = express.Router();

router.get('/', (req, res) => {
	var years = [];
	fs.readdirSync('data').forEach(name => {
		if(name!==".DS_Store") { years.push(name) }
	});
	res.send(JSON.stringify(years));
})

router.get('/:year', (req, res)=>{
	venues = []
	fs.readdirSync(`data/${req.params.year}/`).forEach(name => {
		if(name!==".DS_Store"){venues.push(name);}
	});
	res.send(JSON.stringify(venues));
})

router.get('/:year/:venue', (req, res)=>{
	sessions = []
	fs.readdirSync(`data/${req.params.year}/${req.params.venue}`).forEach(name => {
		if(name!==".DS_Store"){sessions.push(name);}
	});
	res.send(JSON.stringify(sessions));
})

router.get('/:year/:venue/:session', (req, res)=>{
	drivers = []
	fs.readdirSync(`data/${req.params.year}/${req.params.venue}/${req.params.session}`).forEach(name => {
		if(name!==".DS_Store"){drivers.push(name.split('.')[0]);}
	});
	res.send(JSON.stringify(drivers));
})

router.get('/:year/:venue/:session/:driver', (req, res)=>{
	const dir = `data/${req.params.year}/${req.params.venue}/${req.params.session}/${req.params.driver}.json`;

	fs.readFile(dir, 'utf8', (err, data)=>{
		if(err){
			console.log(err);
			res.statusCode(400)
			res.send();
		}
		res.send(data)
	})
})

module.exports = router;