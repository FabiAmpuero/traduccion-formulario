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
/*creacion de boton*/
var boton=document.createElement("button");
var contenido=document.createTextNode("Español");
boton.appendChild(contenido);
boton.setAttribute("onclick","esp()");
document.getElementsByClassName("container")[0].appendChild(boton);

var botonn=document.createElement("button");
var contenido=document.createTextNode("Ingles");
botonn.appendChild(contenido);
botonn.setAttribute("onclick","ing()");
document.getElementsByClassName("container")[0].appendChild(botonn);

/*creacion de boton*/
function esp(){
    var titulo=document.getElementById("form-signin-heading");
    titulo.innerHTML="Por favor inicia sesión";
    var email=document.getElementsByClassName("form-control")[0].placeholder="Correo Electrónico";
    var contrasena=document.getElementsByClassName("form-control")[1].placeholder="Contraseña";
    
    var span=document.getElementsByTagName("span")[0].innerHTML="Recordar datos";
    
    var boton=document.getElementsByClassName("btn")[0].innerHTML="Iniciar Sesión";
}
function ing(){
    var title=document.getElementById("form-signin-heading");
    title.innerHTML="Please sign in";
    var email=document.getElementsByClassName("form-control")[0].placeholder="Please enter your email";
    var password=document.getElementsByClassName("form-control")[1].placeholder="Password";
    
    var spanDos=document.getElementsByTagName("span")[0].innerHTML="Remember me";
    
    var buton=document.getElementsByClassName("btn")[0].innerHTML="Sign in";
}