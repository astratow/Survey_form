function results() {
	var name = document.getElementById("name").value;
	var emal = document.getElementById("email").value;
	var age = document.getElementById("age").value;
	var link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("href", "style.css");
	document.getElementsByTagName("head")[0].appendChild(link);
	document.write("<h1>Thank you for submiting survey!</h1>");
	
}
