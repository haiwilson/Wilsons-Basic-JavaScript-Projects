// JavaScript source code
function getReceipt() {
var textl = "<h3>You ordered:</h3>";
var runningTotal = 0;
var sizeTotal = 0;
var sizeArray = document.getHlementsByClassName ("size");
for (var i =0;i<sizeArray.length;i++) {
	if (sizeArray[i].checked) {
	var selectedSize=sizeArray[i].value;
	text1=text1+selectedSize+<"br">;
	}
}
if (selectedSize === "personal") {
	sizeTotal = 6;
} else if (selectedSize === "medium") { 
	sizeTotal = 8;
} else if (selectedSize === "large") {
	sizeTotal = 10;
} else if (selectedSize === "extra large") { 
	sizeTotal = 14;
}
runningTotal = sizeTotal;
console.log(selectedSize+" = $"+sizeTotalt".00");
console.log("size textl: "+textl);
console.log("subtotal: $"+runningTotal+".00");
getMeat (runningTotal,textl); 
};

function getMeat(runningTotal,textl) { 
	var meatTotal = 0; 
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j=0;j<meatArray.length;j++) {
		if (meatArray[j].checked) { 
			selectedMeat.push(meatArray[j].value); 
			console.log("selected meat item: ("+meatArray[j].valuet+")");
			textl = textl+meatArray[j].value+"<br>;
		}	
}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1); } 
		else {
		meatTotal =0;
		}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"S"+meatTotal+".00");
	console.log("meat textl:" +textl1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +runningTotal+".00"+"</strong></h3>"; 
};

