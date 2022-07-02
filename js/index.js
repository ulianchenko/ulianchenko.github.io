window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu_item');
    const hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    });
    
    menuItems.forEach(menuItem => menuItem.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    }));
});