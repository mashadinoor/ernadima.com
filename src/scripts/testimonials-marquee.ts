const marquee = document.querySelector<HTMLElement>(".testimonial-marquee");
const track = document.querySelector<HTMLElement>(".testimonial-track");

if (marquee && track) {
  const animation = track.getAnimations()[0];
  if (animation) {
    const normalSpeed = 1;
    const stoppedSpeed = 0;
    let targetSpeed = normalSpeed;
    let currentSpeed = normalSpeed;
    let lastTime = performance.now();

    const updateSpeed = (time: number): void => {
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      currentSpeed += (targetSpeed - currentSpeed) * delta * 4;
      animation.playbackRate = currentSpeed;
      requestAnimationFrame(updateSpeed);
    };

    marquee.addEventListener("mouseenter", () => { targetSpeed = stoppedSpeed; });
    marquee.addEventListener("mouseleave", () => { targetSpeed = normalSpeed; });
    requestAnimationFrame(updateSpeed);
  }
}
