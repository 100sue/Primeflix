// Add event on multiple elements :

const addEventOneElements = function (elements, eventType, callback) {
    for(const elem of elements) elem.addEventListener(eventType, callback);
}

// Toggle Search Box in mobile device (small sceen) :

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");
addEventOneElements(searchTogglers, "click", function () {
    searchBox .classList.toggle('active');
});