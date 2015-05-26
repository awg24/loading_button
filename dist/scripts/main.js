$(document).ready(function(){

	$button = $("#sub-btn");

	$button.on("click", beginLoad);

	function beginLoad(){
		
		$button.html("Loading...");

		setTimeout(function(){
			$button.html("Submit");
		}, 4000);	
	}
});