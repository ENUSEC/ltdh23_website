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

    // Simulate loading time (e.g., 5 seconds)
    setTimeout(function() {
        clearInterval(dotInterval);
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.body.style.overflow = 'auto';
    }, 2000);
});
