document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       SECTION TOGGLE (MAIN SECTIONS)
    ========================= */
    const sectionToggles = document.querySelectorAll('.section-toggle');

    sectionToggles.forEach(button => {
        const targetId = button.getAttribute('aria-controls');
        const target = document.getElementById(targetId);

        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', String(!expanded));
            target.hidden = expanded;

            if (!expanded) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* =========================
       EXPERIENCE ACCORDION
    ========================= */
const expToggles = document.querySelectorAll('.exp-toggle');

expToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const content = this.nextElementSibling;

        // ✅ Only toggle the clicked one
        if (content.style.display === "block") {
            content.style.display = "none";
            this.classList.remove("active");
        } else {
            content.style.display = "block";
            this.classList.add("active");
        }
    });
});


});