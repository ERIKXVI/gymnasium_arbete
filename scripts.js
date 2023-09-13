document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');

    const tiltOptions = {
        max: 0,
        speed: 400,
        scale: 1.1,
        glare: false,
        "max-glare": 0.5
    };

    // Initialize Vanilla Tilt
    VanillaTilt.init(sidebar, tiltOptions);
});
