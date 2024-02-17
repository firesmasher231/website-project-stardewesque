var challengesWrapper = document.getElementById("challenges-wrapper");
var NameEle1 = document.getElementById("uName1");
var AgeEle1 = document.getElementById("uAge1");

var NameEle2 = document.getElementById("uName2");
var CuisineEle = document.getElementById("uCuisine2");

var OutEle1 = document.getElementById("Out1");
var OutEle2 = document.getElementById("Out2");

function showChallenges() {


  challengesWrapper.style.display = "flex";

}

function closePopup() {

  challengesWrapper.style.display = "none";
}

var seaEle = document.getElementById("sea");

document.addEventListener("DOMContentLoaded", function() {
    var x = 0;
    setInterval(function(){
        x += 25;
        seaEle.style.backgroundPosition = x + 'px 0';
    }, 1000);
});


function calcAge() {
  var age = AgeEle1.value;
  if (age <= 19) {
    OutEle1.value = "You can pay child’s fare"
  } else {
    OutEle1.value = "You must pay the adult fare"
  }

}

function calcFood() {
  var food = CuisineEle.value;
  var name = NameEle2.value;
  
  OutEle2.value = "Name: " + name + "\nCuisine: " + food;


}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.clickable a').forEach(link => { // Ensure the selector targets the correct links
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      const destination = this.href; // Store the href of the clicked link

      // Apply fade-out class to body or a specific container
      document.body.classList.add('fade-out');

      // Wait for the animation to complete before navigating
      setTimeout(function() {
        window.location.href = destination;
      }, 500); // This delay should match the animation duration
    });
  });
});

var audio = document.getElementById("music");
audio.volume = 0.5;