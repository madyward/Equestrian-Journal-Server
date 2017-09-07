var Sequelize = require("sequelize"); //Creates Sequelize application.
var sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:Bizarre1Postgres5511@localhost:5432/workoutlog",
 { 							//Sequelize constructor takes all three params
	dialect: "postgres"		//Defines dialect as Postgres
});

sequelize.authenticate().then( //Require sequelize authentication, .then says what to do next
	function(){
		console.log("Connected to the workoutlog postgres db"); //print this string to the console if successful
	},
	function(err){
		console.log(err);		//print an error to the console if unsuccessful
	}
);



var User = sequelize.import("./models/user");

module.exports = sequelize;