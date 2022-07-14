$('.count').counterUp({
  delay:10,
  time:3000
})

//Get The Button
mybutton = document.getElementById("myBtn");

//when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block";
  } else{
    mybutton.style.display = "none";
  }
}

//when the user clicks on the button, scroll to the top of the documnet 
function topFunction(){
  document.body.scrollTop = 0; //For safari
  document.documentElement.scrollTop = 0; //For chrome, firefox, IE and opera
}