const paswdField = document.querySelector(".form input[type='password']");
toggleBtn = document.querySelector(".form .field i");

toggleBtn.onclick = () => {
    if (paswdField.type == 'password') {
        paswdField.type = 'text';
        toggleBtn.classList.add("active");
    } else {
        paswdField.type = 'password';
        toggleBtn.classList.remove("active");

    }
}