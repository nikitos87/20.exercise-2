import "./index.css";

const consentBtn = document.querySelector(".cookie-consent__button");
const cookieConsent = document.querySelector(".cookie-consent");

consentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!localStorage.getItem("button")) {
    cookieConsent.classList.add("hide");
    localStorage.setItem("button", true);
  }
});

if (localStorage.getItem("button")) {
  cookieConsent.classList.add("hide");
}
