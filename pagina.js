function telop(arg1, arg2) {
    // alert('Telop is aangeroepen met de waarden ' + arg1 +' en ' + arg2);
    var resultaat = arg1 + arg2;
    // alert(arg3);
    return resultaat;
}

function delen(arg1, arg2) {
    var arg3 = arg1 / arg2;
    return arg3;
}

var a = 9;
var b = 12;

console.log('a = ' + a);
console.log(b);

a = 23;
console.log('a = ' + a);

var c = a + b;
console.log('c = ' + c);

var resultaattelop = telop(a, b);
// alert(resultaattelop);

// alert(delen(10, 5));

// alert(resultaattelop);

var pTekst = document.getElementById('mijnid').innerText;
alert(pTekst);
document.getElementById('mijnid').innerText = 'Mijn naam is Chantal';
document.getElementById('mijnid').style.color = 'green';

function reageerOpButton() {
    var invoer1 = Number.parseInt(document.getElementById('invoer1').value);

    if(invoer1 == 0) {
        alert('Invoer is 0, dus dat mag niet');
    } else {
        alert('Invoer is geldig');
    }
    
    // console.log(invoer1);
}