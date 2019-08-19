function Time_function() { 
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply = "Its morning time";
	}
	else if (Time > 12 == Time < 10) {
		Reply = "Its afternoon time";
	}
	else {
		Reply = "Its evening time";
	}
	document.getElementById("Time_of_day").innerHTML = Reply;
}