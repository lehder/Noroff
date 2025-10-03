// URL de la API de Rick and Morty para obtener todos los personajes
const API_URL = 'https://rickandmortyapi.com/api/character';
const container = document.getElementById('characters-container');

/**
 * Función para crear la tarjeta HTML de un personaje.
 * @param {object} character - Objeto con los datos del personaje.
 */
function createCharacterCard(character) {
    // 1. Crear el elemento principal de la tarjeta
    const card = document.createElement('div');
    card.classList.add('character-card');

    // 2. Insertar el HTML de la tarjeta (incluye imagen y detalles)
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div class="character-info">
            <h2>${character.name}</h2>
            <p>
                <span class="status ${character.status}"></span> 
                ${character.status} - ${character.species}
            </p>
            <p><strong>Última ubicación:</strong> ${character.location.name}</p>
        </div>
    `;

    // 3. Añadir la tarjeta al contenedor principal
    container.appendChild(card);
}

/**
 * Función asíncrona principal para obtener y mostrar los datos.
 */
async function fetchAndRenderCharacters() {
    try {
        // 1. Realizar la petición a la API
        const response = await fetch(API_URL);

        // 2. Manejar errores de respuesta HTTP (ej: 404)
        if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
        }

        // 3. Convertir la respuesta a JSON
        const data = await response.json();
        
        // La lista de personajes está en el array 'results'
        const characters = data.results; 
        
        // 4. Iterar sobre cada personaje y crear su tarjeta
        characters.forEach(character => {
            createCharacterCard(character);
        });

    } catch (error) {
        // 5. Mostrar un mensaje de error si algo falla
        console.error('Error al obtener los datos de Rick and Morty:', error);
        container.innerHTML = `<p style="color: red; text-align: center;">Error al cargar los personajes. Inténtalo de nuevo más tarde.</p>`;
    }
}

// Iniciar la carga de los datos cuando el script se ejecuta
fetchAndRenderCharacters();