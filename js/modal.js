// Get the modal
var modal = document.getElementById('myModal');

// Get the images and insert it inside the modal
var imgs = document.getElementsByClassName("message-img");
var modalImg = document.getElementById("modal-img");
for (index = 0; index < imgs.length; ++index) {
	imgs[index].onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}