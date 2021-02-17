
const cityName = document.getElementById("city");
const button = document.getElementById("generate");
const welcoming = document.getElementById("welcoming");
const result = document.getElementById("result-container");
const remove = document.getElementById("remove");
let getDate = document.getElementById("date");

  //Date configuration
  let todayDate = new Date();
  //Convert todayDate from full format into ISO format yyyy-mm-dd to be compatible with (Date input field-value)
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1; //Js consider monthes from 0-11
  let year = todayDate.getFullYear();
  let newTodayDate = "";
  
  if (day <= 10) {
    day = '0' + day;
  } else if (month <= 10) {
    month = '0' + month;
  }
newTodayDate = `${year}-${month}-${day}`;
  
if (getDate != null) {
  getDate.setAttribute('min', newTodayDate);
}
if (button != null) {

  // Event listener to add function to existing HTML DOM element
  button.addEventListener("click", performAction);
}

  function performAction(e) {
    e.preventDefault();
    let newCity = cityName.value;
    let userDate = getDate.value;
    document.getElementById("date2").innerHTML = `Date: ${userDate} `;
    //Calculate the difference in days between the current date and the user input date  
    let Difference_In_Time = Math.abs(
      new Date(userDate) - new Date(newTodayDate)
    );
    // To calculate the no. of days between two dates
    let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    welcoming.style.display = "none";
    result.style.display = "block";

    /*Post data to the server side 
    * Used these data when calling an API 
    * Save all returned data form APIs at endpoint variable
    * Update UI with the saved data 
    */
    postData("http://localhost:8081/addEndData", { cityName: newCity , date: Difference_In_Days})
      .then(function (data) {
        updateUI(data);
    })
    .catch(function (codeError) {
      //return an error if there is any problem in posting data to server or updating the UI
      if (codeError.cod != 200) {
        return alert("This City is not found");
      }
    })
  //related to styling the UI
  if (result.style.display == "block") {
    document.querySelector("footer").style.display = "none";
  }
}

//Function to POST data 
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//Function to Update the UI
function updateUI(data){
    document.getElementById("name").innerHTML = `${data.cityCountry.countryName}/${data.cityCountry.name} is ${data.appDate.date} days away`;
    document.getElementById("pic").innerHTML = `<img src=${data.imgData.webformatURL}>`;
    document.getElementById("temp").innerHTML = `Temperature: ${data.weatherData.temp}°C`;
    document.getElementById("wind").innerHTML = `Wind: ${data.weatherData.wind_dir}`;
    document.getElementById("des").innerHTML = `${data.weatherData.weather.description}`;
    document.getElementById("icon").innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${data.weatherData.weather.icon}.png" alt="icon not found">`;
}

//related to styling the UI
if (remove != null) {
  result.addEventListener("click", removeResult);
}
function removeResult() {
  result.style.display = "none";
  welcoming.style.display = "block";
  cityName.value = "";
  getDate.value = "";
}

export { removeResult };
export { performAction };







































































































































































































































































































































































































































































































































































































































































































































































































































































       


