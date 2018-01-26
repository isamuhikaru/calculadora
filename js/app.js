var calculadora = {
  
//Función para presionar y soltar los botones:
    presion_teclas: function() {
        var teclas = document.getElementsByClassName("tecla");

        var boton_apretado = function() {
            this.style.transform = "scale(0.95,0.95)";
        };

        //Este ciclo reparte la funcionalidad a todas las teclas:  
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].addEventListener("mousedown", boton_apretado);
        };

        var boton_soltado = function() {
            this.style.transform = "scale(1,1)";
        };

        //Este ciclo reparte la funcionalidad a todas las teclas: 
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].addEventListener("mouseup", boton_soltado);
        };
    },

//Área de impresión de números en pantalla:
    ingreso_numeros: function() {
            var teclas_numericas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39");

            visualizar_numero = function() {
                //Condicional para dejar el cero inicial:
                if (document.getElementById("display").innerHTML == "0") {
                    var padre = document.getElementsByClassName("pantalla")[0]; //Este es el padre
                    cero_inicial = document.getElementById("display"); //Elemento a remover
                    padre.removeChild(cero_inicial); //Remoción de elemento
                };
                var numero_elemento = document.createElement("span"); //Se crea un elemento span
                contenido = document.createTextNode(this.id); //Contenido del elemento
                numero_elemento.setAttribute("id", "display"); //Se le ingresa una clase
                numero_elemento.appendChild(contenido); //Se adjunta el elemento con el contenido
                var padre = document.getElementsByClassName("pantalla")[0]; //Este es el padre
                padre.appendChild(numero_elemento); //Se inserta el elemento a la pantalla

//Área de limite de caracteres:
                if (document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[9]) {
                    eliminacion_elementos1 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[1];
                    eliminacion_elementos2 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[2];
                    eliminacion_elementos3 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[3];
                    eliminacion_elementos4 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[4];
                    eliminacion_elementos5 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[5];
                    eliminacion_elementos6 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[6];
                    eliminacion_elementos7 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[7];
                    eliminacion_elementos8 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[8];
                    eliminacion_elementos9 = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[9];
                    var padre = document.getElementsByClassName("pantalla")[0];
                    padre.removeChild(eliminacion_elementos1); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos2); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos3); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos4); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos5); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos6); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos7); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos8); //Remoción de elemento
                    padre.removeChild(eliminacion_elementos9); //Remoción de elemento
                    document.getElementById("display").innerHTML = "error";

//Área del error por siempre:
                    var teclas_error = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39");
                    var error_forever = function() {



                  if (document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[0].innerHTML == "error") {

                    var papirrin = document.getElementsByClassName("pantalla")[0];
                      if (papirrin.hasChildNodes()){
                        while ( papirrin.childNodes.length >= 2 ){
                        papirrin.removeChild( papirrin.firstChild );
                        };
                      document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[0].innerHTML = "error";
                      };



                  }

                  // if (document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[0].innerHTML == "error") {
                  //     var span_error = document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[1];
                  //     var papi = document.getElementsByClassName("pantalla")[0];
                  //     papi.removeChild(span_error); //Remoción de elemento
                  // };








                    };
                    for (var i = 0; i < teclas_error.length; i++) {
                        teclas_error[i].addEventListener("click", error_forever);
                    };
                };

            };
            //Este ciclo reparte la funcionalidad a todas las teclas:  
            for (var i = 0; i < teclas_numericas.length; i++) {
                teclas_numericas[i].addEventListener("click", visualizar_numero);
            };
        } //Aquí va la coma
};

calculadora.presion_teclas();
calculadora.ingreso_numeros();

/*---------------------------------------------------------------------------------------------*/


var on_c = document.getElementById("on");
var reseteada = function(){

  var papirrin = document.getElementsByClassName("pantalla")[0];
  if (papirrin.hasChildNodes()){
    while ( papirrin.childNodes.length >= 2 ){
    papirrin.removeChild( papirrin.firstChild );
    };
  document.getElementsByClassName("pantalla")[0].getElementsByTagName("span")[0].innerHTML = "0";
  };

};
on_c.addEventListener("click", reseteada);


