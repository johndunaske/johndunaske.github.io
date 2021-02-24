

function welcomeAlert(){
	alert("Press the Linkedin to go to my profile!");
}

function openLink() {
	window.open("https://www.linkedin.com/in/john-dunaske-b6673a162/", "_blank");
}

function cursor() {
	if (document.body.style.cursor == 'url("./images/cursorMe.jpg"), auto') {
		document.body.style.cursor = 'url("./images/cursorMeFlip.jpg"), auto';
	} else {
		document.body.style.cursor = 'url("./images/cursorMe.jpg"), auto';
	}
}
