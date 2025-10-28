// 🌙 DARK MODE TOGGLE
const toggle = document.getElementById("darkModeToggle");
const body = document.body;
const label = document.getElementById("darkModeLabel");

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
  label.style.color = "#1510baff";
} else {
  label.style.color = "#000";
}

// Toggle event
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    label.style.color = "#e0e0e0";
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    label.style.color = "#000";
  }
});

// ✉️ CONTACT FORM (Formspree thank-you message)
const form = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");
if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.style.display = "none"; // hide form
      thankYouMessage.style.display = "block"; // show thank-you message
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  });
}
