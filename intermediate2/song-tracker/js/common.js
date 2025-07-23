// Common JavaScript functions for all pages

// API URL for json-server
const API_URL = "http://localhost:3000/songs";

// Load saved theme when page loads
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);

  const button = document.querySelector(".theme-toggle button");
  if (savedTheme === "dark") {
    button.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
    button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
}

// Toggle between light and dark themes
function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const button = document.querySelector(".theme-toggle button");
  if (newTheme === "dark") {
    button.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
    button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
}

// Toggle sidebar open/close
function toggleSidebar() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Close sidebar
function closeSidebar() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  hamburger.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

// Show notification message
function showNotification(message, type) {
  const alertClass = type === "success" ? "alert-success" : "alert-danger";
  const notificationHtml = `
        <div class="alert ${alertClass} alert-dismissible fade show position-fixed" 
             style="top: 20px; right: 20px; z-index: 9999; min-width: 300px;">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", notificationHtml);

  setTimeout(() => {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }, 3000);
}

// Set up event listeners when page loads
function setupCommonEvents() {
  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", toggleSidebar);

  // Sidebar overlay
  const overlay = document.querySelector(".sidebar-overlay");
  overlay.addEventListener("click", closeSidebar);

  // Theme toggle
  const themeButton = document.querySelector(".theme-toggle button");
  themeButton.addEventListener("click", toggleTheme);
}

// Initialize common functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadTheme();
  setupCommonEvents();
});
