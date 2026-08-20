/* =========================================================
   DEVORA DIGITAL
   PORTFOLIO JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       01. PORTFOLIO FILTER
    ====================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");

    const portfolioEmpty =
        document.getElementById("portfolioEmpty");


    filterButtons.forEach(function (button) {


        button.addEventListener("click", function () {


            /* Get selected category */

            const selectedFilter =
                button.getAttribute("data-filter");


            /* Remove active class */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Add active class */

            button.classList.add("active");


            let visibleProjects = 0;


            /* =================================================
               FILTER CARDS
            ================================================== */

            portfolioCards.forEach(function (card) {


                const category =
                    card.getAttribute("data-category");


                const shouldShow =
                    selectedFilter === "all" ||
                    category === selectedFilter;


                if (shouldShow) {


                    visibleProjects++;


                    card.classList.remove("is-hidden");


                    /* Animation */

                    card.style.opacity = "0";

                    card.style.transform =
                        "translateY(15px)";


                    setTimeout(function () {

                        card.style.opacity = "1";

                        card.style.transform =
                            "translateY(0)";

                    }, 50);


                } else {


                    card.style.opacity = "0";

                    card.style.transform =
                        "translateY(15px)";


                    setTimeout(function () {

                        card.classList.add("is-hidden");

                    }, 250);

                }

            });


            /* =================================================
               EMPTY STATE
            ================================================== */

            if (visibleProjects === 0) {

                portfolioEmpty.classList.add("show");

            } else {

                portfolioEmpty.classList.remove("show");

            }

        });

    });



    /* =====================================================
       02. SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================================
       03. MOBILE MENU
    ====================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {


        menuToggle.addEventListener("click", function () {


            const isActive =
                menuToggle.classList.toggle("active");


            navMenu.classList.toggle("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isActive
            );

        });


        /* Close menu after clicking link */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuToggle.classList.remove("active");

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* =====================================================
       04. HEADER SCROLL EFFECT
    ====================================================== */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {


        if (!header) {
            return;
        }


        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();



    /* =====================================================
       05. BACK TO TOP
    ====================================================== */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {


        window.addEventListener(
            "scroll",
            function () {


                if (window.scrollY > 500) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =====================================================
       06. CURRENT YEAR
    ====================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


});