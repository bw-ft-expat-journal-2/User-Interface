let navButton = document.getElementById("mobileNav");
let mobileMenu = document.getElementById("mobileMenu");
navButton.addEventListener('click', function() {
  if(window.getComputedStyle(mobileMenu).display === "none") {
    
    mobileMenu.style.display = "block";
    setTimeout(function(){ mobileMenu.style.opacity = 1; }, 50);
  } else {
    mobileMenu.style.opacity = 0;
    setTimeout(function(){ mobileMenu.style.display = "none"; }, 300);
  }
});