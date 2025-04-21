document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["Convert More,", "Support Better,", "Save Time"];
    let current = 0;
    const textElement = document.getElementById("dynamic-text");

    function typeText(text, callback) {
      let i = 0;
      textElement.textContent = "";
      const interval = setInterval(() => {
        textElement.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(callback, 1500); // wait before next text
        }
      }, 100);
    }

    function loopTexts() {
      if (!textElement) return;
      typeText(phrases[current], () => {
        current = (current + 1) % phrases.length;
        loopTexts();
      });
    }

    loopTexts();
  });

