//your JS code here. If required.
function modelBody(){

	let open = document.getElementById("openModal");
		let modal = document.querySelector(".modal");
        let close = document.querySelector(".close-modal");
	
	open.addEventListener("click", function(){
		modal.style.display = "block";
	});

  

	close.addEventListener("click", function(){
		modal.style.display = "none";
	});

}
modelBody();