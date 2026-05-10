document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.section-toggle');

    toggles.forEach(button => {
        const targetId = button.getAttribute('aria-controls');
        const target = document.getElementById(targetId);

        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!expanded));
            target.hidden = expanded;

            if (!expanded) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});