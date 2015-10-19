var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
	name: String,
	score: Number,
	percentage: Number,
	created_at: String
});

var QuestionSchema = new mongoose.Schema({
	question: String,
	answer: String,
	fake1: String,
	fake2: String,
	created_at: String
});

mongoose.model('Result', ResultSchema);
mongoose.model('Question', QuestionSchema);

QuestionSchema.path('question').required(true, 'Question must be at least 15 characters long!');
QuestionSchema.path('answer').required(true, 'Answers cannot be blank');
QuestionSchema.path('fake1').required(true, 'Answers cannot be blank');
QuestionSchema.path('fake2').required(true, 'Answers cannot be blank');