const app = require('express')()
const port = process.env.port || 5000
const apiRouter = require('./src/router/api')

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', (req, res)=>{
	res.send("Hello")
})

app.use('/api', apiRouter);

app.listen(port, ()=>{
	console.log("get called")
})