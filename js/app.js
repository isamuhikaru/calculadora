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

  plasmar_numeros: function() {
    var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39");

    var accion_de_incrustar = function() {
      var escritura = document.getElementById("display");
      escritura.innerHTML = escritura.innerHTML + this.id;
      //escritura.innerHTML += this.id ;
    };

    //Este ciclo reparte la funcionalidad a todas las teclas:
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].addEventListener("click", accion_de_incrustar);
    };

  },

  quitar_cero_inicial: function() {
    var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39");

    var cero_inicial = function() {
      if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = this.id;
      };

      if (document.getElementById("display").innerHTML == "00" ||
        document.getElementById("display").innerHTML == "01" ||
        document.getElementById("display").innerHTML == "02" ||
        document.getElementById("display").innerHTML == "03" ||
        document.getElementById("display").innerHTML == "04" ||
        document.getElementById("display").innerHTML == "05" ||
        document.getElementById("display").innerHTML == "06" ||
        document.getElementById("display").innerHTML == "07" ||
        document.getElementById("display").innerHTML == "08" ||
        document.getElementById("display").innerHTML == "09") {
        document.getElementById("display").innerHTML = this.id;
      };
    };

    //Este ciclo reparte la funcionalidad a todas las teclas:
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].addEventListener("click", cero_inicial);
    };

  },

  limite_de_caracteres: function() {
    var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39, #sign");

    var maximo_de_caracteres = function() {
      if (document.getElementById("display").innerHTML.length >= 8) {
        var caracteres_escritos = document.getElementById("display").innerHTML;
        var limite = caracteres_escritos.substr(0, 9);
        document.getElementById("display").innerHTML = limite;
      };
    };

    //Este ciclo reparte la funcionalidad a todas las teclas:
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].addEventListener("click", maximo_de_caracteres);
    };

  },

  error_por_siempre: function() {
    var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39, #\\.");

    var incrustar_error = function() {
      if (document.getElementById("display").innerHTML.length >= 9) {
        var ubicacion_error = document.getElementById("display").innerHTML;
        var palabra_reemplazo = ubicacion_error.replace(this.innerHTML, "error");
        document.getElementById("display").innerHTML = palabra_reemplazo;

        var caracteres_escritos = document.getElementById("display").innerHTML;
        var limite = caracteres_escritos.substr(0, 5);
        document.getElementById("display").innerHTML = limite;
      };

      if (document.getElementById("display").innerHTML == "error0" ||
        document.getElementById("display").innerHTML == "error1" ||
        document.getElementById("display").innerHTML == "error2" ||
        document.getElementById("display").innerHTML == "error3" ||
        document.getElementById("display").innerHTML == "error4" ||
        document.getElementById("display").innerHTML == "error5" ||
        document.getElementById("display").innerHTML == "error6" ||
        document.getElementById("display").innerHTML == "error7" ||
        document.getElementById("display").innerHTML == "error8" ||
        document.getElementById("display").innerHTML == "error9") {
        var caracteres_escritos_despues_de_error = document.getElementById("display").innerHTML;
        var limite = caracteres_escritos_despues_de_error.slice(0, 5);
        document.getElementById("display").innerHTML = limite;
      };
    };

    //Este ciclo reparte la funcionalidad a todas las teclas:
    for (var i = 0; i < teclas.length; i++) {
      teclas[i].addEventListener("click", incrustar_error);
    };

  },

  reseteada: function() {
    var on_c = document.getElementById("on");

    var maximo_de_caracteres = function() {
      document.getElementById("display").innerHTML = "0";
    };

    //Este reparte la funcionalidad a la tecla:
    on_c.addEventListener("click", maximo_de_caracteres);

  },

  plasmar_mas_menos: function() {
    var positivo_negativo = document.getElementById("sign");

    var poner_quitar_positivo_negativo = function() {

      if (document.getElementById("display").innerHTML.charAt(0) == "-") {
        var caracteres_escritos = document.getElementById("display").innerHTML;
        var limite = caracteres_escritos.substr(1, 9);
        document.getElementById("display").innerHTML = limite;

      } else {
        var escritura = document.getElementById("display");
        escritura.innerHTML = "-" + escritura.innerHTML;
      };

      if (document.getElementById("display").innerHTML == "-error") {
        var caracteres_escritos_despues_de_error = document.getElementById("display").innerHTML;
        var limite = caracteres_escritos_despues_de_error.slice(1, 6);
        document.getElementById("display").innerHTML = limite;
      };

      if (document.getElementById("display").innerHTML == "-0") {
        document.getElementById("display").innerHTML = "-";
      };

      if (document.getElementById("display").innerHTML == "") {
        document.getElementById("display").innerHTML = "0";
      };

    };

    //Este reparte la funcionalidad a la tecla:
    positivo_negativo.addEventListener("click", poner_quitar_positivo_negativo);

  },

  plasmar_un_punto: function() {
    var un_punto = document.getElementById(".");

    var solo_un_punto = function() {
      if (document.getElementById("display").innerHTML.indexOf('.') < 0) {
        /* indexOf() Devuelve la posición de la primera aparición de un valor especificado en una cadena, en este caso me dice que si el valor de su ubicacion es menor a cero pues se pondra el caracter punto. Este metodo devuelve -1 si no se encuentra el caracter.
        Como al dar clic aun no hay punto su valor sera -1 osea un numero menor a 0 y por lo tanto se plasmara el punto, al siguiente clic con el boton como ya tendra un valor el caracter en la cadena, ya no se plasmara el caracter punto */
        var escritura = document.getElementById("display");
        escritura.innerHTML = escritura.innerHTML + this.id;
        //escritura.innerHTML += this.id ;
      };
      if (document.getElementById("display").innerHTML == "error.") {
        var caracteres_escritos_despues_de_error = document.getElementById("display").innerHTML;
        var limite = caracteres_escritos_despues_de_error.slice(0, 5);
        document.getElementById("display").innerHTML = limite;
      };
      if (document.getElementById("display").innerHTML == ".") {
        document.getElementById("display").innerHTML = "0.";
      };

    };

    //Este reparte la funcionalidad a la tecla:
    un_punto.addEventListener("click", solo_un_punto);

  }, //Aquí va la coma

  inicializar: function() {
    calculadora.presion_teclas();
    calculadora.plasmar_numeros();
    calculadora.quitar_cero_inicial();
    calculadora.limite_de_caracteres();
    calculadora.error_por_siempre();
    calculadora.reseteada();
    calculadora.plasmar_mas_menos();
    calculadora.plasmar_un_punto();
  }

};

