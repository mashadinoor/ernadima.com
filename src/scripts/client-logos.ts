/** Adds a short skeleton shimmer to the temporary text-based client wordmarks. */
const initClientLogos = (): void => {
  const logos = document.querySelectorAll<HTMLElement>("[data-client-logo]");
  if (!logos.length) return;

  logos.forEach((logo) => logo.classList.add("client-logo-skeleton"));

  window.setTimeout(() => {
    logos.forEach((logo) => logo.classList.remove("client-logo-skeleton"));
  }, 650);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initClientLogos, { once: true });
} else {
  initClientLogos();
}
