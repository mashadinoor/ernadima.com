const menuButton = document.querySelector<HTMLButtonElement>("#mobile-menu-button");
const menu = document.querySelector<HTMLElement>("#mobile-menu");
const overlay = document.querySelector<HTMLElement>("#mobile-menu-overlay");
const menuIcon = document.querySelector<HTMLElement>("#menu-icon");

if (menuButton && menu && overlay && menuIcon) {
  const openMenu = (): void => {
    menuButton.setAttribute("aria-expanded", "true");
    menu.classList.remove("pointer-events-none", "opacity-0", "-translate-y-3");
    menu.classList.add("pointer-events-auto", "opacity-100", "translate-y-0");
    overlay.classList.remove("pointer-events-none", "opacity-0");
    overlay.classList.add("pointer-events-auto", "opacity-100");
    menu.setAttribute("aria-hidden", "false");
    menuIcon.textContent = "close";
  };

  const closeMenu = (): void => {
    menuButton.setAttribute("aria-expanded", "false");
    menu.classList.remove("pointer-events-auto", "opacity-100", "translate-y-0");
    menu.classList.add("pointer-events-none", "opacity-0", "-translate-y-3");
    overlay.classList.remove("pointer-events-auto", "opacity-100");
    overlay.classList.add("pointer-events-none", "opacity-0");
    menu.setAttribute("aria-hidden", "true");
    menuIcon.textContent = "menu";
  };

  menuButton.addEventListener("click", () => {
    if (menuButton.getAttribute("aria-expanded") === "true") closeMenu();
    else openMenu();
  });
  overlay.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  });
}
