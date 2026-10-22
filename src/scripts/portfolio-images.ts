const images = document.querySelectorAll<HTMLImageElement>("[data-portfolio-image]");

images.forEach((image) => {
  const skeleton = image.parentElement?.querySelector<HTMLElement>("[data-skeleton]");
  const showImage = (): void => {
    image.classList.remove("opacity-0");
    image.classList.add("opacity-100");
    skeleton?.classList.add("opacity-0", "pointer-events-none");
  };
  const handleError = (): void => {
    skeleton?.classList.remove("animate-pulse");
    skeleton?.classList.add("bg-gray-200");
    image.classList.remove("opacity-0");
    image.classList.add("opacity-100", "hidden");
  };

  if (image.complete) {
    if (image.naturalWidth > 0) showImage();
    else handleError();
  } else {
    image.addEventListener("load", showImage, { once: true });
    image.addEventListener("error", handleError, { once: true });
  }
});
