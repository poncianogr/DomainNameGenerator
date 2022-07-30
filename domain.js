
let pronoun = ["The", "A", "His"];
let adj = ["great", "better", "crazy"];
let noun = ["solution", "answer"];

function generadorDominio(parte1, parte2, parte3){
    for(let a=0; a<parte1.length; a++){
        for(let b=0; b<parte2.length; b++){
            for(let c=0; c<parte3.length; c++){
                let nuevoNombre = document.createTextNode(parte1[a] + parte2[b] + parte3[c] + ".com");
                let lista = document.getElementById("listaDominios");
                let elemento = document.createElement("div");
                elemento.className = "alert alert-dark";
                lista.appendChild(elemento);
                elemento.appendChild(nuevoNombre);
                let seleccionador = document.createElement("input");
          
            }
        }
    }
    
 } ;
   

    document.querySelector("#boton").addEventListener("click", function(){
    generadorDominio(pronoun, adj, noun);
    document.querySelector("#boton").style.display ="none";
})