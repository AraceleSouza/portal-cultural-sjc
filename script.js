/* =====================================
   PORTAL CULTURAL DE SÃO JOSÉ DOS CAMPOS
   JavaScript Vanilla
===================================== */

/* =====================================
   MENU MOBILE
===================================== */

const menuBtn = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

/* =====================================
   FECHAR MENU AO CLICAR NO LINK
===================================== */

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        menu.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });
});

/* =====================================
   SCROLL SUAVE
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            const offset = 80;

            const topPosition =
                target.offsetTop - offset;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });

        }

    });

});

/* =====================================
   HEADER AO ROLAR
===================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#FFFFFF";
        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.12)";

    } else {

        header.style.background = "#FFFFFF";
        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";

    }

});

/* =====================================
   ANIMAÇÃO FADE IN
===================================== */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);

/* =====================================
   BOTÕES SAIBA MAIS
===================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Funcionalidade demonstrativa do Portal Cultural."
        );

    });

});

/* =====================================
   BOTÃO BUSCAR
===================================== */

const searchButton =
    document.querySelector(".btn-search");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const searchInput =
            document.querySelector(
                '.search-item input'
            );

        const locationSelect =
            document.querySelectorAll(
                '.search-item select'
            )[0];

        const categorySelect =
            document.querySelectorAll(
                '.search-item select'
            )[1];

        const termo =
            searchInput.value || "Todos";

        const local =
            locationSelect.value;

        const categoria =
            categorySelect.value;

        alert(
            `Busca realizada!\n\n` +
            `Termo: ${termo}\n` +
            `Localização: ${local}\n` +
            `Categoria: ${categoria}`
        );

    });

}

/* =====================================
   NEWSLETTER
===================================== */

const newsletterBtn =
    document.querySelector(".newsletter button");

if (newsletterBtn) {

    newsletterBtn.addEventListener("click", () => {

        const emailInput =
            document.querySelector(
                ".newsletter input"
            );

        const email =
            emailInput.value.trim();

        if (email === "") {

            alert(
                "Digite seu e-mail."
            );

            return;

        }

        const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {

            alert(
                "Digite um e-mail válido."
            );

            return;

        }

        alert(
            "Inscrição realizada com sucesso!"
        );

        emailInput.value = "";

    });

}

/* =====================================
   EFEITO PARALLAX HERO
===================================== */

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollPosition =
        window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            scrollPosition * 0.4 + "px";

    }

});

/* =====================================
   CONTADOR DE CARREGAMENTO
===================================== */

window.addEventListener("load", () => {

    console.log(
        "%cPortal Cultural de São José dos Campos",
        "color:#3B82F6;font-size:18px;font-weight:bold;"
    );

    console.log(
        "Landing Page carregada com sucesso."
    );

});

/* =====================================
   OBSERVADOR DE INTERSEÇÃO
   (ANIMAÇÃO MAIS SUAVE)
===================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });

/* =====================================
   ANIMAÇÃO DOS CARDS
===================================== */

const cards =
    document.querySelectorAll(
        ".card, .highlight-card"
    );

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
            "all 0.3s ease";

    });

});

/* =====================================
   FIM DO SCRIPT
===================================== */