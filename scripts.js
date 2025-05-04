// Set event start and end dates
// const eventStart = new Date("May 10, 2025 09:00:00").getTime(); // Tentative start date, subject to change
// const eventEnd = new Date("May 11, 2025 18:00:00").getTime();

document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const eventStart = new Date("May 10, 2025 09:00:00 GMT").getTime();
        const eventEnd = new Date("May 11, 2025 16:00:00 GMT").getTime();
        const now = new Date().getTime();
        const countdownElement = document.getElementById("countdown-timer");

        if (now < eventStart) {
            // Before event - Countdown
            const timeLeft = eventStart - now;
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else if (now >= eventStart && now <= eventEnd) {
            // During event
            countdownElement.innerHTML = "🎉 Event in Progress!";
        } else {
            // After event
            countdownElement.innerHTML = "🚀 Event Over - See you next year!";
        }
    }

    updateCountdown(); // Initial call
    setInterval(updateCountdown, 1000); // Update every second for real-time countdown
});

// Schedule tabs functionality
function showScheduleTab(tabId) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.schedule-tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll('.schedule-tab-btn');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Show the selected tab content
  document.getElementById(tabId).classList.add('active');
  
  // Add active class to the clicked button
  const selectedButton = document.querySelector(`.schedule-tab-btn[onclick="showScheduleTab('${tabId}')"]`);
  if (selectedButton) {
    selectedButton.classList.add('active');
  }
}

// Modal open/close logic
function openModal(id) {
    document.getElementById(id).style.display = "block";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function handleResize() {
  const pdfViewer = document.getElementById("pdf-viewer");
  const mobileWidth = 768; // Adjust this value if needed

  if (window.innerWidth <= mobileWidth) {
    pdfViewer.style.display = "none"; // Hide on mobile
  } else {
    pdfViewer.style.display = "block"; // Show on larger screens (or however it's styled in your CSS)
  }
}

// Call handleResize on page load and when the window is resized
window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);

// Event listener for navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  // if (!menuToggle) {
  //   console.error("Menu toggle element not found.");
  //   return;
  // }

  menuToggle.addEventListener("click", function () {
    //console.log("Hamburger menu clicked.");
    navMenu.classList.toggle("active");
    //console.log("navMenu class list:", navMenu.classList);
  });
});