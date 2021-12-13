/* get buutons */
let meanButton = document.getElementById("meanButton");
let medianButton = document.getElementById("medianButton");
let modeButton = document.getElementById("modeButton");
let userInput = document.getElementById("user")

/* add event listeners */
meanButton.addEventListener("click",meanRequest);
medianButton.addEventListener("click",medianRequest);
modeButton.addEventListener("click",modeRequest);

function meanRequest(){
    /*make call to api to get mean , process result*/

}
function medianRequest(){
    /*make call to api to get median , process result*/
}
function modeRequest(){
    /*make call to api to get mode , process result*/
}
function viewResult(){
    /*update html to show result*/
}