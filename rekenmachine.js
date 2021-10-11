function plus() {
    var a = Number.parseInt(document.getElementById('invoer1').value);
    var b = Number.parseInt(document.getElementById('invoer2').value);
    var resultaat = a + b;
    document.getElementById("resultaat").innerText = resultaat;
}