// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

    //Get the modal and button elements
    const popup1 = document.getElementById('projectPopup1');
    const openBtn1 = document.getElementById('openPopupBtn1');
    const closeBtn1 = document.querySelector('.close-btn1');

    const popup2 = document.getElementById('projectPopup2');
    const openBtn2 = document.getElementById('openPopupBtn2');
    const closeBtn2 = document.querySelector('.close-btn2');

    const popup3 = document.getElementById('projectPopup3');
    const openBtn3 = document.getElementById('openPopupBtn3');
    const closeBtn3 = document.querySelector('.close-btn3');

    const popup4 = document.getElementById('projectPopup4');
    const openBtn4 = document.getElementById('openPopupBtn4');
    const closeBtn4 = document.querySelector('.close-btn4');

    const popup5 = document.getElementById('projectPopup5');
    const openBtn5 = document.getElementById('openPopupBtn5');
    const closeBtn5 = document.querySelector('.close-btn5');

    const popup6 = document.getElementById('projectPopup6');
    const openBtn6 = document.getElementById('openPopupBtn6');
    const closeBtn6 = document.querySelector('.close-btn6');

    // When the user clicks the button, open the modal
    openBtn1.onclick = function() {
      popup1.style.display = "block";
    }

    // When the user clicks on the close button, close the modal
    closeBtn1.onclick = function() {
      popup1.style.display = "none";
    }

    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
      if (event.target == popup1) {
        popup1.style.display = "none";
      }
    }
    // When the user clicks the button, open the modal
    openBtn2.onclick = function() {
      popup2.style.display = "block";
    }

    // When the user clicks on the close button, close the modal
    closeBtn2.onclick = function() {
      popup2.style.display = "none";
    }

    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
      if (event.target == popup2) {
        popup2.style.display = "none";
      }
    }

    // When the user clicks the button, open the modal
    openBtn3.onclick = function() {
      popup3.style.display = "block";
    }

    // When the user clicks on the close button, close the modal
    closeBtn3.onclick = function() {
      popup3.style.display = "none";
    }

    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
      if (event.target == popup3) {
        popup3.style.display = "none";
      }
    }

    // When the user clicks the button, open the modal
    openBtn4.onclick = function() {
      popup4.style.display = "block";
    }

    // When the user clicks on the close button, close the modal
    closeBtn4.onclick = function() {
      popup4.style.display = "none";
    }

    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
      if (event.target == popup4) {
        popup4.style.display = "none";
      }
    }

      // When the user clicks the button, open the modal
      openBtn5.onclick = function() {
        popup5.style.display = "block";
      }
  
      // When the user clicks on the close button, close the modal
      closeBtn5.onclick = function() {
        popup5.style.display = "none";
      }
  
      // When the user clicks anywhere outside the modal, close it
      window.onclick = function(event) {
        if (event.target == popup5) {
          popup5.style.display = "none";
        }
      }
    // When the user clicks the button, open the modal
    openBtn6.onclick = function() {
      popup6.style.display = "block";
    }

    // When the user clicks on the close button, close the modal
    closeBtn6.onclick = function() {
      popup6.style.display = "none";
    }

    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
      if (event.target == popup6) {
        popup6.style.display = "none";
      }
    }

    


