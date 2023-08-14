const searchBox = document.getElementById("search-box");
const searchIcon = document.getElementById("searchIcon");
const bookEvent = document.querySelector("book_event");
const confirmModal = document.querySelector("event_confirm_dim");
const closeModal = document.querySelector("close");

searchIcon.onclick = function(){
    searchBox.classList.toggle("active");
}

function bookevent(){
    if (bookEvent){
        confirmModal.classList.remove("hide");
    } else {
        confirmModal.classList.add("hide");
    }
}