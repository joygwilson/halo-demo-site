document.getElementById("push-btn")?.addEventListener("click", () => {
  if (window.triggerOneSignalPrompt) {
    window.triggerOneSignalPrompt();
  }
});
