import Image from "next/image";
import Styles from "./styles/ImageSlide.module.css"

export default function ImageSlide(){
    return(
        <div>
            <div>
                <Image className="mySlides" src = "/r1.jpeg" width={20} height={20}  />
                <Image className="mySlides" src = "/r2.jpeg"  width={20} height={20}  />
                <Image className="mySlides" src = "/r3.jpeg"  width={20} height={20}  />
                <Image className="mySlides" src = "/r4.jpeg"  width={20} height={20}  />

                <div class="butthonleft" onClick="plusDivs(-1)">❮</div>
                <div class="butthonright" onClick="plusDivs(+1)">❯</div>
            </div>
        </div>
        
    )
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}