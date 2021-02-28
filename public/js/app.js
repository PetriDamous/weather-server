const weahterForm = document.getElementById("weather-form");
const searchInput = document.getElementById("search__input");
const searchBox = document.getElementById("search__box");
const searchClear = document.getElementById("search__clear");

const searchLogo = document.getElementById("search__logo");

const boxShadowSearch = "0 1px 6px rgba(32,33,36,.28)";

searchBox.addEventListener("focusin", e => {
    searchInput.style.boxShadow = boxShadowSearch;
});

searchBox.addEventListener("focusout", e => {
    searchInput.style.boxShadow = "none";
});

searchBox.addEventListener("input", e => {
    searchClear.style.display = e.target.value !== "" ? "block" : "none";
});

searchClear.addEventListener("click", e => {
    searchBox.value = "";
    searchClear.style.display = "none";
});

weahterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;

    fetch(`http://localhost:3000/weather?address=${searchValue}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error);    
            }

            console.log(data)
        });    
    });
});