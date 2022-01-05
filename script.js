const BurgerEl = document.getElementById("burger");
const NavItemsEl = document.getElementById("navItems");
const menuOpen = document.createElement("div");
menuOpen.classList.add("menuOpen");
const overlay = document.querySelector("#overlay");
overlay.appendChild(menuOpen);
const closeBtn = document.querySelector("#closeBtn");
const cookieContainer = document.getElementById("cookieContainer");
const cookieBtn = document.getElementById("cookieBtn");

BurgerEl.addEventListener("click", () => {
    overlay.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
})

BurgerEl.addEventListener("focus",() =>{
    BurgerEl.addEventListener("keydown",(e)=>{
        if(e.code == "Enter"){overlay.style.display = "block";}
    })
})

closeBtn.addEventListener("focus",() =>{
    closeBtn.addEventListener("keydown",(e)=>{
        if(e.code == "Enter"){overlay.style.display = "none";}
    })
})

cookieBtn.addEventListener("click", function () {
    cookieContainer.remove();
  });
