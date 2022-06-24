function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    //trae los ID de archivo html y los guarda en una variable constante
    //pero solo se trae el valor numerico por eso esta el .value
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    //manda los dos valores a la funcion que hacer el procedimiento y lo almacena en ella
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    //muestra el resultado atra vez de un parrafo con el .innerText
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}