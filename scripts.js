// Set event start and end dates
// const eventStart = new Date("May 10, 2025 09:00:00").getTime(); // Tentative start date, subject to change
// const eventEnd = new Date("May 11, 2025 18:00:00").getTime();
const countdownTimerEl = document.getElementById("countdown-timer");

function updateCountdown() {
    const now = new Date().getTime();

    // If current time is before event start
    if (now < eventStart) {
        const distance = eventStart - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );
        countdownTimerEl.textContent =
            `Event Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    // If current time is between start and end
    else if (now >= eventStart && now < eventEnd) {
        const distance = eventEnd - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );
        countdownTimerEl.textContent =
            `Event Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    // If current time is after event end
    else {
        countdownTimerEl.textContent = "The Conference Has Ended!";
    }
}

setInterval(updateCountdown, 1000);

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