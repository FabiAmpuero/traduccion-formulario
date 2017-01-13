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
    Metodo de eliminacion
function esp(){
    var eliminar=document.getElementById("form-signin-heading");
    eliminar.parentNode.removeChild(eliminar);
    
    var titulo=document.createElement("h2");
    var contenido=document.createTextNode("Por favor inicia sesión");
    titulo.appendChild(contenido);
    document.getElementById("form-signin-heading").appendChild(titulo);
}
*/
function esp(){
    var titulo=document.getElementById("form-signin-heading");
    titulo.innerHTML="Por favor inicia sesión";
    var email=document.getElementsByClassName("form-control")[0].placeholder="Correo Electrónico";
    var password=document.getElementsByClassName("form-control")[1].placeholder="Contraseña";
    
    var span=document.getElementsByTagName("span")[0].innerHTML="Recordar datos";
    
    var boton=document.getElementsByClassName("btn").innerHTML="porfi";
}