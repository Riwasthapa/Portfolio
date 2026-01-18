// Dark / Light Mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
};

// Contact Form Validation
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        status.textContent = "All fields are required.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Message sent successfully (mock).";
    status.style.color = "green";
    form.reset();
});
