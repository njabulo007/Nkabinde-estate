   // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add some interactive paint splash effects when hovering over service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.05) rotate(' + (Math.random() * 4 - 2) + 'deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            });
        });

        // Dynamic color changes for the main heading
        const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#E67E22'];
        let colorIndex = 0;
        
        setInterval(() => {
            const heading = document.querySelector('.hero h1');
            if (heading) {
                heading.style.color = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }
        }, 2000);