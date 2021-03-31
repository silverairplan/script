var run = require('child_process');
var cron = require('node-cron');
function runphpscript(){

	run.exec("php ~/backendapp/artisan command:sportlist",function(err,res){
		            if(err){console.log(err)}
	})


}

cron.schedule('*/15 * 0-3,6-23 * * *',()=>{
	runphpscript();
});



