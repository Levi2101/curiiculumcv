// Función para alternar el menú
function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close'); // Corregir el nombre de la clase
    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}

// Función para ajustar la imagen en el perfil mientras se hace scroll
function fixPhotonScroll() {
    var photo = document.getElementById("photo-profile");
    window.scrollY > 78 ? photo.style.marginTop = '0' : photo.style.marginTop = '-7rem';
    window.addEventListener("scroll", fixPhotonScroll, false); // Asegúrate de usar la función correcta
}

// Función para mostrar la imagen en el modal
function showImage(image) {
    var newImage = document.createElement('img');
    newImage.src = image.src; // Corregir typo: 'newInage' → 'newImage'
    newImage.removeAttribute('onclick'); // Quitar el evento onclick de la imagen

    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal'); // Usar la clase 'showModal' para mostrar el modal

    // Eliminar la imagen previa si ya existe en el modal
    var existingImage = modal.querySelector('img');
    if (existingImage) {
        modal.removeChild(existingImage);
    }

    modal.appendChild(newImage); // Añadir la nueva imagen al modal
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal'); // Corregir 'classlist' → 'classList'
}
