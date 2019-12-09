if (sessionStorage.getItem("pointsArray") !== null) {
    sessionStorage.removeItem("pointsArray");
}

function checkUsers() {
    var divArray = document.getElementById("users").querySelectorAll("input").length;
    return divArray;
}

function addUsers() {
    var antUsers = checkUsers();
    var div = document.getElementById("users");
    var remButton = document.getElementById("remUsersButton")
    var newInput = document.createElement("input");

    newInput.setAttribute("id", "u" + antUsers);
    newInput.setAttribute("name", "u" + antUsers);
    newInput.setAttribute("class", "inputUsers");

    div.appendChild(newInput);
    div.appendChild(document.createElement("br"));

    newInput.focus();

    console.log(antUsers);
    if (antUsers < 2) {
        remButton.setAttribute("onclick", "remUsers()");
    }
}

function remUsers() {
    var antUsers = (checkUsers() - 1);
    var div = document.getElementById("users");
    var remButton = document.getElementById("remUsersButton");
    var input = document.getElementById("u" + (antUsers));

    console.log(div.childNodes);
    input.remove();
    div.removeChild(div.childNodes[(div.childNodes.length - 2)]);


    antUsers = antUsers - 1;
    if (antUsers < 1) {
        remButton.setAttribute("onclick", "");
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