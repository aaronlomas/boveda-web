export function typeEffectInfinite(
  element: HTMLElement,
  text: string,
  writeSpeed: number = 120,
  deleteSpeed: number = 60,
  pauseDuration: number = 2000,
): void {
  if (!element) return;

  let currentText = "";
  let isDeleting = false;
  let index = 0

  function loop(): void {
    if (isDeleting) {
      currentText = text.substring(0, currentText.length - 1);
    } else {
      currentText = text.substring(0, currentText.length + 1);
    }
    element.textContent = currentText;
  
    let currentSpeed = isDeleting ? deleteSpeed : writeSpeed;
  
    //L(t) == n
    if (!isDeleting && currentText === text) {
      currentSpeed = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentSpeed = 500;
    }
    setTimeout(loop, currentSpeed);
  }

  loop();
}
