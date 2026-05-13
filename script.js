function crearComentario() {
    let comentar = document.getElementById('comentar').value 
     if (comentar.trim() === "") return;

    let ahora = new Date();
    let fecha = ahora.toLocaleDateString();  
    let hora = ahora.toLocaleTimeString(); 