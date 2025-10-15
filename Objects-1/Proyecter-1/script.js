 // --- JAVASCRIPT CODE STARTS HERE ---

        // 1. List of pets with their information
        const mascotas = [
            {
                nombre: "Max",
                raza: "Golden Retriever",
                color: "Dorado",
                edad: "3 años",
                imgUrl: "https://placehold.co/400x300/f8b400/ffffff?text=Max&font=Poppins"
            },
            {
                nombre: "Luna",
                raza: "Siamés",
                color: "Crema y marrón",
                edad: "2 años",
                imgUrl: "https://placehold.co/400x300/a8dadc/ffffff?text=Luna&font=Poppins"
            },
            {
                nombre: "Rocky",
                raza: "Bóxer",
                color: "Atigrado",
                edad: "5 años",
                imgUrl: "https://placehold.co/400x300/8d5524/ffffff?text=Rocky&font=Poppins"
            },
            {
                nombre: "Bella",
                raza: "Persa",
                color: "Blanco",
                edad: "4 años",
                imgUrl: "https://placehold.co/400x300/f1faee/333333?text=Bella&font=Poppins"
            },
            {
                nombre: "Charlie",
                raza: "Bulldog",
                color: "Marrón claro",
                edad: "6 años",
                imgUrl: "https://placehold.co/400x300/cdb4db/ffffff?text=Charlie&font=Poppins"
            },
            {
                nombre: "Kiwi",
                raza: "Periquito",
                color: "Verde y amarillo",
                edad: "1 año",
                imgUrl: "https://placehold.co/400x300/a7c957/ffffff?text=Kiwi&font=Poppins"
            },
            {
                nombre: "Goliat",
                raza: "Hámster Sirio",
                color: "Naranja",
                edad: "6 meses",
                imgUrl: "https://placehold.co/400x300/ff9f1c/ffffff?text=Goliat&font=Poppins"
            },
            {
                nombre: "Dory",
                raza: "Pez Payaso",
                color: "Naranja y blanco",
                edad: "2 años",
                imgUrl: "https://placehold.co/400x300/457b9d/ffffff?text=Dory&font=Poppins"
            },
            {
                nombre: "Flash",
                raza: "Galgo",
                color: "Gris",
                edad: "3 años",
                imgUrl: "https://placehold.co/400x300/adb5bd/ffffff?text=Flash&font=Poppins"
            },
            {
                nombre: "Nieve",
                raza: "Husky Siberiano",
                color: "Blanco y negro",
                edad: "2 años",
                imgUrl: "https://placehold.co/400x300/dee2e6/333333?text=Nieve&font=Poppins"
            }
        ];

        // 2. Get the main container element from the HTML
        const galleryContainer = document.getElementById('pet-gallery');

        // 3. Function to create a card for each pet
        function createPetCard(pet) {
            // Create the main card container
            const card = document.createElement('div');
            card.className = "bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300";

            // Create the image element
            const img = document.createElement('img');
            img.src = pet.imgUrl;
            img.alt = `Foto de ${pet.nombre}`;
            img.className = "w-full h-48 object-cover";

            // Create the content container
            const content = document.createElement('div');
            content.className = "p-6";

            // Create the pet name element
            const name = document.createElement('h3');
            name.className = "text-2xl font-bold text-gray-800 mb-2";
            name.textContent = pet.nombre;

            // Create the pet info paragraph
            const info = document.createElement('p');
            info.className = "text-gray-600";
            info.innerHTML = `
                <strong>Raza:</strong> ${pet.raza}<br>
                <strong>Color:</strong> ${pet.color}<br>
                <strong>Edad:</strong> ${pet.edad}
            `;

            /* // Creacion del boton para cada card
            const btnFavourite = document.createElement("#favoriteButton");
            content.className = "mt-4 w-full max-w-xs bg-indigo-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
  */
        
            // Append all elements together
            content.appendChild(name);
            content.appendChild(info);
            card.appendChild(img);
            card.appendChild(content);
            // card.appendChild(btnFavourite);

            return card;
        }

        // 4. Loop through the pets and add each card to the gallery
        mascotas.forEach(mascota => {
            const petCard = createPetCard(mascota);
            galleryContainer.appendChild(petCard);
        });

        // --- JAVASCRIPT CODE ENDS HERE ---

        // 3. Este es el código JavaScript que le da la funcionalidad
        
        // Obtenemos la referencia al botón en el HTML por su ID
        const favoriteButton = document.getElementById('favoriteButton');
        
        // Variable para saber si es favorito o no
        let isFavorite = false;

        // Añadimos un "escuchador" para el evento 'click'
        favoriteButton.addEventListener('click', () => {
            
            // Invertimos el estado de 'isFavorite'
            isFavorite = !isFavorite;

            // Usamos una condición para cambiar el estilo y el texto
            if (isFavorite) {
                // Si es favorito:
                favoriteButton.textContent = "¡Favorito! ★";
                // Quitamos las clases de color índigo
                favoriteButton.classList.remove('bg-indigo-500', 'hover:bg-indigo-600');
                // Añadimos las clases de color ámbar (dorado)
                favoriteButton.classList.add('bg-amber-400', 'hover:bg-amber-500', 'text-gray-900');
            } else {
                // Si NO es favorito:
                favoriteButton.textContent = "Favorito ♡";
                // Quitamos las clases de color ámbar
                favoriteButton.classList.remove('bg-amber-400', 'hover:bg-amber-500', 'text-gray-900');
                // Añadimos las clases de color índigo originales
                favoriteButton.classList.add('bg-indigo-500', 'hover:bg-indigo-600');
            }
        });