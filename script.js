document.addEventListener('DOMContentLoaded', () => {

    // --- MANEJO DEL DISCLAIMER ---
    const disclaimerBanner = document.getElementById('disclaimer-banner');
    const closeDisclaimerBtn = document.getElementById('disclaimer-close-btn');

    // Si el usuario ya cerró el disclaimer, no lo mostramos
    if (localStorage.getItem('disclaimerClosed') === 'true') {
        disclaimerBanner.classList.add('hidden');
    }

    closeDisclaimerBtn.addEventListener('click', () => {
        disclaimerBanner.style.opacity = '0';
        setTimeout(() => {
            disclaimerBanner.classList.add('hidden');
        }, 500);
        localStorage.setItem('disclaimerClosed', 'true');
    });

    // --- SMOOTH SCROLL PARA ANCLAS ---
    const navLinks = document.querySelectorAll('.main-nav a, .hero a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // --- ACORDEÓN PARA FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Opcional: Cerrar otros acordeones al abrir uno nuevo
            // faqItems.forEach(i => {
            //     i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            //     i.querySelector('.faq-answer').style.maxHeight = null;
            // });

            question.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // --- BOTÓN "VOLVER ARRIBA" ---
    const backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

});
