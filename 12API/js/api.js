const apiURL = "https://genshin.jmp.blue/";
const inputBusqueda = document.querySelector('.container-input input[type="text"]');
const botonBusqueda = document.querySelector('.container-input button');
const imagenPersonaje = document.querySelector('.container-img .characterdisplay');
const tablaDatos = document.querySelector('.container-table table');
const tarjetaPresentacion = document.querySelector('.container-tarjeta img');
const splashGacha = document.querySelector('.container-splash img');

function normalizarNombre(nombre) {
    if (!nombre) return '';
    return nombre.toLowerCase().trim().replace(/\s+/g, '-').replace('\'', '');
}

async function buscarPersonaje() {
    const nombreEntrada = inputBusqueda.value;
    const nombreNormalizado = normalizarNombre(nombreEntrada);

    if (nombreNormalizado === '') {
        alert("Por favor, ingresa el nombre de un personaje.");
        return;
    }

    try {
        const urlPersonaje = `${apiURL}characters/${nombreNormalizado}/`;
        const respuesta = await fetch(urlPersonaje);

        if (!respuesta.ok) {
            if (respuesta.status === 404) {
                throw new Error(`Personaje "${nombreEntrada}" no encontrado. Asegúrate de escribirlo correctamente.`);
            }
            throw new Error(`Error al obtener los datos: ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();

        actualizarTabla(datos);

        actualizarImagenes(nombreNormalizado);

    } catch (error) {
        console.error("Error en la búsqueda:", error.message);
        alert(error.message);
        limpiarVista();
    }
}

function actualizarTabla(datos) {
    const filas = tablaDatos.querySelectorAll('tr td:nth-child(2)'); 

    const valores = {
        'rareza': datos.rarity ? `${datos.rarity} \u2605` : 'N/A', // Unicode Star
        'elemento': datos.vision || 'N/A',
        'arma': datos.weapon || 'N/A',
        'region': datos.nation || 'N/A'
    };
    
    tablaDatos.querySelectorAll('tr').forEach(row => {
        const tituloCelda = row.querySelector('td:first-child');
        const titulo = tituloCelda.textContent.trim().toLowerCase().replace(':', '');
        
        let valorCelda = row.querySelector('td:nth-child(2)');
        if (!valorCelda) {
            valorCelda = document.createElement('td');
            row.appendChild(valorCelda);
        }

        if (titulo.includes('rareza')) {
            valorCelda.textContent = valores.rareza;
        } else if (titulo.includes('elemento')) {
            valorCelda.textContent = valores.elemento;
        } else if (titulo.includes('arma')) {
            valorCelda.textContent = valores.arma;
        } else if (titulo.includes('region')) {
            valorCelda.textContent = valores.region;
        }
    });

}
function actualizarImagenes(nombreNormalizado) {
    const baseUrl = `${apiURL}characters/${nombreNormalizado}`;

    imagenPersonaje.src = `${baseUrl}/portrait`;
    imagenPersonaje.alt = nombreNormalizado;

    tarjetaPresentacion.src = `${baseUrl}/namecard-background`;
    tarjetaPresentacion.alt = `Tarjeta de ${nombreNormalizado}`;

    splashGacha.src = `${baseUrl}/gacha-splash`;
    splashGacha.alt = `Splash de ${nombreNormalizado}`;
}

function limpiarVista() {

}

botonBusqueda.addEventListener('click', buscarPersonaje);

inputBusqueda.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarPersonaje();
    }
});

function validar(event) {
    return true; 
}