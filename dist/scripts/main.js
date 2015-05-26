$(document).ready(function(){

	$button = $("sub-btn");

	$button.on("click", beginLoad);

	function beginLoad(){
		
		$button.html("Loading...").delay(4000).html("Loading...");
	}
});