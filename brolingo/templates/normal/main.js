(() => {
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  let words = document
    .querySelector("#translation-false-words")
    .textContent.split(",");

  const correct = document.querySelector("#translation-sentence").textContent;

  words = [...words, ...correct.split(" ")];

  shuffle(words);

  const choicesContainer = document.querySelector("#choices");
  const responseSlot = document.querySelector("#response-slot");
  const typeAnswerElem = document.querySelector("#typeans");

  words.forEach((word) => {
    const button = document.createElement("button");
    button.textContent = word;
    button.className = "word-button";
    const shadowButton = document.createElement("button");
    shadowButton.textContent = word;
    shadowButton.className = "word-button shadow";

    button.onclick = () => {
      if (button.parentNode === responseSlot) {
        const index = Array.from(choicesContainer.children).indexOf(
          shadowButton
        );
        choicesContainer.insertBefore(button, choicesContainer.children[index]);
        choicesContainer.removeChild(shadowButton);
      } else {
        const index = Array.from(choicesContainer.children).indexOf(button);
        choicesContainer.insertBefore(
          shadowButton,
          choicesContainer.children[index]
        );
        responseSlot.appendChild(button);
        // choicesContainer.appendChild(shadowButton);
      }

      const responseElements = responseSlot.children;
      const responseTexts = Array.from(responseElements).map(
        (el) => el.textContent
      );

      if (typeAnswerElem) {
        const newValue = responseTexts.join(" ");

        typeAnswerElem.value = newValue;
      } else {
        console.warn("⚠️ typeAnswerElem not found!");
      }
    };

    choicesContainer.appendChild(button);
  });

  // Function to check the answer
  window.checkAnswer = function () {
    const responseElements = responseSlot.children;
    const responseTexts = Array.from(responseElements).map(
      (el) => el.textContent
    );
    const userAnswer = responseTexts.join(" ").trim();
    const correctAnswer = correct.trim();

    // Update the type answer field if it exists
    if (typeAnswerElem) {
      typeAnswerElem.value = userAnswer;
    }

    // Trigger Anki's answer checking
    // This will show the back of the card
    if (typeof pycmd !== "undefined") {
      pycmd("ans");
    } else {
      // Fallback for when pycmd is not available
      console.log("User answer:", userAnswer);
      console.log("Correct answer:", correctAnswer);
    }
  };
})();
