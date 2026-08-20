/* =========================================================
   DEVORA DIGITAL
   CONTACT PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   EMAIL
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get form values */

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const business =
                document.getElementById("business").value.trim();

            const service =
                document.getElementById("service").value;

            const budget =
                document.getElementById("budget").value;

            const message =
                document.getElementById("message").value.trim();


            /* Basic validation */

            if (!name || !email || !message) {

                alert(
                    "Please fill in your name, email and project details."
                );

                return;

            }


            /* Email destination */

            const destination =
                "devoradigtal20@gmail.com";


            /* Email subject */

            const subject =
                `New Project Inquiry - ${name}`;


            /* Email body */

            const body =

`Hello Devora Digital,

I would like to discuss a project.

--------------------------------

NAME:
${name}

EMAIL:
${email}

BUSINESS:
${business || "Not provided"}

SERVICE:
${service || "Not specified"}

ESTIMATED BUDGET:
${budget || "Not specified"}

--------------------------------

PROJECT DETAILS:

${message}

--------------------------------

Sent through the Devora Digital website.`;


            /* Create mailto */

            const mailtoLink =
                `mailto:${destination}` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;


            /* Open email client */

            window.location.href =
                mailtoLink;

        }
    );

}



/* =========================================================
   WHATSAPP
========================================================= */

const whatsappButton =
    document.getElementById("whatsappButton");


if (whatsappButton) {

    whatsappButton.addEventListener(
        "click",
        function () {


            /* =========================================
               IMPORTANT
               
               CHANGE THIS NUMBER TO YOUR
               REAL WHATSAPP NUMBER.
               
               Example Malaysia:
               60123456789
               
               Do NOT use:
               +60123456789
               0123456789
               ========================================= */

            const phoneNumber =
                "60137135728";


            /* Get form values */

            const name =
                document.getElementById("name").value.trim();

            const business =
                document.getElementById("business").value.trim();

            const service =
                document.getElementById("service").value;

            const budget =
                document.getElementById("budget").value;

            const message =
                document.getElementById("message").value.trim();


            /* Create WhatsApp message */

            let whatsappMessage =

`Hi Devora Digital! 👋

I'm interested in your services.

Name: ${name || "Not provided"}

Business: ${business || "Not provided"}

Service: ${service || "Not specified"}

Budget: ${budget || "Not specified"}

Project details:
${message || "I'd like to discuss a project."}`;


            /* Encode */

            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            /* WhatsApp URL */

            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${encodedMessage}`;


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}



/* =========================================================
   FORM INPUT ANIMATION
========================================================= */

const formInputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea, .contact-form select"
    );


formInputs.forEach(
    function (input) {

        input.addEventListener(
            "focus",
            function () {

                const group =
                    input.closest(".form-group");

                if (group) {

                    group.classList.add(
                        "focused"
                    );

                }

            }
        );


        input.addEventListener(
            "blur",
            function () {

                const group =
                    input.closest(".form-group");

                if (group) {

                    group.classList.remove(
                        "focused"
                    );

                }

            }
        );

    }
);



/* =========================================================
   SIMPLE REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver"
    in window
) {

    const observer =
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

                            observer.unobserve(
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

            observer.observe(
                element
            );

        }
    );

}
else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "active"
            );

        }
    );

}



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(
    function (element) {

        element.textContent =
            new Date().getFullYear();

    }
);