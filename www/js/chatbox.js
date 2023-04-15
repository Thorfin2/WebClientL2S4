window.addEventListener('load', function() {getChat();})


var chatbox = function () {

    var msg = document.getElementById("msg").value;

    var xhr = new XMLHttpRequest();
    xhr.open("post", '../htbin/chatsend.py', true);

    //Envoie les informations du header adaptées avec la requête
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const res = JSON.parse(xhr.responseText);
            if (res.num === -1) {
                console.log(xhr.responseText);
                document.getElementById('error').innerHTML = xhr.responseText;
            }
            if (res.num === 0) {
                document.getElementById('chat').innerHTML = "";
                getChat();
            }
            //chat.append(n);
        }
    }

    xhr.send("msg=" + msg);



};

function getChat() {

    var chat = document.getElementById("chat");

    var xhr = new XMLHttpRequest();
    xhr.open("get", '../htbin/chatget.py', true);

    //Envoie les informations du header adaptées avec la requête
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let res = JSON.parse(xhr.responseText);

            for (let i = 0; i < res.length; i++) {
                let zonemessage = document.createElement("div");
                zonemessage.className = "box-message";

                let username = document.createElement('p');
                username.className = "box-username";
                username.textContent = res[i]["user"];

                let date = document.createElement('p');
                date.className = "box-date";
                date.textContent = res[i]["date"];

                let time = document.createElement('p');
                time.className = "box-time";
                time.textContent = res[i]["time"];

                let message = document.createElement('p');
                message.className = "box-message ";
                message.textContent = res[i]["msg"];

                zonemessage.appendChild(username);
                zonemessage.appendChild(date);
                zonemessage.appendChild(time);
                zonemessage.appendChild(message);

                chat.appendChild(zonemessage);
          }
            chat.scrollBy(0, chat.scrollHeight)
            document.getElementById("msg").value=""
        }
    }
    xhr.send();
    console.log("is in");
}
var form = document.getElementById("chatbox");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    chatbox();
}, true);
