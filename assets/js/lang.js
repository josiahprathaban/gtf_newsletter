// Function to change the language and update the view
function changeLanguage(lang) {
  const langButtons = document.querySelectorAll(".lang-btn");
  const tamilContent = document.querySelectorAll(".tamil-content");
  const englishContent = document.querySelectorAll(".english-content");
  langButtons.forEach((button) => button.classList.remove("active"));
  
  if (lang === "en") {
    tamilContent.forEach((content) => (content.style.display = "none"));
    englishContent.forEach((content) => (content.style.display = "block"));
    document.getElementById("en-btn").classList.add("active");
  } else if (lang === "ta") {
    tamilContent.forEach((content) => (content.style.display = "block"));
    englishContent.forEach((content) => (content.style.display = "none"));
    document.getElementById("ta-btn").classList.add("active");
  }

  // Store the selected language in local storage
  localStorage.setItem("selectedLanguage", lang);
}

function checkLanguage(){
    const selectedLanguage = localStorage.getItem("selectedLanguage");

  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  } else {
    // If no language is set in local storage, set the default language (English in this case)
    changeLanguage("en");
  }
}

// Check if there's a previously selected language in local storage and apply it
document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = localStorage.getItem("selectedLanguage");

  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  } else {
    // If no language is set in local storage, set the default language (English in this case)
    changeLanguage("en");
  }
});
