if (sessionStorage.getItem("pointsArray") !== null) {
    sessionStorage.removeItem("pointsArray");
}

function addUsers(antUsers) {
    var form = document.getElementById("addUsersForm")
    var button = document.getElementById("addUsersButton");
    var remButton = document.getElementById("remUsersButton");
    var newInput = document.createElement("input");

    newInput.setAttribute("id", "u" + antUsers);
    newInput.setAttribute("name", "u" + antUsers);
    newInput.setAttribute("class", "inputUsers");
    button.setAttribute("onclick", "addUsers(" + (antUsers + 1) + ")");

    form.insertBefore(newInput, button);

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

    var remButton = document.getElementById("remUsersButton");
    var addButton = document.getElementById("addUsersButton");
    var input = document.getElementById("u" + antUsers);

    input.remove();

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

    /* for (let index = 0; index < users.length; index++) {
        var input = users[index];
        var userName = input.value;
        if (userName) {
            if (x == 0) {
                usersList += userName;
            } else {
                usersList += "," + userName;
            }
            console.log(x);
            x++;
        }
    } */

    form.remove();
    window.location.href = "game.html";
}