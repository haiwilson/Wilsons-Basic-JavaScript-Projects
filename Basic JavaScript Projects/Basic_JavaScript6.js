function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "Black");
var Erik = new Vehicle ("Ford", "Pinto", 2000, "Blue");
function myFunction () {
	document.getElememtById("Keywords_and_Constructors").innerHTML =
	"Eric drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + 
		"manufactured in " + Erik.Vehicle_Year;
}


