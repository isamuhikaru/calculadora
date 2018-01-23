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
