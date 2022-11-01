function funcionAlerta(){
    alert("le pique al click");
}

function quitarSITEC(){
    let pregunta = confirm("¿Seguro de quitar SITEC?");
    if(pregunta == true){
        alert("SITEC Borrado....:(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "shiaaaaale";
    }
}


//alert("primer javaScript externo");

/**/