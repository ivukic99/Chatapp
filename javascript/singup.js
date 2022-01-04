const form = document.querySelector(".singup form");
const continueBtn = document.querySelector(".button input")
const errorText = document.querySelector(".error-txt")

continueBtn.onclick = (e) => {
    e.preventDefault(); //imputed data stay in form
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/singup.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                if (data == "success") {
                    location.href = "users.php";
                } else {
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);

}