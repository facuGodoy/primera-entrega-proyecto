let bienvenido = alert('Bienvenido a Nuestra Tienda')

let nombreDecliente = prompt ('Nombre')

let apellidoDecliente = prompt('Apellido')

let cliente = (nombreDecliente + ' ' + apellidoDecliente)

alert( 'Welcome: ' + cliente )

let porcionDeTorta = prompt( cliente  + '' + '¿Cuantas porciones va a llevar?');

while (porcionDeTorta <= 0) {
    porcionDeTorta = prompt('¿Cuantas porciones va a llevar? :' + "" + cliente );
}

if (porcionDeTorta == 1) {
    alert ( cliente + '' + 'el monto es $200');
} else if( porcionDeTorta == 2){
    alert( cliente + '' + 'el monto es $360 ya que tienes un 10% de descuento');
}else if(porcionDeTorta == 3){
    alert( cliente + '' + 'el monto es $510 ya que tienes un 15% de descuento');
} else if(porcionDeTorta == 4){
    alert( cliente + '' + 'el monto es $640 ya que tienes un 20% de descuento');
}

alert('Gracias por tu compra :' + "" + cliente)

