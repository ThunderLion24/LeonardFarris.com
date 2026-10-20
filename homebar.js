// Home bar: translates the nav links to match the language picker.
// Wrapped in a function so its names don't clash with each page's own script.
(function () {
    const labels = {
        en: { about: "About Me", hobbies: "Hobbies", calc: "Calculator", reviews: "Reviews", papers: "Papers", caise: "CAISE" },
        pt: { about: "Sobre Mim", hobbies: "Passatempos", calc: "Calculadora", reviews: "Avaliações", papers: "Papel", caise: "CAISE" },
        de: { about: "Über mich", hobbies: "Hobbys", calc: "Rechner", reviews: "Bewertungen", papers: "Arbeiten", caise: "CAISE" },
        es: { about: "Sobre mí", hobbies: "Pasatiempos", calc: "Calculadora", reviews: "Reseñas", papers: "Trabajos", caise: "CAISE" },
        fr: { about: "À propos de moi", hobbies: "Loisirs", calc: "Calculatrice", reviews: "Avis", papers: "Travaux", caise: "CAISE" },
        ru: { about: "Обо мне", hobbies: "Хобби", calc: "Калькулятор", reviews: "Отзывы", papers: "Работы", caise: "CAISE" },
        ja: { about: "自己紹介", hobbies: "趣味", calc: "電卓", reviews: "レビュー", papers: "論文", caise: "CAISE" }
    };

    function translateNav(lang) {
        const t = labels[lang] || labels.en;
        document.querySelectorAll('.home-links [data-nav]').forEach(link => {
            link.textContent = t[link.dataset.nav];
        });
    }

    const select = document.getElementById('lang-select');
    const saved = localStorage.getItem('lang');
    if (saved && labels[saved]) {
        if (select) select.value = saved;
        translateNav(saved);
    }

    if (select) {
        select.addEventListener('change', () => {
            translateNav(select.value);
            localStorage.setItem('lang', select.value);
        });
    }
})();
