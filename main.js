/* Eye Icon Logic 
   - Finds the input field associated with the icon.
   - Toggles type between 'password' and 'text'.
   - Toggles the icon class between 'fa-eye' and 'fa-eye-slash'.
*/

function togglePassword(inputId, iconElement) {
    const passwordInput = document.getElementById(inputId);
    const icon = iconElement.querySelector('i');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}