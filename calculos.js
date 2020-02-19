
function operaciones() {
    var x = document.getElementById("operation").value;
    var num1 = document.getElementById("nuNumber1").value;
    var num2 = document.getElementById("nuNumber2").value;
    var rn = document.getElementById("nuNumber6");
    switch (x) {
        case "Select":
            rn.value = "";
            return;
        case "Suma":
            rn.value = parseFloat(num1) + parseInt(num2);
            break;
        case "Resta":
            rn.value = parseFloat(num1) - parseInt(num2);
            break;
        case "Multiplicación":
            rn.value = parseFloat(num1) * parseInt(num2);
            break;
        case "Division":
            rn.value = parseFloat(num1) / parseInt(num2);
            break;

    }

}

