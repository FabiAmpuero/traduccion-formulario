/*
function esp(){
    var formulario=document.createElement("form");
    var titulo=document.createElement("h2");
    var contenido=document.createTextNode("Por favor inicia sesión");
    titulo.appendChild(contenido);
    formulario.setAttribute("margin","0 auto");
    titulo.setAttribute("text-align","center");
    document.getElementById("form-signin-heading").appendChild(titulo);
}
*/
function esp(){
    var eliminar=document.getElementById("form-signin-heading");
    eliminar.parentNode.removeChild(eliminar);
    
}