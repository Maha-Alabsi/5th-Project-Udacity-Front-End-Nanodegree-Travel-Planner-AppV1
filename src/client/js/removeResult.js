//related to styling the UI
const cityName = document.getElementById("city");
const welcoming = document.getElementById("welcoming");
const result = document.getElementById("result-container");
let getDate = document.getElementById("date");
const removeSave = document.getElementById("saved-box");


function removeResult() {
    result.style.display = "none";
    welcoming.style.display = "block";
    cityName.value = "";
    getDate.value = "";
}


function removeSavedItem() {
    removeSave.style.display="none"
}
export {
    removeResult,
    removeSavedItem
};