var getprogressbar = document.getElementById("progress-bar");

// $(document).scroll(function(){   // jquery method pr bro

// })

window.onscroll = function(){
	scrollpoint();                        // invoke pyan loke pay ya dal
}

function scrollpoint(){
	// console.log("i am working");


	// scrollpoint
	// projectheight
	// clientheight  // another mean currentheight bro

	// ph - ch

	// st * 100 / (ph - ch);

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;
	// console.log(calcheight);

	// var getfinal = Math.round(getscrolltop * 100 / calcheight);     // Math.round ka 1 toe de har
	// console.log(getfinal);

	var getfinal = Math.round(  getscrolltop / calcheight  * 100);     // Math.round ka 1 toe de har
	console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;
}


function printme(){
	window.print();
}