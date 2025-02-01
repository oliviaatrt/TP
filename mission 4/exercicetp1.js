// 1) Fonction myPutStr
function myPutStr(input) {
    if (typeof input === 'string') {
        return input;
    } else if (typeof input === 'number') {
        return "et pourquoi pas 42 ?";
    } else {
        return false;
    }
}

// 2) Fonction computeSurfaceM2
function computeSurfaceM2(longueur, largeur) {
    return longueur * largeur;
}

// 3) Fonction detectMyAgeByNight
function detectMyAgeByNight() {
    let age = parseInt(document.getElementById("ageInput").value);
    let message;

    if (age >= 42) {
        message = "Félicitations ! Vous êtes le patron de la boîte !";
    } else if (age >= 18) {
        message = `Vous pouvez entrer, vous êtes majeur, vous avez ${age} ans.`;
    } else {
        message = `Vous ne pouvez pas entrer, vous n'êtes pas majeur, vous avez ${age} ans.`;
    }

    alert(message);
}

// 4) Fonction matrixGenerator
function matrixGenerator(matrix) {
    let container = document.getElementById("matrixContainer");
    let table = document.createElement("table");

    for (let row of matrix) {
        let tr = document.createElement("tr");
        for (let cell of row) {
            let td = document.createElement("td");
            td.innerText = cell;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.innerHTML = "";
    container.appendChild(table);
}

// 5) Horloge numérique
function digitalClock() {
    function updateClock() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
}

// Événements et exécution
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("checkAgeButton").addEventListener("click", detectMyAgeByNight);
    digitalClock();

    let sampleMatrix = [
        [1, 1, 1, 1, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 1, 1]
    ];
    matrixGenerator(sampleMatrix);
});
