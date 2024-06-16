
const menu = document.getElementById('menu-mobile');

const toggleMenu = () => {
    const menu = document.getElementById('menu');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
        console.log(menu)
    }
    
};

menu.addEventListener('click', toggleMenu);
