const weahterForm = document.getElementById("weather-form");
const searchInput = document.getElementById("search__input");
const searchBox = document.getElementById("search__box");
const searchClear = document.getElementById("search__clear");

const weatherInfo = document.getElementById("weather-info");
const placeHolder = document.getElementById("place-holder");
const time = document.getElementById("time");
const tempData = document.getElementById("temp");
const descripData= document.getElementById("description");
const feelsLike = document.getElementById("feels");
const precipData = document.getElementById("precipitation");
const humidData = document.getElementById("humidity");
const windData = document.getElementById("wind");
const locationData = document.getElementById("location");

// Search Box
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


// Weather

const weatherInfoArray = [descripData, feelsLike, humidData, locationData, precipData, tempData, windData];

const renderData = ({des_1, feelslike, humidity, location, precip, temp, wind_speed}) => {
    const weatherValueArray = [des_1, feelslike, humidity, location, precip, temp, wind_speed];

    weatherInfoArray.forEach((elm, idx) => {
        elm.innerText = weatherValueArray[idx];
    });

    placeHolder.style.display = "none";
    weatherInfo.style.display = "block";
};

weahterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;

    fetch(`/weather?address=${searchValue}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error);    
            } 

            renderData(data);
        });    
    });
});