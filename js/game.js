const nextBtn = document.getElementById("nextBtn");
const intro = document.getElementById("intro");
const rules = document.getElementById("rules");
const dolphin = document.getElementById("dolphin");
const dolphinSound = document.getElementById("dolphinSound");
const transition = document.getElementById("transition");

// Khi nhấn NEXT hoặc click màn hình → chuyển cảnh
nextBtn.addEventListener("click", startTransition);
intro.addEventListener("click", startTransition);

function startTransition() {
  transition.style.opacity = "1";
  rules.classList.remove("hidden");

  // Làm hiệu ứng fade đen rồi sang màn 2
  setTimeout(() => {
    intro.style.display = "none";
    transition.style.transition = "opacity 1s ease";
    transition.style.opacity = "0";

    // Sau khi màn đen biến mất → cá heo xuất hiện
    setTimeout(() => {
      dolphin.classList.remove("hidden");
      dolphin.style.transform = "translate(-50%, -50%) scale(1)";
      setTimeout(() => dolphinSound.play(), 1500);
    }, 800);
  }, 1000);
}
