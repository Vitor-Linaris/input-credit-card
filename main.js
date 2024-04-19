const ccNumberInput = document.getElementById("cc-number");
const ccNameInput = document.getElementById("cc-name");
const ccExpMonth = document.getElementById("cc-exp-month");
const ccExpYear = document.getElementById("cc-exp-year");
const ccCVV = document.getElementById("cc-cvv");

const cardNumberImage = document.querySelector(".card-number");
const cardNameImage = document.querySelector(".card-name");
const cardExpiryMonth = document.querySelector(".card-exp-month");
const cardExpiryYear = document.querySelector(".card-exp-year");
const cardCVV = document.querySelector(".card-cvv");

const cardFront = document.querySelector(".front-card");
const cardBack = document.querySelector(".back-card");

function formatCardNumber(string) {
  if (string) {
    const formatCard = string.replaceAll(" ", "").match(/.{1,4}/g);
    return formatCard.join(" ");
  }

  return "";
}

ccNumberInput.addEventListener("input", (e) => {
  cardNumberImage.textContent =
    formatCardNumber(e.target.value) || "#### #### #### ####";

  ccNumberInput.value = formatCardNumber(e.target.value);
});

ccNameInput.addEventListener("input", (e) => {
  if (!ccNameInput.value) {
    return (cardNameImage.textContent = "Seu Nome");
  }
  ccNameInput.value = cardNameImage.textContent = e.target.value;
});

ccExpMonth.addEventListener("input", (e) => {
  if (!ccExpMonth.value) {
    return (cardExpiryMonth.textContent = "mm");
  }

  ccExpMonth.value = cardExpiryMonth.textContent = e.target.value;
});

ccExpYear.addEventListener("input", (e) => {
  if (!ccExpYear.value) {
    return (cardExpiryYear.textContent = "aa");
  }

  ccExpYear.value = cardExpiryYear.textContent = e.target.value;
});

ccCVV.addEventListener("input", (e) => {
  if (!ccCVV.value) {
    return (cardCVV.textContent = "###");
  }

  ccCVV.value = cardCVV.textContent = e.target.value;
});

ccCVV.addEventListener("focus", () => {
  cardFront.classList.remove("flip-card", "flip-card-2");
  cardBack.classList.remove("flip-card", "flip-card-2");
  cardFront.classList.add("flip-card"),
    setTimeout(() => {
      cardFront.classList.remove("flip-card"),
        (cardFront.style = "display:none"),
        (cardBack.style = "display:flex"),
        cardBack.classList.add("flip-card-2");
    });
});

ccCVV.addEventListener("blur", () => {
  cardBack.classList.remove("flip-card", "flip-card-2");
  cardFront.classList.remove("flip-card", "flip-card-2");
  cardBack.classList.add("flip-card"),
    setTimeout(() => {
      cardBack.classList.remove("flip-card"),
        (cardBack.style = "display:none"),
        (cardFront.style = "display:flex"),
        cardFront.classList.add("flip-card-2");
    });
});
