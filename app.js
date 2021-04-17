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
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// // to use css from public folder
// app.use(express.static(path.join(__dirname, 'public')));


//Routes 



 
// app.use(serveStatic(path.join(__dirname)));
 
// if (process.env.NODE_ENV !== 'production') {
//   var viewsDir = path.join(__dirname, 'views');
//   var namespace = 'jade';
//   app.get('/js/templates/*', expressJade(viewsDir, namespace));
// }
 
// app.listen(3000);



//for jade(html) files in the views folder
//res.render Used in Express to view and send HTML to the client 

app.get('/', function(req, res){
	res.render('index', {title: 'This Page is All about DataBases'}) 
}); 


app.get('/chap1', function(req, res) {
	res.render('chapter-1'); 
});

app.get("/chap2", function (req, res) {
	res.render("chapter-2"); 
})

app.get("/chap3", function (req, res) {
	res.render("chapter-3"); 
})

app.get("/chap4", function (req, res) {
	res.render("chapter-4"); 
})



// Start server to listen for request
app.listen(PORT, function() {
	console.log("App is running on PORT " + PORT);
}); 
