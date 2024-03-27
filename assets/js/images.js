	//Slideshow
	let slideIndex = 0;
	showSlides();

	function plusSlides(n) {
        console.log("cock");
		showSlides(slideIndex += n);
	  }
	  
	  function currentSlide(n) {
		showSlides(slideIndex = n);
	  }

	function showSlides() {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		console.log(slides.length);
		for (i = 0; i < slides.length/2; i++) {
			slides[i].style.display = "none";
		}
		console.log(slides.length);
		slideIndex++;
		if (slideIndex > slides.length/2) { slideIndex = 1 }
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
		setTimeout(showSlides, 5000); // Change image every 5 seconds
	}