var calculadora = {
  presion_botones:function(){
    var teclas = document.getElementsByClassName("tecla"); 

    var boton_apretado = function(){
       this.style.transform = "scale(0.95,0.95)"; 
    };

    //Este ciclo reparte la funcionalidad a todas las teclas:  
      for (var i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener("mousedown", boton_apretado);
      };

    var boton_soltado = function(){
      this.style.transform = "scale(1,1)";
    };

    //Este ciclo reparte la funcionalidad a todas las teclas: 
    for (var i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener("mouseup", boton_soltado);
      };
  }//aqui va la coma
};

calculadora.presion_botones();

/*-----------------------------------------------------------------------------------------*/

var teclas_numericas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39"); 

visualizar_numero = function(){
//Condicional para quitar el cero inicial:
  if (document.getElementById("display").innerHTML == "0") {
    var padre = document.getElementsByClassName("pantalla")[0];//Este es el padre
    cero_inicial = document.getElementById("display");//Elemento a remover
    padre.removeChild(cero_inicial);//Remoción de elemento
  };
    var numero_elemento = document.createElement("span");//Se crea un elemento span
    contenido = document.createTextNode(this.id);//Contenido del elemento
    numero_elemento.setAttribute("id","display");//Se le ingresa una clase
    numero_elemento.appendChild(contenido);//Se adjunta el elemento con el contenido
    var padre = document.getElementsByClassName("pantalla")[0];//Este es el padre
    padre.appendChild(numero_elemento);//Se inserta el elemento a la pantalla
};

//Este ciclo reparte la funcionalidad a todas las teclas:  
for (var i = 0; i < teclas_numericas.length; i++) {
  teclas_numericas[i].addEventListener("click", visualizar_numero);
};





