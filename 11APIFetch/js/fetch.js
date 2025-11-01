/*
Este es un ejemplo de una API REST utilizando una llamada con fetch, el cual sirve para obtener informacion sobre el tipo de API (pokemon) y obtener su estructura a partir de crear una funcion
call back con una promesa
 */

const pokeApiURL = "https://pokeapi.co/api/v2"

//vamos a crear una funcion para obtener todos los datos de la pokedex, para esto tenemos que imaginar el orden y la obtencion de los datos

const pokedex = () => {
    //primero necesitamos obtener todas las estadisticas del pokemon, asi que necesitamos crear un diccionario para obtener c/elemento del front para despues vaciar los datos
    const pokemonStatsElement ={
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialattack: document.getElementById("pokemonStatSpecialAttack"),
        specialdefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };
    
//necesitamos un auxiliar que nos permita usar la clase del tipo de pokemon para cambiar la css dependiendo el tipo

    let currentClassType = null;

    //Tiene que cambiar los elementos de la imagen, para ellos tenemos que crear un template que se encargue de encadenar los datos
    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay'/>"

    //Necesitamos un objeto que se encargue de guardar las rutas de las imagenes que vamos a cambiar dependienbdo de si es una busqueda , si lo encontro o no al pokemon

    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    }
    const container = {
        imagenContainer : document.getElementById("pokedisplay-container"),
        pokemonTypesContainer: document.getAnimations("pokemonTypes"),
        pokemonNameElement: document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
        pokemonMovesElement : document.getElementById("pokemonMoves"),
        pokemonIdElements: document.getElementById("pokemonId")
    }

    //necesitamos un objeto de tipo array que guarde los botones con su tipo de referencia 

    const buttons = {
        all: Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previo : document.getElementById("btnDown")
    }

    //vamos a buscar un pokemon, necesitamos una variable que guarde el nombre del pokemon
    const pokemonInput = document.getElementById("pokemonName")

    //la agrupacion de los elementos en este objeto debe de ser una estructura que nos permita crear funciones mas pequeñas que sin importar el orden puedan obtener cada uno de los datos solicitados
    const processPokemonType = (pokemonData) => {
        //primero necesitamos obtener el tipo de pokemon, el nombre y la clase para que se modifique en el html, ya que tenemos eso tendremos que obteenr los stats, movs, habilidades,  
        let pokemonTypes = "";
        //utilizo una busqueda de la clase de pokemon, eso se refiere al tipo de pokemon
        const firstClass = pokemonData.types[0].type.name;  

        pokemonData.types.array.forEach((pokemonTypeData) => {
            //necesito obtener la etiqueta de cada cambio
            pokemonTypes += `<span class = "pokemon-type ${pokemonData.type.name}"> ${pokemonTypeData.type.name} </span>`
        });

        //para poder quitar y cambiar el contenedor dependiendo del tipo tengo que saber a cual pertenece
        if(currentClassType){
            container.pokemonMovesElement.classList.remove(currentClassType);
            container.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        container.pokemonMovesElement.classList.add(firstClass);
        container.pokemonAbilitiesElement.classList.add(firstClass);

        //debo de agregar las etiquetas creadas dentro del foreach
        container.pokemonTypesContainer.innerHTML = pokemonTypes;

    } 

            //ahroa necesitamos obtener las estadisticas del pokemon

            const processPokemonStats = (pokemonData) => {
                pokemonData.stats?.forEach((pokemonStatData) =>{
                    //vamos a evaluar si encuentra el nombre de la estadistica para colocarlo en su contenedor correspondiente
                    switch(pokemonStatData.stat.name){
                            case "hp":
                            pokemonStatsElement.hp.innerHTML = pokemonStatData.base_stat;
                            pokemonStatsElement.hp.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}% )`
                            break;
                            case "attack":
                            pokemonStatsElement.attack.innerHTML = pokemonStatData.base_stat;
                            pokemonStatsElement.attack.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}% )`
                            break;
                            case "defense":
                            pokemonStatsElement.defense.innerHTML = pokemonStatData.base_stat;
                            pokemonStatsElement.defense.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}% )`
                            break;
                            case "specialattack":
                            pokemonStatsElement.specialattack.innerHTML = pokemonStatData.base_stat;
                            pokemonStatsElement.specialattack.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}% )`
                            break;
                            case "specialdefense":
                            pokemonStatsElement.specialdefense.innerHTML = pokemonStatData.base_stat;
                            pokemonStatsElement.specialdefense.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}% )`
                            break;
                            case "speed":
                            pokemonStatsElement.speed.innerHTML = pokemonStatData.base_stat;
                            pokemonStatsElement.speed.style = `background: linear-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}% )`
                            break;
                    }
                });
            };
            //Necesitamos una funcion para poder mapear las habilidades del pokemon y mostrar en su respectivo componente
            const processPokemonAbilities = (pokemonData) => {
                let pokemonAbilitiesContent = "";
                pokemonData.abilities?.forEach((pokemonAbilityData) => {
                    pokemonAbilitiesContent += `<li> ${pokemonAbilityData.ability.name} </li>`;
                });
                container.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
            }
                //Necesitamos una funcion para poder mapear los movs del pokemon y mostrar en su respectivo componente
            const processPokemonMoves = (pokemonData) => {
                let pokemonMovesContent = "";
                pokemonData.moves?.forEach((pokemonAbilityData) => {
                    pokemonMovesContent += `<li> ${pokemonMoveData.move.name} </li>`;
                });
                container.pokemonMovesElement.innerHTML = pokemonMovesContent;
            }
            //Necesito poner la imagen de cargando y que se deshabiliten los botones
            const setLoading = () =>{
                containers.imagenContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgLoading);
                buttons.all.forEach((button)=>{
                    button.disabled = true;
                });
            };
            //Necesito otra que los active
            const setLoadingComplete = () => {
                buttons.all.forEach(button => checkDisabled(button));
            }

            //Vamos a crear una promesa para poder obtener cada uno de los elementos de la pokedex, pero sin importar el orden, significa que cuando se
            //realize la peticion va a ser de tipo asyncrona, eso significa que va atender sin importar el orden de la transferenia de los paquetes
            // los datos del request, los va a procesar y despues armar, para ello utilizaremos una funcion de tipo fetch la cual como argumento principal va a necesitar
            // la url de la api y despues una seria de "then" para procesar datos

            const getPokemonData= async (pokemonName)=>fetch(`${pokeApiURL}pokemon/${pokemonName}`,{
                //cualquier peticion fetch por defecto es de tipo GET, pero si queremos hacer otro tipo de peticion tenemos que especificarlo en el segundo argumento. Pero cuando sea una BD entonces ya podemos modificar el tipo de metodo.
                //Despues del metodo es necesario el tipo de encabezado, las cabeceras son necesarias para que el servidor entienda que tipo de datos le estamosenviando y que  tipo de datos esperamos recibir
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
                //Si tiene elementos de formulario dentro del body, aqui se deben incluir, ejemplo:
                //body: JSON.stringify({})
            })
            .then((res)=> res.json()) //convertimos la respuesta en un objeto json
            .catch((error)=> ({requestFailed: true}))   //en caso de que falle la peticion, devolvemos un objeto con una propiedad que indique quefallo la peticion
            
            //necesitamos validar si se debe habilitar o deshabilitar los botones
            const checkDisabled = (button) =>{
                //para cuando exista un id negativo
                button.disabled = button.id === "btnDown" && container.pokemonIdElements.value <=1;
            }

            //La funcion que se encargue de ir armando los datos de la pokedex, entonces necesitamos validar ya sea el ID o el nombre del pokemon
                     const setPokemonData = async(pokemonName)=>{
                if(pokemonName = ""){
                //Poner la imagen de busqueda y deshabilitr
                setLoading;
                //debo de armar la consulta para determinar el orden de los datos
                const pokemonData = await getPokemonData(typeof pokemonName === "" ? pokemonName.toLowerCase() : pokemonName);   
                //Validar si la peticion fallo
                if(getPokemonData.requestFailed){
                    //Si no se encontro el pokemon, se pone la imagen de no encontrado
                    container.imagenContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgPokemonNotFound)
                }else{
                    //ponemos todos los elementos
                    container.imagenContainer.innerHTML = `${imageTemplate.replace("{imgSrc", pokemonData.sprites.front_default)} ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_shiny)} `;

                    container.pokemonNameElement.innerHTML = getPokemonData.name;
                    container.pokemomIdElement.innerHTML = getPokemonData.id;

                    //repartir los demas elementos
                    processPokemonType(pokemonData);
                    processPokemonStats(pokemonData);
                    processPokemonAbilities(pokemonData);
                    processPokemonMoves(pokemonData);
                       setLoadingComplete();
                }
                }else{
                    //Cuando exista una alerta o un error
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en tu busqueda',
                        text: 'Ingresa el nombre de un pokemon primero',
                        confirmButtonText: 'Aceptar'
                    });
                }
            }


            
                //La ultima funcion vincula todas las busquedas con los botones
                const trigger = () => {
                    buttons.search.onclick = () => setPokemonData(pokemonInput.value)
                    //orientemos el evento
                    pokemonInput.onkeyup = (event) => {
                        event.preventDefault();
                        if(event.key === "Enter"){
                            setPokemonData(pokemonInput.value)
                        }
                    };
                    buttons.next.onclick = () => setPokemonData(containers.pokemonIdElements.value + 1)
                    buttons.previo.onclick = () => setPokemonData(containers.pokemonIdElements.value - 1)
                }

                setLoadingComplete();
                trigger();
}

window.onload = pokedex;

