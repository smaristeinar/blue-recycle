const BurgerEl = document.getElementById("burger");
const NavItemsEl = document.getElementById("navItems");
const menuOpen = document.createElement("div");
menuOpen.classList.add("menuOpen");
const overlay = document.querySelector('#overlay');
overlay.appendChild(menuOpen);
const closeBtn = document.querySelector('#closeBtn');

function burgerToggle() {
    if (NavItemsEl.style.visibility == "hidden") {
        NavItemsEl.style.visibility = "visible";
    }
    else {
        NavItemsEl.style.visibility = "hidden";
    }
}

BurgerEl.addEventListener("click", () => {
    overlay.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
})



