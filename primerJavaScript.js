function funcionAlerta(){
    alert("le pique al click");
}


async function traePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    //console.log(respuesta);
    const datos = await respuesta.json();
    //console.log(datos);
    console.log(datos.results[0].name.last+" "+datos.results[0].name.first);
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