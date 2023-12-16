let flash = false;
let elem = null;
//ms
let blog_button_interval = 400;
let pt = Date.now();
let selector = "◓";
let selectors = ["◓", "◐", "◒", "◑"];
let selector_index = 0;
let selector_interval = 150;
let pt_2 = Date.now();
let selected_element = null;
let selected_element_inner_html = null;
let p_selected = false;
let test = 0;

window.addEventListener('DOMContentLoaded', () => {
	/*
	//index.html nav buttons on mouse click
	document.getElementById("blog-button").onclick = function () { location.href = "latex_test_2.html"; };
	document.getElementById("software-button").onclick = function () { location.href = "software.html"; };
	document.getElementById("games-button").onclick = function () { location.href = "games.html"; };
	document.getElementById("cv-button").onclick = function () { location.href = "cv.html"; };
		
	//mouse hover
	document.getElementById("blog-button").addEventListener("mouseover", (event) => {
		pt = Date.now() - blog_button_interval;
		elem = document.getElementById("blog-button");
		flash = false;
	});
	
	document.getElementById("software-button").addEventListener("mouseover", (event) => {
		pt = Date.now() - blog_button_interval;
		elem = document.getElementById("software-button");
		flash = false;
	});
	
	document.getElementById("games-button").addEventListener("mouseover", (event) => {
		pt = Date.now() - blog_button_interval;
		elem = document.getElementById("games-button");
		flash = false;
	});

	document.getElementById("cv-button").addEventListener("mouseover", (event) => {
		pt = Date.now() - blog_button_interval;
		elem = document.getElementById("cv-button");
		flash = false;
	});

	//mouse out
	document.getElementById("blog-button").addEventListener("mouseout", (event) => {
		elem = null;
		document.getElementById("blog-button").innerHTML = "Blog";
	});
	
	document.getElementById("software-button").addEventListener("mouseout", (event) => {
		elem = null;
		document.getElementById("software-button").innerHTML = "Software";
	});
	
	document.getElementById("games-button").addEventListener("mouseout", (event) => {
		elem = null;
		document.getElementById("games-button").innerHTML = "Games";
	});

	document.getElementById("cv-button").addEventListener("mouseout", (event) => {
		elem = null;
		document.getElementById("cv-button").innerHTML = "CV";
	});
	
	*/
	
	//face
	face_elem = document.getElementById("face");
	if (face_elem) {
		face_elem.addEventListener("mouseover", (event) => {
			event.target.innerHTML = "(0_0)";
			localStorage.setItem("disturbed-the-smiley", "true");
		});
		
		face_elem.addEventListener("mouseout", (event) => {
			event.target.innerHTML = "(ಠಿ_ಠ)";
		});
		
		face_elem.addEventListener("mousedown", (event) => {
			event.target.innerHTML = "(^​_^)";
		});
		
		face_elem.addEventListener("mouseup", (event) => {
			event.target.innerHTML = "(0_0)";
		});
	}
	
	document.querySelectorAll(".link").forEach((e) => e.addEventListener("mouseover", (event) => {
		selected_element = document.getElementById(e.innerHTML);
	}));
	
	document.querySelectorAll(".link").forEach((e) => e.addEventListener("mouseout", (event) => {
		selected_element.style.transform = "scale(0)";
		selected_element = null;
	}));
		
	update_button_loops();
	update_selector_loop();
});

function update_button_loops() {
	if (elem != null) {
		if (Date.now() - pt >= blog_button_interval) {
			pt = Date.now();
			flash = !flash;
			elem.innerHTML = (flash) ? elem.innerHTML + "_" : elem.innerHTML.substring(0, elem.innerHTML.length - 1);
		}
	}
	
	setTimeout(update_button_loops, 1);
}

/*

function update_selector_loop() {
	if (selected_element != null) {
		selected_element.innerHTML = selector; 
	}

	if (Date.now() - pt_2 >= selector_interval) {
		pt_2 = Date.now();
				
		selector_index = (selector_index + 1) % selectors.length;
		selector = selectors[selector_index];
	}
	
	setTimeout(update_selector_loop, 1);
}

*/

function update_selector_loop() {
	
	if (selected_element != null) {
		if (!p_selected) {
			p_selected = true;
			//selected_element.innerHTML = selector; 
			pt_2 = Date.now();
			selected_element.style.transform = "rotate(0deg)";
		}
		let t = Date.now() - pt_2;
		
		selected_element.style.transform = "scale(" + String((t < 500) ? 1 - Math.pow(2, -10 * t/300) : 1) + ") " + "rotate(" + String(t/1.5) + "deg)";
		selected_element.style.transformOrigin = "center center";
	} else {
		p_selected = false;
	}
	
	
	/*
	
	test += 10;
	let t = test;
		
	//document.getElementsByClassName("nav-icon")[0].style.transform = "scale(" + String((t < 500) ? 1 - Math.pow(2, -10 * t/500) : 1) + ") " + "rotate(" + String(t/2) + "deg)";
	document.getElementsByClassName("nav-icon")[0].style.transform = "rotate(" + String(t) + "deg)";
	//document.getElementsByClassName("nav-icon")[0].style.transformOrigin = "center";
	*/
	setTimeout(update_selector_loop, 10);
}
