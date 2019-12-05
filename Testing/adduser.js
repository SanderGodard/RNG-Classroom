input = document.createElement("input");
btn = document.getElementById("addUserBtn");
div = document.getElementById("users");

function addUsers(userId) {

    input.setAttribute("id", "addUserInput");
    div.appendChild(input);

    btn.innerHTML = "Legg til";
    btn.setAttribute("onclick", "newUser(" + userId + ")");
}

function newUser(userId) {
    userName = input.value
    if (userName) {
        userArray = sessionStorage.getItem("usersList").split(",");
        userArray.push(userName);
        string = userArray.toString();

        sessionStorage.setItem("usersList", string)

        input.remove();

        btn.innerHTML = "Flere som vil slite";
        btn.setAttribute("onclick", "addUsers(" + (userArray.length) + ")");
        document.location.reload();

    } else {
        window.alert("Wallah gjør det ordentlig a");
    }

}