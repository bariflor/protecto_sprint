var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre;
    var pTec;
    var pHSE;

    nombre=prompt("Nombre de la estudiante", "Bari");
    pTec=prompt("Puntos Técnicos");
    pHSE=prompt("Puntos HSE:");
    var datos = {
      nombre:nombre,
      pTec:pTec,
      pHSE:pHSE
    };
    estudiantes.push(datos);
    return datos;
}
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
     resultado += "<div class='row'>";
     resultado += "<div class='col m12'>";
     resultado += "<div class='card blue-grey darken-1'>";
     resultado += "<div class='card-content white-text'>";
     resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
     resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.pTec + "</p>";
     resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.pHSE + "</p>";
     resultado += "</div>";
     resultado += "</div>";
     resultado += "</div>";
     resultado += "</div>";
     return resultado;
 }

 function mostrarLista(estudiantes) {
     // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
     // Retornar el template de todos los estudiantes
     var nuevoNum="";
     for(var i=0;i<estudiantes.length; i++){
       nuevoNum += "<div class='row'>";
       nuevoNum += "<div class='col m12'>";
       nuevoNum += "<div class='card blue-grey darken-1'>";
       nuevoNum += "<div class='card-content white-text'>";
       nuevoNum += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
       nuevoNum += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].pTec + "</p>";
       nuevoNum += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].pHSE + "</p>";
       nuevoNum += "</div>";
       nuevoNum += "</div>";
       nuevoNum += "</div>";
       nuevoNum += "</div>";
     }
     console.log(estudiantes);
     return nuevoNum;
 }
 function buscar(nombre, estudiantes) {
     // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
     // Retornar el objeto del estudiante buscado
     // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
     for(var i in estudiantes){
       if(nombre.toLowerCase==estudiantes[i].nombre.toLowerCase){
         return estudiantes[i];
       }
     }
 }

 function topTecnico(estudiantes) {
     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
     return estudiantes.sort(function(a,b){
       return b.pTec - a.pTec;
     });
 }

function topHSE(estudiantes) {
     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
     return estudiantes.sort(function(a,b){
       return b.pHSE - a.pHSE;
     });
 }
