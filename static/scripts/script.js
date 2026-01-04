function toggleMode() {
    // Toggle dark mode on and off
    document.body.classList.toggle('dark-mode');

    // Save current theme for other webpages
    let theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);

    // Change toggle icon to opposite theme icon
    if (theme == 'dark-mode') {
        document.getElementById("toggleIcon").textContent = "sunny";
    } else {
        document.getElementById("toggleIcon").textContent = "bedtime";
    }
}

window.onload = function() {
    let currentTheme = localStorage.getItem('theme');

    // Adjust visual theme of page
    if (currentTheme == 'dark-mode') {
        document.body.classList.toggle('dark-mode');
        document.getElementById("toggleIcon").textContent = "sunny";
    } else {
        document.getElementById("toggleIcon").textContent = "bedtime";
    }
}