function plus() {
    var a = Number.parseInt(document.getElementById('invoer1').value);
    var b = Number.parseInt(document.getElementById('invoer2').value);
    var c = check();
    if (check() == true) {
        var resultaat = a + b;
        document.getElementById("resultaat").innerText = resultaat;
    } else{
        document.getElementById("resultaat").innerText = "Vink de checkbox aan wanneer je wilt optellen.";
    }
    return c;
}

function min() {
    var a = Number.parseInt(document.getElementById('invoer1').value);
    var b = Number.parseInt(document.getElementById('invoer2').value);
    var resultaat = a - b;
    document.getElementById("resultaat").innerText = resultaat;
}

function delen() {
    var a = Number.parseInt(document.getElementById('invoer1').value);
    var b = Number.parseInt(document.getElementById('invoer2').value);
    if (b == 0) {
        document.getElementById("resultaat").innerText = "Kan niet delen door 0.";
    } else {
        var resultaat = a / b;
        document.getElementById("resultaat").innerText = resultaat;
    }
}

function keer() {
    var a = Number.parseInt(document.getElementById('invoer1').value);
    var b = Number.parseInt(document.getElementById('invoer2').value);
    var resultaat = a * b;
    document.getElementById("resultaat").innerText = resultaat;
}

function check() {
    return document.getElementById("check").checked;
}