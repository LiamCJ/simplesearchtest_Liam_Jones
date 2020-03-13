var data = require(__dirname + "/data.json");
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const express = require('express');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get(`/SimpleSearchApi/querySearchTerm`, (req,res) =>{
	query = req.query.s;
	data.map((object, index) => {
		if(query == object.value){
			res.send(object.display);
		}
	})
})

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT} `));
