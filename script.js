const BurgerEl = document.getElementById("burger");
const NavItemsEl = document.getElementById("navItems");
const cookieDiv = document.getElementById("cookieDiv");
const cookieBtn = document.getElementById("cookieBtn");

function burgerToggle() {
  if (NavItemsEl.style.visibility == "hidden") {
    NavItemsEl.style.visibility = "visible";
  } else {
    NavItemsEl.style.visibility = "hidden";
  }
}

BurgerEl.addEventListener("click", () => {
  NavItemsEl.classList.toggle("active");
});

cookieBtn.addEventListener("click", function () {
  cookieDiv.remove();
});

/*function myFunction(x) {
    if (!x.matches) { // If media query matches
        NavItemsEl.style.visibility = "visible";
        console.log(x);
    } 
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes*/
