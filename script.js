const BurgerEl = document.getElementById("burger");
const NavItemsEl = document.getElementById("navItems");
const menuOpen = document.createElement("div");
menuOpen.classList.add("menuOpen");
const overlay = document.querySelector('#overlay');
overlay.appendChild(menuOpen);
const closeBtn = document.querySelector('#closeBtn');


BurgerEl.addEventListener("click", () => {
    overlay.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
})

BurgerEl.addEventListener("focus",() =>{
    BurgerEl.addEventListener("keydown",(e)=>{
        if(e.code == "enter"){overlay.style.display = "block";}
    })
})

closeBtn.addEventListener("focus",() =>{
    closeBtn.addEventListener("keydown",(e)=>{
        if(e.code == "enter"){overlay.style.display = "none";}
    })
})




