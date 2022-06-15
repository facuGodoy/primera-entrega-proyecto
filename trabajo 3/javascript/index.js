const tortas = {
 tortaUno : 'Cheesecake frutos rojos',
 tortaDos : 'Chocotorta',
 tortaTres : 'Pastafrola',
 tortaCuatro : 'Biscochuelo de naranja'}

 
const bebidas = { 
   bebidaUno : 'Capucchino',
   bebidaDos : 'Latte',
}

const pedidoCliente = [];

let hora = 15;

 let bienvenido = alert('Bienvenido a Nuestra Tienda')

 let nombreCliente = prompt ('Ingresa tu nombre por favor =D...!')


 if (hora >= 8 && hora <= 12) {
   alert('Buenos dias..!,' + ' ' + nombreCliente + '¿' +'Cual va a ser tu pedido?')
} else {
   alert('Buenas tardes,' + ' ' + nombreCliente + '¿' + 'Que vas a llevar?')
}

class Pedido {
    constructor (nombre, precio){
         this.nombre = nombre;
         this.precio = precio;
        }
   } 


const pedidoUno = new Pedido('Cheesecake frutos rojos', 500);
const pedidoDos = new Pedido('Chocotorta', 400);
const pedidoTres = new Pedido('Pastafrola', 350);
const pedidoCuatro = new Pedido('Biscochuelo de naranja', 300);
const pedidoCinco = new Pedido('Capucchino', 450);
const pedidoSeis = new Pedido('Latte', 450);

alert(Pedido)

class DetallePedido {
   constructor(){
    this.producto = [];
    this.cantidad = '';
    this.total = 0;
   }
  nombreProducto(valor) {
   this.nombre = valor;
  }
  agregarProducto(productos){
   this.producto.push(productos)
  }

  Total(){
   for(const PD of this.producto){
      this.total = this.total + PD.precio;
      pedidoCliente = pedidoCliente + PD.nombre + PD.precio + '\n';
  }
  alert ("Hola" + this.nombre + "Tu pedido es:\n" + pedidoCliente + "\n Total:" + " " + this.total)
}

}


pedidoCliente.push(DetallePedido)

const Cliente = new DetallePedido(pedidoCliente);

Cliente.setName(nombre);

Cliente.Total();

function operacion(valorUno, valorDos, operacion){
    switch (operacion) {
       case '1':
          return (valorUno + valorDos);
          break;
       case '2':
          return (valorUno - valorDos);
          break;
       case '3':
          return (valorUno * valorDos);
          break;
       case '4':
          return (valorUno / valorDos);
          break;
    
       default:
          return 0;
          break;
    }
 }


 function pedirCantidad(texto){
   let valor = prompt(texto);
   while(isNaN(parseInt(valor))){
      valor = prompt(texto)
   }
 }

 function realizarPedido(textoUno, textoDos, productoUno, productoDos){
   let eleccion = 0 ;
   let cantidad = 0 ;
   let subtotal = 0 ;

   cantidad = pedirCantidad(textoUno);

   if (cantidad > 0){
      for (i = 1 ; i <= cantidad ; i++){
         eleccion = pedirCantidad(textoDos + 'N°:' + i + '\n 1 ' + productoUno.nombre + '$' + productoUno.precio + '\n 2 ' + productoDos.nombre + '$' + productoDos.precio);
      }
      if (eleccion === 1) {
         Cliente.agregarProducto(productoUno);
      } else {
         Cliente.agregarProducto(productoDos);
      }
   }
 }



