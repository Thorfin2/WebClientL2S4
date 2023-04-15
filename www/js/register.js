
var register = function () {

    var verify = [false, false, false, false, false, false];

    verifySubmit();

    let last_name = document.getElementById('last_name');
    let first_name = document.getElementById('first_name');
    let birth_date = document.getElementById('birth_date');
    let user_name = document.getElementById('user_name');
    let user_pwd = document.getElementById('user_pwd');
    let user_email = document.getElementById('user_email');

    last_name.addEventListener("input", verifyLast_name);
    first_name.addEventListener("input", verifyFirst_name);
    birth_date.addEventListener("input", verifyBirthdate);
    user_name.addEventListener("input", verifyUsername);
    user_pwd.addEventListener("input", verifyUserPwd);
    user_email.addEventListener("input", verifyUserEmail);



    function verifyLast_name() {
        let vari = document.getElementById('last_name');
        let error = document.getElementById('lastnamerror');
        if (vari.value != "") {
            vari.style.borderColor = "green";
            error.innerHTML = ""
            verify[0] = true;
        } else {
            vari.style.borderColor = "red";
            error.innerHTML = "ne peut être vide"
            verify[0] = false;
        }
        verifySubmit();
    }

    function verifyFirst_name() {
        let vari = document.getElementById('first_name');
        let error = document.getElementById('firstnamerror');
        if (vari.value != "") {
            vari.style.borderColor = "green";
            error.innerHTML = ""
            verify[1] = true;
        } else {
            vari.style.borderColor = "red";
            error.innerHTML = "ne peut être vide"
            verify[1] = false;
        }
        verifySubmit();
    }

    function verifyBirthdate() {
        let vari = document.getElementById('birth_date');
        let error = document.getElementById('birtherror');
        let str = vari.value;
        if (str.length > 0) {
            var parts = str.split("/");
            var valid = false
            if (parts.length == 3) {
                var year = parseInt(parts[2])
                var month = parseInt(parts[1])
                var day = parseInt(parts[0])
                if (year && month && day) {
                    var date = new Date(year, month - 1, day);
                    //var date = new Date(str);
                    console.log(date);
                    if (date) {
                        if (date.getTime() < Date.now() && year > 1900 && year < 2015) {
                            valid = true;
                        }
                    }
                }
            }
        }
        else { valid = true }
        vari.style.borderColor = valid ? "green" : "red";
        error.innerHTML = valid ? "" : "doit contenir une date valide"
        verify[2] = valid;

        verifySubmit();
    }

    function verifyUsername() {
        let vari = document.getElementById('user_name');
        let error = document.getElementById('usererror');
        if (vari.value.length > 5) {
            vari.style.borderColor = "green";
            error.innerHTML = ""
            verify[3] = true;
        } else {
            vari.style.borderColor = "red";
            error.innerHTML = "You need at least 6 characters !"
            verify[3] = false;
        }
        verifySubmit();
    }

    function verifyUserPwd() {
        let vari = document.getElementById('user_pwd');
        let error = document.getElementById('passerror');
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (regex.test(vari.value)) {
            vari.style.borderColor = "green";
            error.innerHTML = ""
            verify[4] = true;
        } else {
            vari.style.borderColor = "red";
            console.log(error.innerHTML);
            error.innerHTML = "<div>* Au moins huit caractères</div> <div>* Une majuscule,</div><div>* Une minuscule,</div><div>*Au moins un chiffre</div>"
            verify[4] = false;
        }
        verifySubmit();
    }

    function verifyUserEmail() {
        let vari = document.getElementById('user_email');
        let error = document.getElementById('emailerror');
        const regex = /[\w.-]+@[\w-]+\.\w{2,6}/;

        if (regex.test(vari.value)) {
            vari.style.borderColor = "green"
            error.innerHTML = ""
            verify[5] = true;
        } else {
            vari.style.borderColor = "red"
            error.innerHTML = "doit être une adresse email valide"
            verify[5] = false;
        }
        verifySubmit();
    }

    function verifySubmit() {
        let ex = true;
        verify.forEach(element => {
            if (!element) {
                ex = false;
            }
        });

        if (ex) {
            document.getElementById('button_submit').disabled = false;
        } else {
            document.getElementById('button_submit').disabled = true;
        }
    }
};

register();


//privatedefault