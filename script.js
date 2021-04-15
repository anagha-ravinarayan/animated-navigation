const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

// Add animation class list to each nav item
function animateNav(dir1, dir2) {
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${dir1}-${index + 1}`, `slide-${dir2}-${index + 1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars open/closed
    menuBars.classList.toggle('change');

    // Toggle: Menu active/inactive
    overlay.hidden = false;     // Workaround for empty cache and hard reload
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');     // Animate in overlay
        animateNav('out', 'in');    // Animate in nav -items

    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');     // Animate out overlay
        animateNav('in', 'out');    // Animate out nav -items
    }
}

//  Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});