userArray = JSON.parse(sessionStorage.getItem("usersList"));

function setPoint(id, value) {
    var points = sessionStorage.getItem("pointsArray");
    pointsArray = points.split(",");
    pointsArray[id] = value;
    var pointString = pointsArray.toString();
    sessionStorage.setItem("pointsArray", pointString);
}

if (sessionStorage.getItem("pointsArray") == undefined) {
    var pointsString = "0,"
    sessionStorage.setItem("pointsArray", pointsString);
}


document.body.onload = function () {
    usersDiv = document.getElementById("brukere");
    document.getElementById("addUserBtn").setAttribute("onclick", "addUsers(" + (userArray.length) + ")");
    for (var index = 0; index < (userArray.length); index++) {
        var user = userArray[index];

        var userDiv = document.createElement("div");
        userDiv.setAttribute("class", "user");
        userDiv.setAttribute("id", "user" + index);
        userDiv.innerHTML = user.name;

        var plusBtn = document.createElement("button")
        plusBtn.setAttribute("class", "plusBtn");
        plusBtn.setAttribute("onclick", "addPoint(" + index + ")");
        plusBtn.innerHTML = "+";
        plusBtn.id = "pluss" + index;

        var minusBtn = document.createElement("button")
        minusBtn.setAttribute("class", "minusBtn");
        minusBtn.setAttribute("onclick", "remPoint(" + index + ")");
        minusBtn.innerHTML = "-";
        minusBtn.id = "minus" + index;

        var remUserBtn = document.createElement("button");
        remUserBtn.setAttribute("class", "remUserBtn");
        remUserBtn.setAttribute("onclick", "remUser(" + index + ")");

        remUserBtn.innerHTML = "Fjern";

        var pointCounter = document.createElement("div");
        pointCounter.setAttribute("id", "point" + index);

        var points = user.points;

        pointCounter.innerHTML = points;

        var xDiv = document.createElement("div");
        xDiv.id = "user-rem";
        var yDiv = document.createElement("div");
        yDiv.appendChild(remUserBtn);

        wr = document.createElement("div");
        userDiv.appendChild(pointCounter);
        userDiv.appendChild(wr);
        wr.appendChild(minusBtn);
        wr.appendChild(plusBtn);
        userDiv.appendChild(document.createElement("br"));

        xDiv.appendChild(userDiv);
        xDiv.appendChild(yDiv);
        usersDiv.appendChild(xDiv);
    }
};

function addPoint(userId) {
    var points = userArray[userId].points;
    var pointCounter = document.getElementById("point" + userId);
    points++;
    pointCounter.innerHTML = points;
    userArray[userId].points = points;
    userJson = JSON.stringify(userArray);
    sessionStorage.setItem("usersList", userJson);
    document.getElementById("pluss" + userId).blur();
}

function remPoint(userId) {
  var points = userArray[userId].points;
  var pointCounter = document.getElementById("point" + userId);
  points = points - 1;
  pointCounter.innerHTML = points;
  userArray[userId].points = points;
  userJson = JSON.stringify(userArray);
  sessionStorage.setItem("usersList", userJson);
  document.getElementById("minus" + userId).blur();
}
