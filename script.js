const BurgerEl = document.getElementById("burger");
const NavItemsEl = document.getElementById("navItems")


BurgerEl.addEventListener("click", ()=>{    
    NavItemsEl.classList.toggle("active")   
})


