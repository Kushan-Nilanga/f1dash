const app = require('express')()
const port = process.env.port || 3000

app.get('/', (req, res)=>{
	res.send("Hello")
})

app.listen(port, ()=>{
	console.log("get called")
})