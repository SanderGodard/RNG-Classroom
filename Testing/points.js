userArray = sessionStorage.getItem("usersList").split(",");

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
    usersDiv = document.getElementById("users");
    for (var index = 0; index < (userArray.length - 1); index++) {
        var user = userArray[index];

        var userDiv = document.createElement("div");
        userDiv.setAttribute("class", "user");
        userDiv.setAttribute("id", "user" + index);
        userDiv.innerHTML = user;

        var plusBtn = document.createElement("button")
        plusBtn.setAttribute("class", "plusBtn");
        plusBtn.setAttribute("onclick", "addPoint(" + index + ")");
        plusBtn.innerHTML = "+"

        var minusBtn = document.createElement("button")
        minusBtn.setAttribute("class", "minusBtn");
        minusBtn.setAttribute("onclick", "remPoint(" + index + ")");
        minusBtn.innerHTML = "-"

        var pointCounter = document.createElement("div");
        pointCounter.setAttribute("id", "point" + index);

        var points = sessionStorage.getItem("pointsArray");
        pointsArray = points.split(",");

        console.log(pointsArray[index]);
        if (pointsArray[index]) {
            pointCounter.innerHTML = pointsArray[index];
        } else {
            pointCounter.innerHTML = 0;
            setPoint(index, 0);

        }

        userDiv.appendChild(plusBtn);
        userDiv.appendChild(minusBtn);
        userDiv.appendChild(pointCounter);
        userDiv.appendChild(document.createElement("br"));
        usersDiv.appendChild(userDiv);
    }
};

function addPoint(userId) {
    var pointCounter = document.getElementById("point" + userId);
    count = parseInt(pointCounter.innerHTML);
    count++;
    pointCounter.innerHTML = count;
    setPoint(userId, count);
}

function remPoint(userId) {
    var pointCounter = document.getElementById("point" + userId);
    count = parseInt(pointCounter.innerHTML);
    count = count - 1;
    pointCounter.innerHTML = count;
    setPoint(userId, count);
}