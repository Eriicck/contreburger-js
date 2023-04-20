/* fetch("/db/database.son")
    .then(Response => Response.json)
    .then(data => showInfo(data));

function showInfo(data) {
 console.table(data.hamburguesa);   
}
 */

/* FALTA HACER EN HTML */

/* form.addEventListener("confirmar", e=>{
    e.preventDefault()
    if(nombre.value.length <3){
        alert("Nombre muy corto")
    }
})

 */

const contenedorHTML = document.querySelector(".cardburger")

fetch("./db/database.json")
.then(response => response.json())
.then(data => {
    for(const product of data){
        contenerdorHTML.innerHTML +=  `
        <div class="cardburger">
            <img class="cardimg" src="./img/burrger1.jpg" alt="">
                <div class="intro">
                 <a href="#" class="burger"><h3>Clasica</h3></a>
                 <a href="#" class="precios">$1.900</a> 
             </div>
        </div>
        `
    }
})

const formularioUsuariosHTML = document.querySelector("#formularioUsuarios")

formularioUsuariosHTML-addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(formularioUsuariosHTML.nombre,value)
})