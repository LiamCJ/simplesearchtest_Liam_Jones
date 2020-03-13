var data = require(__dirname + "/data.json");
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const express = require('express');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//get request that returns the filltered array based on the users query
app.get(`/SimpleSearchApi/querySearchTerm`, (req,res) =>{
	query = req.query.s;
	var queryList = [];
	data.map((object, index) => {		
		if(query.length <= object.value.length ){
            if(object.value.includes(query)){
                queryList.push(object.display);
            }
        }
	})

    res.send(JSON.stringify(queryList));
})

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT} `));
