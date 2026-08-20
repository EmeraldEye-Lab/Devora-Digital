/* =========================================================
   DEVORA DIGITAL
   GLOBAL JAVASCRIPT
========================================================= */


/* =========================================================
   01. WAIT FOR PAGE TO LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       02. HEADER SCROLL EFFECT
    ====================================================== */

    const header =
        document.getElementById("header");


    function handleHeaderScroll() {

        if (!header) return;


        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );


    handleHeaderScroll();



    /* =====================================================
       03. MOBILE NAVIGATION
    ====================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {


        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navMenu.classList.toggle("active");


                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        /* Close menu when clicking a link */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }



    /* =====================================================
       04. REVEAL ON SCROLL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (revealElements.length > 0) {


        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "active"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }



    /* =====================================================
       05. BACK TO TOP
    ====================================================== */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {


        function handleBackToTop() {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }


        window.addEventListener(
            "scroll",
            handleBackToTop
        );


        handleBackToTop();


        backToTop.addEventListener(
            "click",
            () => {

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

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    const currentYear =
        new Date().getFullYear();


    yearElements.forEach(element => {

        element.textContent =
            currentYear;

    });



    /* =====================================================
       07. SMOOTH INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(link => {


        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });



    /* =====================================================
       08. BUTTON RIPPLE EFFECT
    ====================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn"
        );


    buttons.forEach(button => {


        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.classList.add(
                    "button-ripple"
                );


                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                ripple.style.left =
                    `${x}px`;


                ripple.style.top =
                    `${y}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });



    /* =====================================================
       09. HERO MOUSE MOVEMENT
    ====================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    const browserWindow =
        document.querySelector(
            ".browser-window"
        );


    if (
        heroVisual &&
        browserWindow &&
        window.innerWidth > 900
    ) {


        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (x - centerX) /
                    centerX *
                    4;


                const rotateX =
                    (centerY - y) /
                    centerY *
                    3;


                browserWindow.style.transform =
                    `perspective(1000px)
                     rotateY(${-5 + rotateY}deg)
                     rotateX(${2 + rotateX}deg)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                browserWindow.style.transform =
                    `perspective(1000px)
                     rotateY(-5deg)
                     rotateX(2deg)`;

            }
        );

    }



    /* =====================================================
       10. DISABLE IMAGE DRAGGING
    ====================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(image => {

        image.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

            }
        );

    });



    /* =====================================================
       11. CONSOLE MESSAGE
    ====================================================== */

    console.log(
        "Devora Digital website loaded successfully."
    );


});

/* =========================================================
   PORTFOLIO FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");


    if (filterButtons.length > 0 && portfolioCards.length > 0) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const filter = button.getAttribute("data-filter");


                /* Remove active from all buttons */

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });


                /* Add active to clicked button */

                button.classList.add("active");


                /* Filter projects */

                portfolioCards.forEach(card => {

                    const category =
                        card.getAttribute("data-category");


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.style.display = "block";

                        setTimeout(() => {
                            card.classList.add("show");
                        }, 10);

                    } else {

                        card.classList.remove("show");

                        setTimeout(() => {
                            card.style.display = "none";
                        }, 250);

                    }

                });

            });

        });

    }

});