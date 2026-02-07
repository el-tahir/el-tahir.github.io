const THEME_KEY = "portfolio-theme";
const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const yearEl = document.getElementById("year");

function applyTheme(theme) {
    const active = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", active);
    if (toggleButton) {
        toggleButton.textContent = active === "dark" ? "Light mode" : "Dark mode";
    }
}

applyTheme(localStorage.getItem(THEME_KEY) || "dark");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
