document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');
    
    menuBtn.addEventListener('click', function() {
        sideMenu.classList.toggle('hidden');
    });
});