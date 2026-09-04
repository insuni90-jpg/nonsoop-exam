const MOTION = {
  values: [3, 2, 1],
  countdownDuration: 1000,
  startDuration: 1260,
  ringEasing: "cubic-bezier(.32, 0, .68, 1)",
};

const root = document.documentElement;
const countdownView = document.querySelector("#countdownView");
const countdownRing = document.querySelector("#countdownRing");
const countdownNumber = document.querySelector("#countdownNumber");
const motionCaption = document.querySelector("#motionCaption");
const startView = document.querySelector("#startView");
const startPortal = document.querySelector("#startPortal");
const startRing = document.querySelector("#startRing");
const startText = document.querySelector("#startText");
const replayButton = document.querySelector("#replayButton");

let isPlaying = false;

root.style.setProperty("--countdown-duration", `${MOTION.countdownDuration}ms`);
root.style.setProperty("--start-duration", `${MOTION.startDuration}ms`);

function cancelAnimations(element) {
  element.getAnimations().forEach(animation => animation.cancel());
}

function resetMotion() {
  [countdownRing, countdownNumber, startPortal, startRing, startText]
    .forEach(cancelAnimations);

  countdownView.hidden = false;
  countdownView.classList.remove("is-exiting");
  motionCaption.classList.remove("show-calm");
  startView.hidden = true;
}

function animateRingStep(isFinalStep) {
  cancelAnimations(countdownRing);

  const progressAnimation = countdownRing.animate([
    { strokeDashoffset: 100 },
    { strokeDashoffset: 0 },
  ], {
    duration: MOTION.countdownDuration,
    easing: MOTION.ringEasing,
    fill: "forwards",
  });

  const visibilityFrames = isFinalStep
    ? [
        { offset: 0, opacity: 0 },
        { offset: .06, opacity: 1 },
        { offset: 1, opacity: 1 },
      ]
    : [
        { offset: 0, opacity: 0 },
        { offset: .06, opacity: 1 },
        { offset: .88, opacity: 1 },
        { offset: 1, opacity: 0 },
      ];

  const visibilityAnimation = countdownRing.animate(visibilityFrames, {
    duration: MOTION.countdownDuration,
    easing: "linear",
    fill: "forwards",
  });

  return Promise.all([
    progressAnimation.finished,
    visibilityAnimation.finished,
  ]);
}

function animateNumberStep(value) {
  cancelAnimations(countdownNumber);
  countdownNumber.textContent = value;

  return countdownNumber.animate([
    { offset: 0, opacity: 0, transform: "scale(.94)", easing: "cubic-bezier(.2, .75, .25, 1)" },
    { offset: .16, opacity: 1, transform: "scale(.985)", easing: "linear" },
    { offset: .78, opacity: 1, transform: "scale(1.025)", easing: "cubic-bezier(.4, 0, 1, 1)" },
    { offset: 1, opacity: 0, transform: "scale(1.055)" },
  ], {
    duration: MOTION.countdownDuration,
    fill: "both",
  }).finished;
}

function animateStart() {
  startView.hidden = false;
  countdownView.classList.add("is-exiting");

  const ringReveal = startRing.animate([
    { offset: 0, opacity: 0 },
    { offset: .08, opacity: 1 },
    { offset: 1, opacity: 1 },
  ], {
    duration: MOTION.startDuration,
    easing: "ease-out",
    fill: "forwards",
  });

  const portalAnimation = startPortal.animate([
    { offset: 0, opacity: 1, transform: "scale(1)" },
    { offset: .1, opacity: 1, transform: "scale(.985)" },
    { offset: .24, opacity: .98, transform: "scale(1.035)" },
    { offset: .58, opacity: .62, transform: "scale(1.16)" },
    { offset: .82, opacity: .23, transform: "scale(1.29)" },
    { offset: 1, opacity: 0, transform: "scale(1.4)" },
  ], {
    duration: MOTION.startDuration,
    easing: "cubic-bezier(.16, .72, .2, 1)",
    fill: "forwards",
  });

  const textAnimation = startText.animate([
    { offset: 0, opacity: 0, transform: "scale(.9)" },
    { offset: .15, opacity: 1, transform: "scale(.99)" },
    { offset: .24, opacity: 1, transform: "scale(.982)" },
    { offset: .38, opacity: 1, transform: "scale(1.01)" },
    { offset: 1, opacity: 1, transform: "scale(1.04)" },
  ], {
    duration: MOTION.startDuration,
    easing: "cubic-bezier(.18, .72, .2, 1)",
    fill: "forwards",
  });

  return Promise.all([
    ringReveal.finished,
    portalAnimation.finished,
    textAnimation.finished,
  ]);
}

async function playCountdown() {
  if (isPlaying) return;

  isPlaying = true;
  replayButton.disabled = true;
  resetMotion();

  for (const value of MOTION.values) {
    motionCaption.classList.toggle("show-calm", value === 1);
    await Promise.all([
      animateRingStep(value === 1),
      animateNumberStep(value),
    ]);
  }

  await animateStart();
  countdownView.hidden = true;
  replayButton.disabled = false;
  isPlaying = false;
}

replayButton.addEventListener("click", playCountdown);
window.playCountdown = playCountdown;
requestAnimationFrame(playCountdown);
