function crearComentario() {
    let comentar = document.getElementById('comentar').value 
     if (comentar.trim() === "") return;

    let ahora = new Date();
    let fecha = ahora.toLocaleDateString();  
    let hora = ahora.toLocaleTimeString();
    
    let div = document.createElement("div");
    div.style.background = '#f0f0f0';
    div.style.borderRadius = '14px';
    div.style.padding = '10px 16px';
    div.style.fontSize = '14px';
    div.style.color = '#444';
    div.style.marginTop = '10px';

    div.innerHTML = `
        <p>
            ${comentar} <small>${fecha} ${hora}</small>
            <button onclick="this.parentElement.parentElement.remove()">🗑️ Eliminar</button>
        </p>
    `;

    document.getElementById("container").appendChild(div);
    document.getElementById('comentar').value = "";
}