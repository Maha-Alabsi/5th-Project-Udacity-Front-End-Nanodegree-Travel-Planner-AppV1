const saveTrip = document.getElementById("saved-trip");
const result = document.getElementById("result-container");
const welcoming = document.getElementById("welcoming");
let getDate = document.getElementById("date");

function saveResult() {
  saveTrip.style.display = "block";
  result.style.display = "block";
  welcoming.style.display = "none";
  // Create the saved box outline
  let createSave = document.createElement("div");

  let createsaveId = document.createAttribute("id");
  createsaveId.value = "saved-box";
  createSave.setAttributeNode(createsaveId);

  let createpicId = document.createAttribute("id");
  createpicId.value = "pic";
  let createpicDiv = document.createElement("div");
  createpicDiv.setAttributeNode(createpicId);

  let createDataHolderId = document.createAttribute("id");
  createDataHolderId.value = "dataHolder";
  let createDataHolderDiv = document.createElement("div");
  createDataHolderDiv.setAttributeNode(createDataHolderId);

  let createButtonId = document.createAttribute("id");
  createButtonId.value = "res-btn";
  let createButtonDiv = document.createElement("div");
  createButtonDiv.setAttributeNode(createButtonId);

  //dataHolder divs
  /*---------main sentence-----------*/
  let createmainId = document.createAttribute("id");
  createmainId.value = "main-sentence";
  let createmainDiv = document.createElement("div");
  createmainDiv.setAttributeNode(createmainId);
  //name
  let createNameId = document.createAttribute("id");
  createNameId.value = "name";
  let createnameDiv = document.createElement("div");
  createnameDiv.setAttributeNode(createNameId);
  //date
  let createDateId = document.createAttribute("id");
  createDateId.value = "date2";
  let createdateDiv = document.createElement("div");
  createdateDiv.setAttributeNode(createDateId);
  createdateDiv.innerHTML = getDate.value;

  //append main sentence divs
  createmainDiv.append(createnameDiv, createdateDiv);
  /*Weather Header*/
  let createhead = document.createElement("p");
  createhead.innerHTML = "Typical Weather:";
  /*---------Weather Data-----------*/
  let createWeatherId = document.createAttribute("id");
  createWeatherId.value = "weather-data";
  let createWeatherDiv = document.createElement("div");
  createWeatherDiv.setAttributeNode(createWeatherId);

  let createTempId = document.createAttribute("id");
  createTempId.value = "temp";
  let createTempDiv = document.createElement("div");
  createTempDiv.setAttributeNode(createTempId);

  let createWindId = document.createAttribute("id");
  createWindId.value = "wind";
  let createWindDiv = document.createElement("div");
  createWindDiv.setAttributeNode(createWindId);

  let createIconDesId = document.createAttribute("id");
  createIconDesId.value = "icon-des";
  let createIconDesDiv = document.createElement("div");
  createIconDesDiv.setAttributeNode(createIconDesId);

  let createIconId = document.createAttribute("id");
  createIconId.value = "icon";
  let createIconDiv = document.createElement("div");
  createIconDiv.setAttributeNode(createIconId);

  let createDesId = document.createAttribute("id");
  createDesId.value = "des";
  let createDesDiv = document.createElement("div");
  createDesDiv.setAttributeNode(createDesId);

  createIconDesDiv.append(createIconDiv, createDesDiv);
  createWeatherDiv.append(createTempDiv, createWindDiv, createIconDesDiv);

  //append dataholder divs(maindata,weatherdata)
  createDataHolderDiv.append(createmainDiv, createhead, createWeatherDiv);

  //Button divs
  let createRemoveId = document.createAttribute("id");
  createRemoveId.value = "remove2";
  let createRemovebtn = document.createElement("button");
  createRemovebtn.setAttributeNode(createRemoveId);
  createRemovebtn.innerHTML = "remove";

  let createNoteId = document.createAttribute("id");
  createNoteId.value = "note";
  let createNotebtn = document.createElement("button");
  createNotebtn.setAttributeNode(createNoteId);
  createNotebtn.innerHTML = "add note";

  //append button divs
  createButtonDiv.append(createRemovebtn, createNotebtn);

  //append the main 3 Divs
  createSave.append(createpicDiv, createDataHolderDiv, createButtonDiv);

  saveTrip.appendChild(createSave);
}

export { saveResult };
