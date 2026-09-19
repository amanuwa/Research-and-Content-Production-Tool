// session-timeout.js

// Set timeout duration in milliseconds (e.g., 5 minutes = 300,000 ms)
const INACTIVITY_TIMEOUT = 5 * 60 * 1000; 

let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        alert("Session expired due to inactivity.");
        window.location.href = 'signin.html'; // Adjust to your actual sign-in page filename
    }, INACTIVITY_TIMEOUT);
}

// Automatically bind events when the page loads
const activityEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];

activityEvents.forEach(event => {
    window.addEventListener(event, resetInactivityTimer, true);
});

// Initialize timer on load
resetInactivityTimer();
