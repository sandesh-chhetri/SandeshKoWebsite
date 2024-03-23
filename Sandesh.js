function showThankYouMessage(event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    var form = document.getElementById("contactForm");
    var message = document.getElementById("thankYouMessage");
    var h1 = document.querySelector("h1");
    var footer = document.querySelector("footer");

    form.style.display = "none";
    message.style.display = "block";
    h1.style.display = "none";
    footer.style.display = "none";
}