document.addEventListener('DOMContentLoaded', function() {
        const navLinks=document.querySelectorAll('.topnav a');
        function setActiveLink() {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const hash = window.location.hash;
            if (hash) {
                const activeLink = document.querySelector(`.topnav a[href="${hash}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
        window.addEventListener('scroll', setActiveLink);
        window.addEventListener('hashchange', setActiveLink);
        
        setActiveLink();
    });