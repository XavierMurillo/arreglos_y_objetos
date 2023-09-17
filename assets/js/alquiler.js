import propiedades_alquiler from "./arreglo_alguiler.js";

let prop_alquiler = document.querySelector("#alquiler");
let propiedades = '';
function get_propiedades_alquiler(propiedades, propiedades_alquiler)
{
    for (let propiedad of propiedades_alquiler){
        propiedades += ` 
        <div class="col-md-4 mb-4"> 
            <div class="card">     
                <img
                src=${propiedad.src}
                class="card-img-top"
                alt="Imagen del departamento"
                />       
                <div class="card-body">
                    <h5 class="card-title">
                        ${propiedad.nombre}
                    </h5>
                    <p class="card-text">
                        ${propiedad.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> 
                        ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                        <i class="fas fa-bath"></i> 4 Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            
                    <p class= ${propiedad.smoke ? "text-success" : "text-danger"}>
                            <i class="${propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> 
                            ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
                    </p>
                    <p class=${propiedad.pets ? "text-success" : "text-danger"}>
                            <i class="${propiedad.pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i> 
                            ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                    </p>
                </div>
            </div>
        </div>    
        `
    }
    return propiedades;
}

prop_alquiler.innerHTML = `
<div class="row">
    ${get_propiedades_alquiler(propiedades, propiedades_alquiler)}
</div>`;