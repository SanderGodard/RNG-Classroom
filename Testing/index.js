if (sessionStorage.getItem("pointsArray") !== null) {
    sessionStorage.removeItem("pointsArray");
}

function addUsers(antUsers) {
    var div = document.getElementById("users");
    var remButton = document.getElementById("remUsersButton");
    var form = document.getElementById("addUsersForm")
    var button = document.getElementById("addUsersButton");
    var newInput = document.createElement("input");

    newInput.setAttribute("id", "u" + antUsers);
    newInput.setAttribute("name", "u" + antUsers);
    newInput.setAttribute("class", "inputUsers");
    button.setAttribute("onclick", "addUsers(" + (antUsers + 1) + ")");

    div.appendChild(newInput);
    div.appendChild(document.createElement("br"));

    newInput.focus();

    if (antUsers < 2) {
        var remButton = document.createElement("button");
        remButton.setAttribute("type", "button");
        remButton.setAttribute("id", "remUsersButton");
        remButton.innerHTML = "Fjern deltager";
        remButton.setAttribute("onclick", "remUsers(" + (antUsers) + ")");
        var startButton = document.getElementById("startGame");
        form.insertBefore(remButton, startButton);
    } else {
        remButton.setAttribute("onclick", "remUsers(" + (antUsers) + ")");
    }
}

function remUsers(antUsers) {
    var div = document.getElementById("users");
    var remButton = document.getElementById("remUsersButton");
    var addButton = document.getElementById("addUsersButton");
    var input = document.getElementById("u" + antUsers);

    input.remove();
    div.removeChild(div.childNodes[(div.childNodes.length - 2)]);


    antUsers = antUsers - 1;
    if (antUsers < 1) {
        remButton.remove();
        addButton.setAttribute("onclick", "addUsers(" + (antUsers + 1) + ")");
    } else {
        remButton.setAttribute("onclick", "remUsers(" + (antUsers) + ")");
        addButton.setAttribute("onclick", "addUsers(" + (antUsers + 1) + ")");
    }
}

function startGame(i) {
    var form = document.getElementById("addUsersForm");
    var users = document.getElementsByClassName("inputUsers");
    var usersArray = Array();

    for (let index = 0; index < users.length; index++) {
        var input = users[index];
        var userName = input.value;
        if (userName) {
            var userObject = {
                name: userName,
                value: 1,
                text: "Gratulerer " + userName,
                points: 0
            };
            usersArray.push(userObject);
        }
    }
    usersJson = JSON.stringify(usersArray);
    sessionStorage.setItem("usersList", usersJson);

    form.remove();
    if (usersArray.length) {
        window.location.href = "game.html";
    } else {
        alert("Er du dom elle?")
        document.location.reload();
    }
}