calculadora.inicializar();

/*---------------------------------------------------------------------------------------------*/

var espacio_blanco = document.querySelectorAll("#mas, #menos, #por, #dividido, #raiz");

var blanco = function() {
    document.getElementById("display").innerHTML = "";
};

//Este ciclo reparte la funcionalidad a todas las teclas:
for (var i = 0; i < espacio_blanco.length; i++) {
  espacio_blanco[i].addEventListener("click", blanco);
};






//
// var secta = document.getElementById(".");
//
// var core = function() {
//     if (document.getElementById("display").innerHTML == ".") {
//       document.getElementById("display").innerHTML = "0.";
//     };
// };
//
// //Este ciclo reparte la funcionalidad a todas las teclas:
//   secta.addEventListener("click", core);





// var igual = document.getElementById("igual");
//
// var operaciones = function(){
//
// var primer_valor = parseFloat(document.getElementById("igual").innerHTML);
// var segundo_valor = parseFloat(document.getElementById("igual").innerHTML);
//
// var opcion = document.getElementById("mas");
// var opcion = document.getElementById("menos");
// var opcion = document.getElementById("por");
// var opcion = document.getElementById("dividido");
// var opcion = document.getElementById("raiz");
//
//   switch(operacion){
//     case "mas":
//       this.resultado = eval(primer_valor + segundo_valor);
//     break;
//     case "menos":
//       this.resultado = eval(primer_valor - segundo_valor);
//     break;
//     case "por":
//       this.resultado = eval(primer_valor * segundo_valor);
//     break;
//     case "dividido":
//       this.resultado = eval(primer_valor / segundo_valor);
//     break;
//     case "raiz":
//       this.resultado = eval(Math.sqrt(primerValor));
//   };
// };
//
// igual.addEventListener("click", operaciones);

//
//
// var igual = document.getElementById("igual");
// var resultado = document.getElementById("igual").innerHTML;
//
// var operaciones = function(primer_valor, segundo_valor, operacion){
//   switch(operacion){
//     case "+":
//       this.resultado = eval(primer_valor + segundo_valor);
//     break;
//     case "-":
//       this.resultado = eval(primer_valor - segundo_valor);
//     break;
//     case "*":
//       this.resultado = eval(primer_valor * segundo_valor);
//     break;
//     case "/":
//       this.resultado = eval(primer_valor / segundo_valor);
//     break;
//     case "raiz":
//       this.resultado = eval(Math.sqrt(primerValor));
//   };
// };
//
//
//
// igual.addEventListener("click", operaciones( , , ));
