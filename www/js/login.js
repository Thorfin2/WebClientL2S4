
var login = function () {

    var username = document.getElementById("user_name").value;
    var pwd = document.getElementById("user_pwd").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../htbin/login.py', true);

    //Envoie les informations du header adaptées avec la requête
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let n = document.getElementById("result");
            console.log(xhr.responseText);
            n.textContent = xhr.responseText;
            n.style.color = "red";
            if (xhr.responseText.startsWith("Bonjour")) {
                n.style.color = "green";
                localStorage.setItem("username",username);
                localStorage.setItem("fullname",xhr.responseText.replace("Bonjour",""));
                setTimeout(() => {
                    window.location.replace("../index.html");
                }, 3000);

            }

        }
    }

    xhr.send("username=" + username + "&userpwd=" + pwd);
};


var form = document.getElementById("Loginform");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
}, true);

