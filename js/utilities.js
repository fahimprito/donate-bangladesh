function showSectonById(id){
    // hide all the sections
    document.getElementById('donation-section').classList.add("hidden");
    document.getElementById('history-section').classList.add("hidden");
    // show the section by id
    document.getElementById(id).classList.remove("hidden");
}

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNum = parseFloat(inputValue); 
    return inputNum;
}

function getTextValueById(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}

// clear input field 
function clearInputField(id){
    document.getElementById(id).value="";
}