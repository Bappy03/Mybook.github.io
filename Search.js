// JavaScript code 
function search_book() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('books');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}

// Added event listener to the scroll 
window.addEventListener('scroll',
    moveScrollIndicator);

// Getting scrollIndicator element by ID 
const scrollIndicatorElt =
    document.getElementById('scrollIndicator');

// Height of entire web page - height 
// of viewable portion of browser 
const maxHeight =
    window.document.body.scrollHeight -
    window.innerHeight;

function moveScrollIndicator(e) {

    // Calculating width of the  
    // scrollIndicator element 
    const percentage =
        ((window.scrollY) / maxHeight) * 100;

    // Pixels scrolled by the user  
    // to total scrollable Pixels 
    scrollIndicatorElt.style.width = percentage + '%';
}



// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}