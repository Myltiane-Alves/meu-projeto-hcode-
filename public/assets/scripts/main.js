
const body = document.querySelector('body');
const btnOpen = document.getElementById("btn-open");
const closeMenu = document.querySelectorAll('[data-close ="menu"]');
const menuLinks = document.querySelectorAll('.menu a');
const menu = document.querySelector('#header .menu')
const btnLogout = document.querySelector("#header .menu .footer button")

if(btnLogout) {

    btnLogout.addEventListener("click", e => {
        
        auth.signOut().then(() => {

        }).catch(err => console.error(err));
    })
}



if(btnOpen) {
    btnOpen.addEventListener('click', e => {
        body.classList.add('open-menu')
    })
}

if(closeMenu) {
    closeMenu.forEach(el => {
        el.addEventListener('click', e => {
            body.classList.remove('open-menu')
        })
    })
}

if(menuLinks) {
    menuLinks.forEach(el => {
        el.addEventListener('click', e => {
            body.classList.remove('open-menu')
        })
    })
}