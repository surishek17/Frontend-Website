// Get the button
const backToTopButton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Function to scroll back to the top of the document
function scrollToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
