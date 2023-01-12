// variables
var bar = document.getElementsByClassName('bar'); 
var links = document.getElementsByClassName('index-link'); 
var navGrid = document.getElementsByClassName('nav-grid'); 
var historyTitle = document.getElementsByClassName('history-title'); 

bar[0].addEventListener('click', function(){

    for (i = 0; i < links.length; i++)
    {
        if (links[i].style.display === "block") {
            links[i].style.display = "none";
            navGrid[0].style.gridTemplateRows = "1fr"; 
            bar[0].innerHTML = "="; 
          } else {
            links[i].style.display = "block";
            navGrid[0].style.gridTemplateRows = "repeat(7, 1fr)"; 
            bar[0].innerHTML = "x"; 
          }
    }
    
})

window.addEventListener('resize', function() {
    if(window.innerWidth > 900) {
        navGrid[0].style.gridTemplateRows = "1fr"; 
        for (i = 0; i < links.length; i++)
        { 
            links[i].style.display = "block";
        } 
    } else {
        for (i = 0; i < links.length; i++)
        { 
            links[i].style.display = "none";
        } 
    }
}, true);

// history section title 
window.addEventListener('resize', function() {
    if(window.innerWidth < 900) {
        historyTitle[0].classList.add('history-item'); 
    } else {
        historyTitle[0].classList.remove('history-item')
    }
}, true);

if(window.innerWidth < 900) {
    historyTitle[0].classList.add('history-item'); 
} else {
    historyTitle[0].classList.remove('history-item')
}





