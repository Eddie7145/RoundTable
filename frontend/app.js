const searchBox = document.getElementById("search-box");
const searchIcon = document.getElementById("searchIcon");

searchIcon.onclick = function(){
    searchBox.classList.toggle("active");
};

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function sendEmail(){
let email = document.getElementById("userEmail").value;
let finalmessage = `Hey ${email} Welcome to the RoundTable <br> Your event has been booked and your ticket ID will be sent to you shortly `;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "amaachukwuchizzy@gmail.com",
    Password : "CCBCDE17F0D1DD051407AD3C9B86C390B8E9",
    To : email,
    From : "amaachukwuchizzy@gmail.com",
    Subject : "This is the subject",
    Body : finalmessage,
}).then(
  message => alert(message)
);
}