function login() {
	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = "admin";
	var corpass = "admin";

	if (user.value == coruser) {
		if (pass.value == corpass) {
			window.open("Home.html")
		} 
		else {
		window.alert("Incorrect username or password!")	
		}
	} 
	else {
		window.alert("Incorrect username or password!")	
	}


}