const form = document.querySelector(".typing-area"),
    inputField = form.querySelector(".input-field"),
    sendBtn = form.querySelector("button");
chatBox = document.querySelector(".chat-box")

form.onsubmit = (e) => {
    e.preventDefault();
}
sendBtn.onclick = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                inputField.value = "";
            }
        }
    }
    let formData = new FormData(form); //creating new FormData Object
    xhr.send(formData); //sending the form data to php
}

setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                chatBox.innerHTML = data;
            }
        }
    }
    let formData = new FormData(form); //creating new FormData Object
    xhr.send(formData);
}, 500)