

var fullname = localStorage.getItem("fullname")
//if(user==null)window.location.href="../html/login.html"
console.log("fullname = "+fullname);
if (fullname != null) { 

    document.getElementById("loginLink").innerHTML = fullname + " <a onclick='logout();'>logout</a>"; 
}
function logout() {
    localStorage.clear();
    window.location.href = "../index.html"
}