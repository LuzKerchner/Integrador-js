function calcularTotal(){
  
  var valorEntrada = 200;

  
  var cantidad = parseInt(document.getElementById("cantidad").value, 10);

  
  var descuentoCategoria = parseInt(document.getElementById("categoria").value, 10);

  
  var importeTotal = (valorEntrada * cantidad) * (100 - descuentoCategoria) / 100;

 
  document.getElementById("importeTotal").innerHTML = " $" + importeTotal;

}

function resetForm(){
  document.getElementById("importeTotal").innerHTML = "";
}



