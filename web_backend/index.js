const app = require('express')()
const port = process.env.port || 3000
const apiRouter = require('./src/router/api')

app.get('/', (req, res)=>{
	res.send("Hello")
})

app.use('/api', apiRouter);

app.listen(port, ()=>{
	console.log("get called")
})