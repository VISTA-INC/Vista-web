// ========================================
// VISTA INC. — Scripts
// ========================================

(function () {
    "use strict";

    // --- Scroll-based nav background ---
    const nav = document.getElementById("nav");

    function updateNav() {
        if (window.scrollY > 40) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    // --- Mobile nav toggle ---
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    toggle.addEventListener("click", function () {
        links.classList.toggle("open");
        toggle.classList.toggle("active");
    });

    // Close mobile nav on link click
    links.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            links.classList.remove("open");
            toggle.classList.remove("active");
        });
    });

    // Close mobile nav on outside click
    document.addEventListener("click", function (e) {
        if (!links.contains(e.target) && !toggle.contains(e.target)) {
            links.classList.remove("open");
            toggle.classList.remove("active");
        }
    });

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            var targetId = this.getAttribute("href");
            if (targetId === "#") return;
            var target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            var navHeight = nav.offsetHeight;
            var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: top, behavior: "smooth" });
        });
    });

    // --- Reveal on scroll ---
    var reveals = document.querySelectorAll(".reveal");

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    reveals.forEach(function (el) {
        observer.observe(el);
    });

    // --- Staggered reveal for sibling elements ---
    var flowSteps = document.querySelectorAll(".flow .reveal");
    flowSteps.forEach(function (step, i) {
        step.style.transitionDelay = i * 0.1 + "s";
    });

    var featureCards = document.querySelectorAll(".feature-card.reveal");
    featureCards.forEach(function (card, i) {
        card.style.transitionDelay = i * 0.08 + "s";
    });

    var teamCards = document.querySelectorAll(".team-card.reveal");
    teamCards.forEach(function (card, i) {
        card.style.transitionDelay = i * 0.12 + "s";
    });
})();
