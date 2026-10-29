document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const contactList = document.getElementById('contactList');

    hamburger.addEventListener('click', function() {
        contactList.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const links = contactList.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            contactList.classList.remove('active');
        });
    });
});