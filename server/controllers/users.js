var mongoose = require('mongoose');
var Result = mongoose.model('Result');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {
					getResults: function (req, res){
										Result.find({}, function (err, results){
											if(err){
												console.log(err);
												console.log('\nError getting all customers!');
											} else {
												//console.log("in getResults controller");
												//console.log(results);
												res.json(results);
											}
										});
									},
					addQuestion: function(req,res){
										new_question = new Question(req.body);
										// new_appt._user = req.body.id;
										// singleUser.appts.push(new_appt);
										new_question.save(function (err, success){
											// singleUser.save(function (err){
											if(err){
												console.log("issue adding an issue");
											}else{
												console.log("added issue successfully");
												res.json(success);
											}
										});
									},
					getQuestions: function (req, res){
										Question.find({}, function (err, results){
											if(err){
												console.log(err);
												console.log('\nError getting all customers!');
											} else {
												//console.log("in getResults controller");
												//console.log(results);
												res.json(results);
											}
										});
									},
			// register: function(req, res){
			// 	//console.log(req.body);
			// 	User.find({},function (err,results){
			// 		if(err) {
			// 			console.log('error');
			// 		} else {
			// 			var unique = true;
			// 			for(var i=0;i<results.length;i++){
			// 				if(results[i].name == req.body.name){
			// 					unique = false;
			// 					break;
			// 				}
			// 			}
			// 			if(unique){
			// 				var new_user = new User(req.body);
			// 				new_user.save(function (err, result){
			// 					if(err){
			// 						console.log('error');
			// 					} else {
			// 						console.log('successfully added a user');
			// 						//console.log(result);
			// 						res.json(result);
			// 					}
			// 				});
			// 			}
			// 		}
			// 	});
			// },

	
			// 	deleteAppt: function (req, res){
			// 		Appt.remove({_id: req.body._id}, function (err, results){
			// 			if(err){
			// 				console.log(err);
			// 				console.log('\nError getting all customers!');
			// 			} else {
			// 				console.log("in getAppts controller");
			// 				res.redirect('/getAppts');
			// 			}
			// 		});
			// 	}
	};
})();