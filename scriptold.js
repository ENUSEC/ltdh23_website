window.addEventListener('load', function() {
    const loadingText = document.getElementById('loading-text');
    const loadingMessage = 'Initialising';
    let dotCount = 0;
    const maxDots = 3;

    // Function to add dots
    function addDots() {
        dotCount = (dotCount + 1) % (maxDots + 1);
        let dots = '.'.repeat(dotCount);
        loadingText.textContent = loadingMessage + dots;
    }

    // Call addDots every 500ms
    const dotInterval = setInterval(addDots, 500);

    // Simulate loading time (e.g., 2 seconds)
    setTimeout(function() {
        clearInterval(dotInterval);
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.body.style.overflow = 'auto';

        // Start the countdown timer after loading is complete
        // Countdown Timer
        var countDownDate = new Date("May 10, 2025 09:00:00").getTime();
        var eventEndDate = new Date("May 11, 2025 21:00:00").getTime();

        // Update the countdown every 1 second
        var countdownfunction = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the time difference between now and the countdown date
            var distance = countDownDate - now;
            var timeUntilEnd = eventEndDate - now;

            // If the event has ended
            if (timeUntilEnd < 0) {
                clearInterval(countdownfunction);
                document.getElementById("countdown").innerHTML = "<span class='event-ended'>This event has ended</span>";
                return;
            }

            // If the event has started
            if (distance < 0) {
                document.getElementById("countdown").innerHTML = "<span class='event-started'>The event is live!</span>";
                return;
            }

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in the respective elements
            document.getElementById("days").innerHTML = ("0" + days).slice(-2);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

        }, 1000);

    }, 2000);
});




function galf() {
    return '}ϱɒlʇɒɈnƨiγllɒɈoɈƨiʜɈ{ʜbɈl';
}