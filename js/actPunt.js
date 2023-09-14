function agGen() {
    let liGeneros, elemento, contenido;
    var estiloMU = document.getElementById('estiloMU').value;
    liGeneros = document.getElementsByTagName('li');
    elemento = document.createElement('li');
    contenido = document.createTextNode(estiloMU);
    elemento.appendChild(contenido);
    liGeneros[2].insertAdjacentElement('afterend', elemento);
}

function crearElementoConEstilo() {
    let liGeneros, elemento, contenido;
    var estiloMU = document.getElementById('estiloMU').value;
    liGeneros = document.getElementsByTagName('li');
    elemento = document.createElement('li');
    contenido = document.createTextNode(estiloMU);
    elemento.appendChild(contenido);
    liGeneros[2].insertAdjacentElement('afterend', elemento);
    elemento.setAttribute('class', 'lista');
}

function elim() {
    var lista = document.getElementById('lista');
    lista.removeChild(lista.lastElementChild);
}

function reemplazarEmail() {
    var nuevoEmail = document.getElementById('emailUsuario').value;
    var footer = document.getElementById('pie');
    footer.textContent = nuevoEmail;
}