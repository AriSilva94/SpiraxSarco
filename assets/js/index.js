//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const ano = document.getElementById("ano");
const anoAtual = new Date();

ano.innerHTML = anoAtual.getFullYear();

function handlePageHome(){
  location.href = '../index.html';
}


function handlePageDocumentation(){
    location.href = '../pages/documentation.html';
}

function handlePageTracking(){
  location.href = '../pages/tracking.html';
}

function handlePageFinance(){
    location.href = "../pages/finance.html";
}

function handlePageLibrary(){
    location.href = "https://www.w3schools.com";
}

function handlePageService(){
    location.href = "https://www.w3schools.com";
}

function handlePageECommerce(){
    location.href = "https://www.w3schools.com";
}