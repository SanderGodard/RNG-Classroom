input = document.createElement("input");
btn = document.getElementById("addUserBtn");
div = document.getElementById("users");

function addUsers(userId) {

    input.setAttribute("id", "addUserInput");
    document.getElementById("users-flex").insertBefore(input, btn);

    btn.innerHTML = "Legg til";
    btn.setAttribute("onclick", "newUser(" + userId + ")");
}

function newUser(userId) {
    var userName = input.value
    if (userName) {
        userObj = {
            name: userName,
            value: 1,
            text: "Gratulerer " + userName,
            points: 0
        };
        userArray = JSON.parse(sessionStorage.getItem("usersList"));
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

}

function remUser(userId) {
    userArray = JSON.parse(sessionStorage.getItem("usersList"));
    userArray.splice(userId, 1);
    userJson = JSON.stringify(userArray);
    sessionStorage.setItem("usersList", userJson);
    document.location.reload();
}