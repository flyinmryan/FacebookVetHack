var users = require('../server/controllers/users.js');

module.exports = function(app){
	  app.get('/getResults',function (req,res){
		  users.getResults(req,res);
		});
	  
		app.get('/getQuestions',function (req,res){
		  users.getQuestions(req,res);
		});

		app.post('/addQuestion', function (req,res){
	    users.addQuestion(req,res);
    });
 //    app.post('/register',function (req,res){
 //      //console.log(req.body);
 //      users.register(req,res);
 //    });
 //    app.post('/deleteAppt',function (req,res){
 //      //console.log(req.body);
 //      users.deleteAppt(req,res);
 //    });
};