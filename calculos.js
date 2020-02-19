

function clic(){
    var num1 = document.getElementById("nuNumber1").value;
    var num2 = document.getElementById("nuNumber2").value;
    
    var resultado =parseFloat(num1)  + parseInt(num2);
    var inputx = document.getElementById("nuNumber6").value = resultado;
    console.log (resultado);
}