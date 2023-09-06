document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const hideButton = document.getElementById('hideButton');
    const showButton = document.getElementById('showButton');

    const tiltOptions = {
        max: 25,
        speed: 400,
        scale: 1.1,
        glare: true,
        "max-glare": 0.5
    };

    // Initialize Vanilla Tilt
    VanillaTilt.init(sidebar, tiltOptions);

    hideButton.addEventListener('click', function() {
        // Destroy Vanilla Tilt before hiding
        sidebar.vanillaTilt.destroy();
        
        // Fully move the sidebar out of view
        sidebar.style.transform = 'translateX(-100%)';

        // Hide the hideButton and show the showButton
        hideButton.style.display = 'none';
        showButton.style.display = 'block';
    });

    showButton.addEventListener('click', function() {
        // Bring back the sidebar into view
        sidebar.style.transform = 'translateX(0)';

        // Show the hideButton and hide the showButton
        hideButton.style.display = 'block';
        showButton.style.display = 'none';

        // Reinitialize Vanilla Tilt after showing
        VanillaTilt.init(sidebar, tiltOptions);
    });
});
