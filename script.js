document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const speed = 300; // Adjust the speed here

        const updateCount = () => {
            const current = +counter.innerText;
            const increment = target / speed;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                countUp(entry.target);
            }
        });
    }, { threshold: 1 });

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});
