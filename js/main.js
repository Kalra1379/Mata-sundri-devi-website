function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}



$(function () {

    $('#show').on('click', function () {
        $('.card-reveal').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function () {
        $('.card-reveal').slideToggle('slow');
    });
});


$(document).ready(function () {
    pagenum = 1;
    function AutoRotate() {
        var myele = null;
        var allElements = document.getElementsByTagName('label');
        for (var i = 0, n = allElements.length; i < n; i++) {
            var myfor = allElements[i].getAttribute('for');
            if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
                allElements[i].click();
                break;
            }
        }
        if (pagenum == 4) {
            pagenum = 1;
        } else {
            pagenum++;
        }
    }
    setInterval(AutoRotate, 5000);
});


function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}





//SCROLL ANIMATE
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}



// var myVar;

// function myLoader() {
//     myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myPage").style.display = "block";
// }


const items = document.querySelectorAll('.item'),
    controls = document.querySelectorAll('.control'),
    headerItems = document.querySelectorAll('.item-header'),
    descriptionItems = document.querySelectorAll('.item-description'),
    activeDelay = .76,
    interval = 5000;

let current = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', e => { slider.clickedControl(e); }));
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    nextSlide: () => {// Increment current slide and add active class
        slider.reset();
        if (current === items.length - 1) current = -1; // Check if current slide is last in array
        current++;
        controls[current].classList.add('active');
        items[current].classList.add('active');
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
    },
    clickedControl: e => {// Add active class to clicked control and corresponding slide
        slider.reset();
        clearInterval(intervalF);

        const control = e.target,
            dataIndex = Number(control.dataset.index);

        control.classList.add('active');
        items.forEach((item, index) => {
            if (index === dataIndex) {// Add active class to corresponding slide
                item.classList.add('active');
            }
        });
        current = dataIndex; // Update current slide
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
        intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
    },
    reset: () => {// Remove active classes
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    transitionDelay: items => {// Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
        let seconds;

        items.forEach(item => {
            const children = item.childNodes; // .vertical-part(s)
            let count = 1,
                delay;

            item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

            children.forEach(child => {// iterate through .vertical-part(s) and style b element
                if (child.classList) {
                    item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
                    child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
                    count++;
                }
            });
        });
    }
};
let intervalF = setInterval(slider.nextSlide, interval);
slider.init();



function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

// var myVar;
// function myLoader() {
//     myVar = setTimeout(showPage, 3000);
// }
// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
// }





//SCROLL ANIMATE
var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}
loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}




//SCROLL ANIMATE
var scroll2 = window.requestAnimationFrame ||
    function (callback2) { window.setTimeout(callback2, 1000 / 60) };
var elementsToShow2 = document.querySelectorAll('.show-on-scroll2');
function loop2() {

    Array.prototype.forEach.call(elementsToShow2, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible2');
        } else {
            element.classList.remove('is-visible2');
        }
    });

    scroll2(loop2);
}
loop2();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect2 = el.getBoundingClientRect();
    return (
        (rect2.top <= 0
            && rect2.bottom >= 0)
        ||
        (rect2.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect2.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect2.top >= 0 &&
            rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}



//SCROLL ANIMATE
var scroll3 = window.requestAnimationFrame ||
    function (callback3) { window.setTimeout(callback3, 1000 / 60) };
var elementsToShow3 = document.querySelectorAll('.show-on-scroll3');
function loop3() {

    Array.prototype.forEach.call(elementsToShow3, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible3');
        } else {
            element.classList.remove('is-visible3');
        }
    });

    scroll3(loop3);
}
loop3();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect3 = el.getBoundingClientRect();
    return (
        (rect3.top <= 0
            && rect3.bottom >= 0)
        ||
        (rect3.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect3.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect3.top >= 0 &&
            rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}




//SCROLL MENU
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.top = "0";
        // document.getElementById("scroll-up").style.display = "block";
    } else {
        document.getElementById("navbar").style.top = "-90px";
        // document.getElementById("scroll-up").style.display = "none";
    }
}


//NAVIGATION
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(function () {
    $(document).on('click', '.btn', function (e) {
        $(this).boom(e);
    });

});