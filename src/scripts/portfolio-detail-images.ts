function revealImage(image: HTMLImageElement, skeleton: HTMLElement | null): void {
  const reveal = (): void => {
    image.classList.remove("opacity-0");
    image.classList.add("opacity-100");
    skeleton?.classList.add("opacity-0", "pointer-events-none");
  };
  const fail = (): void => {
    skeleton?.classList.remove("animate-pulse");
    skeleton?.classList.add("bg-gray-300");
    image.classList.remove("opacity-0");
    image.classList.add("opacity-100", "hidden");
  };

  if (image.complete) {
    if (image.naturalWidth > 0) reveal();
    else fail();
  } else {
    image.addEventListener("load", reveal, { once: true });
    image.addEventListener("error", fail, { once: true });
  }
}

const cover = document.querySelector<HTMLImageElement>("[data-detail-cover-image]");
if (cover) {
  revealImage(cover, document.querySelector<HTMLElement>("[data-detail-cover-skeleton]"));
}

document.querySelectorAll<HTMLImageElement>("[data-gallery-image]").forEach((image) => {
  const skeleton = image.parentElement?.querySelector<HTMLElement>("[data-gallery-skeleton]") ?? null;
  revealImage(image, skeleton);
});
