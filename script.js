function crearComentario() {
    let comentar = document.getElementById('comentar').value 
     if (comentar.trim() === "") return;

    let ahora = new Date();
    let fecha = ahora.toLocaleDateString();  
    let hora = ahora.toLocaleTimeString();
    
    let div = document.createElement("div");
    div.innerHTML = `
        <p>
            ${comentar} <small>${fecha} ${hora}</small>
            <button onclick="this.parentElement.parentElement.remove()">🗑️ Eliminar</button>
        </p>
    `;

    document.getElementById("container").appendChild(div);
    document.getElementById('comentar').value = "";
}