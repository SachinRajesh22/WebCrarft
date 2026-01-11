function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username === "" || password === "") {
        message.textContent = "Please fill all fields";
        return false;
    }

    // Dummy login check
    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }

    return false; // prevent page refresh
}
