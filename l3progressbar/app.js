var getprogressbar = document.querySelector(".progress-bar");
var getdownloadbtn = document.querySelector(".download-btn");
var seturl = "https://linkedin.com"


getdownloadbtn.addEventListener("click",function(){

	getdownloadbtn.setAttribute("disabled",true)

	var setwidth = 0;

	var setint = setInterval(progressinc,100);   // 10s

	function progressinc(){
	  
	  if(setwidth >= 100){
        clearInterval(setint);
        // setwidth = 0;
        window.location.href = seturl;
	  }else{
           setwidth++;

           getprogressbar.style.width =` ${setwidth}%`;
           getprogressbar.setAttribute('data-inc',`${setwidth}%`)
	  }

	};


})
