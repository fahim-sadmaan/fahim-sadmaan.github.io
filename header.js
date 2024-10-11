        // Get the header element
        const header = document.querySelector('header');

        // Listen for scroll events
        window.addEventListener('scroll', () => {
            // Check if scrolled 100px from the top
            if (window.scrollY >= 150) {
                // Apply blur effect to the header
                header.style.backgroundColor = 'rgba(39, 39, 39, 0.77)'
                header.style['-webkit-backdrop-filter'] = 'blur(3px)';
                header.style.backdropFilter = 'blur(3px)'
            } else {
                // Remove blur effect
                header.style.backgroundColor = 'transparent'
                header.style['-webkit-backdrop-filter'] = 'none';
                header.style.backdropFilter = 'none'
            }
        });