const express = require("express");

// Start MongoDB Atlas ********
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// End MongoDB Atlas ********

const app = express();

// Start MongoDB Atlas ********
app.use(bodyParser.urlencoded({extended: true}));

const mongooseUri = "mongodb+srv://testMongoDBUserName:8L4kkR8KszHZTI7S@cluster0.fei8p8f.mongodb.net/notesDB"
mongoose.connect(mongooseUri, {useNewUrlParser: true}, {useUnifiedTopology: true})
const notesSchema = {
	title: String,
	content: String
}
const Note = mongoose.model("Note", notesSchema);
// End MongoDB Atlas ********

app.use(express.static(__dirname + '/client'))

// Start MongoDB Atlas ********
app.post("/mongo-create", function(req, res){
	let newNote = new Note({
		title: req.body.title,
		content: req.body.content
	})
	
	newNote.save();

	res.type('text/plain')
	res.send('Saved title='+req.body.title+' and content='+req.body.content+' port='+port)
})
// End MongoDB Atlas ********

const port = process.env.PORT || 3000
app.get('/test', function(request, response) {
	response.type('text/plain')
	response.send('Node.js and Express running on port='+port)
})

app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})
