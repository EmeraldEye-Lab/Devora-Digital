/* =========================================================
   DEVORA DIGITAL
   PRICING PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   01. FAQ ACCORDION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const faqItems =
            document.querySelectorAll(
                ".faq-item"
            );


        faqItems.forEach(
            function (item) {


                const question =
                    item.querySelector(
                        ".faq-question"
                    );


                if (!question) {
                    return;
                }


                question.addEventListener(
                    "click",
                    function () {


                        const isActive =
                            item.classList.contains(
                                "active"
                            );


                        /* Close all */

                        faqItems.forEach(
                            function (otherItem) {

                                otherItem.classList.remove(
                                    "active"
                                );

                            }
                        );


                        /* Open clicked */

                        if (!isActive) {

                            item.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );


    }
);


/* =========================================================
   02. PACKAGE BUTTON FEEDBACK
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const pricingCards =
            document.querySelectorAll(
                ".pricing-card"
            );


        pricingCards.forEach(
            function (card) {


                card.addEventListener(
                    "mouseenter",
                    function () {

                        card.classList.add(
                            "hovered"
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.classList.remove(
                            "hovered"
                        );

                    }
                );


            }
        );


    }
);


/* =========================================================
   03. SCROLL REVEAL
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            !("IntersectionObserver" in window)
        ) {

            revealElements.forEach(
                function (element) {

                    element.classList.add(
                        "active"
                    );

                }
            );

            return;

        }


        const revealObserver =
            new IntersectionObserver(
                function (entries) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.classList.add(
                                    "active"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );


                            }

                        }
                    );


                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );


    }
);