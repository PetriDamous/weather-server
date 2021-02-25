const weahterForm = document.getElementById("weather-form");

weahterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;

    fetch(`http://localhost:3000/weather?address=${searchValue}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error);    
            }

            console.log(data);
        });    
    });
});