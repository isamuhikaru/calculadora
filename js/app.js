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
        var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39, #\\.");

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
        var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39, #\\.");

        var cero_inicial = function() {
            if (document.getElementById("display").innerHTML.charAt(0) == "0") {
                document.getElementById("display").innerHTML = this.id;
            };
        };

        //Este ciclo reparte la funcionalidad a todas las teclas:  
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].addEventListener("click", cero_inicial);
        };

    },

    limite_de_caracteres: function() {
        var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39, #\\.");

        var maximo_de_caracteres = function() {
            if (document.getElementById("display").innerHTML.length >= 9) {
                var caracteres_escritos = document.getElementById("display").innerHTML;
                var limite = caracteres_escritos.substr(0, 10);
                document.getElementById("display").innerHTML = limite;
            };
        };

        //Este ciclo reparte la funcionalidad a todas las teclas:  
        for (var i = 0; i < teclas.length; i++) {
            teclas[i].addEventListener("click", maximo_de_caracteres);
        };

    },

    error_por_siempre: function(){
       var teclas = document.querySelectorAll("#\\30, #\\31, #\\32, #\\33, #\\34, #\\35, #\\36, #\\37, #\\38, #\\39, #\\.");

       var incrustar_error = function() {
           if (document.getElementById("display").innerHTML.length >= 10) {
               var ubicacion_error = document.getElementById("display").innerHTML;
               var palabra_reemplazo = ubicacion_error.replace(this.innerHTML, "error");
               document.getElementById("display").innerHTML = palabra_reemplazo;

               var caracteres_escritos = document.getElementById("display").innerHTML;
               var limite = caracteres_escritos.substr(0, 5);
               document.getElementById("display").innerHTML = limite;
           };

           if (document.getElementById("display").innerHTML == "error0"
            || document.getElementById("display").innerHTML == "error1"
            || document.getElementById("display").innerHTML == "error2"
            || document.getElementById("display").innerHTML == "error3"
            || document.getElementById("display").innerHTML == "error4"
            || document.getElementById("display").innerHTML == "error5"
            || document.getElementById("display").innerHTML == "error6"
            || document.getElementById("display").innerHTML == "error7"
            || document.getElementById("display").innerHTML == "error8"
            || document.getElementById("display").innerHTML == "error9"
            || document.getElementById("display").innerHTML == "error.") {
               var caracteres_escritos_despues_de_error = document.getElementById("display").innerHTML;
               var limite = caracteres_escritos_despues_de_error.slice(0, 5);
               document.getElementById("display").innerHTML = limite; 
           };
       };

       //Este ciclo reparte la funcionalidad a todas las teclas:  
       for (var i = 0; i < teclas.length; i++) {
           teclas[i].addEventListener("click", incrustar_error);
       };

    }//Aquí va la coma
};

calculadora.presion_teclas();
calculadora.plasmar_numeros();
calculadora.quitar_cero_inicial();
calculadora.limite_de_caracteres();
calculadora.error_por_siempre();


/*---------------------------------------------------------------------------------------------*/




