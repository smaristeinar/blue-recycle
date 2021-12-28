const BurgerEl = document.getElementById("burger");
const NavItemsEl = document.getElementById("navItems");
const menuOpen = document.createElement("div");
menuOpen.classList.add("menuOpen");
const overlay = document.querySelector('#overlay');
overlay.appendChild(menuOpen);

function burgerToggle() {
    if (NavItemsEl.style.visibility == "hidden") {
        NavItemsEl.style.visibility = "visible";
    }
    else {
        NavItemsEl.style.visibility = "hidden";
    }
}

BurgerEl.addEventListener("click", () => {
    console.log('click open');
    // NavItemsEl.classList.toggle("active")
    overlay.style.display = "block";
    menuOpen.innerHTML = `<span id='closeBtn'>&#10005;</span>
    <ul id="menuNavItems">
            <li class="menuNavItem">Shop</li>
            <li class="menuNavItem">Recycle denim</li>
            <li class="menuNavItem">Contact us</li>
            <li class="menuNavItem">FAQ</li>
        </ul>`
    document.querySelector('#closeBtn').addEventListener('click', () => { closeMenu() })
})

function closeMenu() {
    console.log('click close');
    document.querySelector('#overlay').style.display = "none";
}

/*function myFunction(x) {
    if (!x.matches) { // If media query matches
        NavItemsEl.style.visibility = "visible";
        console.log(x);
    }
  }

  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes*/


