const searchBar = document.querySelector(".users .search input");
searchBtn = document.querySelector(".users .search button");
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = () => {
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
    searchBar.value = "";
}

searchBar.onkeyup = () => {
    let serachTerm = searchBar.value;
    if (serachTerm != "") {
        searchBar.classList.add('active');
    } else {
        searchBar.classList.remove('active');
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/search.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                // console.log(data);
                usersList.innerHTML = data;
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + serachTerm);

}

setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "php/users.php", true);
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                // console.log(data);
                if (!searchBar.classList.contains('active')) {
                    usersList.innerHTML = data;
                }
            }
        }
    }
    xhr.send();
}, 500)