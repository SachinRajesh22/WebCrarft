const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const detailsField = document.getElementById("details");

window.onload = () => {
  nameField.value = localStorage.getItem("name") || nameField.value;
  emailField.value = localStorage.getItem("email") || emailField.value;
  detailsField.value = localStorage.getItem("details") || detailsField.value;
};

function editProfile() {
  nameField.disabled = false;
  emailField.disabled = false;
  detailsField.disabled = false;
}

function saveProfile() {
  nameField.disabled = true;
  emailField.disabled = true;
  detailsField.disabled = true;

  localStorage.setItem("name", nameField.value);
  localStorage.setItem("email", emailField.value);
  localStorage.setItem("details", detailsField.value);

  alert("Profile saved!");
}