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

document.addEventListener("DOMContentLoaded", function() {
    function loadHTML(url, id, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            document.getElementById(id).innerHTML = this.responseText;
            if (callback) callback(); // Call the callback after loading the content
        };
        xhr.send();
    }

    loadHTML('/navigation.html', 'navigation-placeholder', function() {
        // Navigation is fully loaded, now add event listeners
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('header nav');
        const body = document.body;

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                console.log("clicked button");
                nav.parentElement.classList.toggle('nav-open');
                body.classList.toggle('menu-open');
            });
        }
    });

    loadHTML('/footer.html', 'footer-placeholder');
});
