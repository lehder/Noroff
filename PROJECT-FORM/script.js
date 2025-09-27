document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos del DOM
    const form = document.getElementById('profile-form');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileImage = document.getElementById('profile-image');
    
    // Escuchar el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        // Prevenir el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();

        // Obtener los valores de los campos de entrada
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const imageUrlInput = document.getElementById('image-url').value;

        // Actualizar el contenido de la tarjeta de perfil
        profileName.textContent = nameInput;
        profileEmail.textContent = emailInput;
        
        // Actualizar la URL de la imagen
        profileImage.src = imageUrlInput;
        
        // Opcional: limpiar los campos del formulario después de enviar
        form.reset();

        // Opcional: mostrar un mensaje de éxito
        alert('Profile updated successfully!');
    });

});