function showSectonById(id){
    // hide all the sections
    document.getElementById('donation-section').classList.add("hidden");
    document.getElementById('history-section').classList.add("hidden");
    // show the section by id
    document.getElementById(id).classList.remove("hidden");
}