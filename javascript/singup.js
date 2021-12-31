const form = document.querySelector(".singup form");
const continueBtn = document.querySelector(".button input")

continueBtn.onclick = (e) => {
    e.preventDefault(); //imputed data stay in form
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/singup.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                console.log(data);
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);

}