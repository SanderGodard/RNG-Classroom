input = document.createElement("input");
btn = document.getElementById("addUserBtn");
div = document.getElementById("users");

function addUsers(userId) {

    input.setAttribute("id", "addUserInput");
    input.addEventListener('focus', (event) => {
        document.body.onkeyup = function (e) {
            if (e.keyCode == 13) {
                newUser();
            }
        }
    });
    document.getElementById("users-flex").insertBefore(input, btn);

    btn.innerHTML = "Legg til";
    btn.setAttribute("onclick", "newUser(" + userId + ")");
    input.focus();
}

function newUser(userId) {
    userName = input.value
    userArray = JSON.parse(sessionStorage.getItem("usersList"));

    function checkName(array) {
        if (array.name.toLowerCase() == userName.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    if (userArray.filter(checkName).length == 0) {

        if (userName) {
            userObj = {
                name: userName,
                value: 1,
                text: "Gratulerer " + userName,
                points: 0
            };
            userArray.push(userObj);
            userJson = JSON.stringify(userArray);

            sessionStorage.setItem("usersList", userJson);

            input.remove();

            btn.innerHTML = "Flere som vil slite";
            btn.setAttribute("onclick", "addUsers(" + (userArray.length) + ")");
            document.location.reload();

        } else {
            window.alert("Wallah gjør det ordentlig a");
        }
    } else {
        window.alert("Den finnes fra før, skjerp deg");
        input.focus();
    }

}

function remUser(userId) {
    userArray = JSON.parse(sessionStorage.getItem("usersList"));
    userArray.splice(userId, 1);
    if (userArray.length == 0) {
        alert("Du må legge til en bruker først, kan ikke være null");
        return;
    }
    userJson = JSON.stringify(userArray);
    sessionStorage.setItem("usersList", userJson);
    document.location.reload();
}

function editUser(userId) {
    var div = document.getElementById("user" + userId);
    var userName = JSON.parse(sessionStorage.getItem("usersList"))[userId].name;

    var editInput = document.createElement("input");
    var changeBtn = document.getElementById("editUser" + userId);

    changeBtn.setAttribute("onclick", "changeUser(" + userId + ")");
    changeBtn.innerHTML = "Endre";

    editInput.setAttribute("value", userName);
    editInput.setAttribute("id", "editUser" + userId);
    editInput.style.color = "black";
    editInput.style.width = "100%";


    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    div.appendChild(editInput);

    editInput.addEventListener('focus', (event) => {
        document.body.onkeyup = function (e) {
            if (e.keyCode == 13) {
                changeUser(userId);
            }
        }
    });
    editInput.focus();
}

function changeUser(userId) {
    var editInput = document.getElementById("editUser" + userId);
    var userArray = JSON.parse(sessionStorage.getItem("usersList"));
    userArray[userId].name = editInput.value;
    userArray[userId].text = "Gratulerer " + editInput.value;
    userString = JSON.stringify(userArray);
    sessionStorage.setItem("usersList", userString);
    document.location.reload();
}