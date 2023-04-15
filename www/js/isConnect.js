
var xhr = new XMLHttpRequest();
xhr.open("post", '../htbin/chatsend.py', true);

//Envoie les informations du header adaptées avec la requête
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { //Appelle une fonction au changement d'état.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
    {
        const res = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        if(res.num === 0)
        {
            let ul = document.getElementById('nav');
            let last = ul.removeChild(ul.lastElementChild);
            let last2 = ul.removeChild(ul.lastElementChild);
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = "../html/app.html";
            a.textContent = "Applications";
            li.appendChild(a);
            ul.appendChild(li);
            ul.appendChild(last);
            ul.appendChild(last2);
        }
    }
}
xhr.send("msg= ");

