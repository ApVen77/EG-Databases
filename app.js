// dependencies include 4- express, path, bodyParser, nodemailer
const express= require("express");
const path= require("path"); 
const bodyParser= require("body-parser"); 


//create express app and port 
var app= express();
var PORT= 3000; 

//for Jade https://naltatis.github.io/jade-syntax-docs/
// https://html2jade.org/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//to make POST request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// to use css from public folder
app.use(express.static(path.join(__dirname, 'public')));


//Routes 
//for jade(html) files in the views folder
//res.render Used in Express to view and send HTML to the client 









// Start server to listen for request
app.listen(PORT, function() {
	console.log("App is running on PORT " + PORT);
}); 
