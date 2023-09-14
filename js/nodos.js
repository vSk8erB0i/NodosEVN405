let identificador, etiqueta,seccion, clase, nombre, referencia; //let sirve para definir variables
identificador=document.getElementById('titulo');//Árbol de Nodos con Javascript
console.log(identificador.innerText);//console.log imprime en la consola, innerText muestra el contenido del nodo

etiqueta=document.getElementsByTagName("p");//arreglo de elementos html con el tagname "p"
console.log(etiqueta[1].innerText);//imprime en consola el contenido de etiqueta en la posicion 1(2)

seccion=document.getElementsByTagName('section');//arreglo de elementos html con el tagname "section"
console.log(seccion[3].innerText);//imprime en consola el contenido de seccion en la posicion 3(4)

clase=document.getElementsByClassName('parrafo');//arreglo de elementos html de la classe "parrafo"
console.log(clase[0].innerText);//imprime en consola el contenido de clase en la posicion 0(1)

nombre=document.getElementsByName('subtitulo');//arreglo de elementos html con el nombre "subtitulo"
console.log(nombre[1].innerText);//imprime en consola el contenido de nombre en la posicion 1(2)

//Crear Nodos

let elemento, contenido, elementop, reemplazo;
elemento=document.createElement('p');//crea un nodo <p></p>
contenido=document.createTextNode('Párrafo creado por Victor');//crea el conteido de <p></p>, 'Párrafo nuevo desde JS'
elemento.appendChild(contenido);//une las dos lineas anteriores
  //colocar el nodo
  etiqueta[2].appendChild(elemento);

  //practica(?
  elementop=document.createElement('p');
  reemplazo=document.createTextNode('Mi primer párrafo');
  elementop.appendChild(reemplazo);

  //Nodos con estilo y remplazar

  elemento=document.createElement('p');
  contenido=document.createTextNode('Párrafo en Reemplazo');
  elemento.setAttribute('class','parrafo2'); //se agrega el atributo class con el valor parrafo2
  elemento.appendChild(contenido);
  seccion[1].replaceChild(elemento,etiqueta[0]); //Reemplaza etiqueta[0] por elemento en el arreglo seccion

  //eliminar
  seccion[0].removeChild(nombre[0]);
  var nelim=document.getElementById('enlace');
  nelim.remove();

  //clase 11/09/23
  seccionNueva2=document.createElement('section');
  var eremplazo=document.createElement('a');
  eremplazo.setAttribute('href', 'https://www.google.com.mx/');
  eremplazo.setAttribute('title', 'Acceso a Google');
  var coneremplazo=document.createTextNode('Google');
  eremplazo.appendChild(coneremplazo);
  seccion[3].insertAdjacentElement('afterend', eremplazo);

//Ejercicio en clase
var nremplazo=document.createElement('p');
nremplazo.setAttribute('class', 'nuevoNodo');
var connremplazo=document.createTextNode('Hola nuevo nodo');
nremplazo.appendChild(connremplazo);
seccion[1].replaceChild(nremplazo,etiqueta[1]);



  //Crear nodos dentro de otros nodos
  seccionNueva=document.createElement('section');
  encabezado=document.createElement('h1');
  encabezado.setAttribute('class','encabezado');
  contenido=document.createTextNode("insertar Imágenes desde JS");
  encabezado.appendChild(contenido);

  articulo1=document.createElement('article');
  imagen=document.createElement('img');
  imagen.setAttribute('src', 'img/U1.png');
  articulo1.appendChild(imagen);

  articulo2=document.createElement('article');
  imagen2=document.createElement('img');
  imagen2.setAttribute('src', 'img/U2.jpg');
  articulo2.appendChild(imagen2);
  articulo2.setAttribute('id', 'elemento2')

  seccionNueva.appendChild(encabezado);
  seccionNueva.appendChild(articulo1);
  seccionNueva.appendChild(articulo2);
  seccion[3].insertAdjacentElement('afterend',seccionNueva);
