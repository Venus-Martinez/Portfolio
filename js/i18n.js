/*
* File: i18n.js
* Purpose: Adds a layer of both interactivity and accessibility to my website by offering another language option. (Milestone 4)
* Author: Venus Martinez
* Features:
*    - All pages: users can choose between English and Spanish, and specific page content will update accordingly.
*      - Example: the "About Me" heading on the About page will change to "Sobre Mí" when Spanish is selected.
*      - The language selection is saved in local storage, so the website will remember the user's choice even after refreshing or navigating to a different page.
*      - The language selection dropdown includes a default disabled option that prompts users to select a language, improving accessibility and user experience.
*/

/* ---------- Internationalization (i18n) setup ---------- */

/*
* The translations object contains all the text content for the website in both English (en) and Spanish (es).
* Each key corresponds to a specific piece of text on the site, making it easy to update the content in one place.
* Example: "homeTitle" corresponds to the main heading on the Home page, and it has both an English and Spanish version.
*/

window.translations = {
    en: {                          // English Versions
        homeTitle: "Welcome To My Home Page",
        homeIntro: "Welcome to my CST-120 milestone website. My name is Venus Martinez, and I am working toward a Bachelor's in Software Development. I am originally from Buffalo, New York, and I moved to Phoenix, Arizona in 2016. This site will grow throughout the course as I build more pages and add new features.",

        aboutTitle: "About Me",
        strongAboutIntro: "Hi, I'm Venus Martinez.",
        aboutIntro: "I'm originally from Buffalo, New York and moved to Phoenix, Arizona in 2016.",
        aboutHighlight: "I'm working toward my Bachelor's in Software Development and I'm excited to strengthen my web development skills.",

        hobbiesTitle: "Hobbies",
        hobbiesIntro: "This page shares some of my hobbies and interests that I enjoy during my free time.",

        photosTitle: "Photos",
        photosIntro: "This page includes a small collection of images that represent my personal interests and experiences.",

        contactTitle: "Contact Me",

        navHome: "Home",
        navAbout: "About",
        navHobbies: "Hobbies",
        navPhotos: "Photos",
        navContact: "Contact"
    },
    es: {                         // Spanish Versions
        homeTitle: "Bienvenido A Mi Página Principal",
        homeIntro: "Bienvenido a mi sitio web de hitos CST-120. Mi nombre es Venus Martinez, y estoy trabajando para obtener una Licenciatura en Desarrollo de Software. Soy originaria de Buffalo, Nueva York, y me mudé a Phoenix, Arizona en 2016. Este sitio crecerá a lo largo del curso a medida que construya más páginas y agregue nuevas funciones.",

        aboutTitle: "Sobre Mí",
        strongAboutIntro: "Hola, soy Venus Martinez.",
        aboutIntro: "Soy originaria de Buffalo, Nueva York y me mudé a Phoenix, Arizona en 2016.",
        aboutHighlight: "Estoy trabajando para obtener mi Licenciatura en Desarrollo de Software y estoy emocionada de fortalecer mis habilidades de desarrollo web.",

        hobbiesTitle: "Pasatiempos",
        hobbiesIntro: "Esta página comparte algunos de mis pasatiempos e intereses que disfruto durante mi tiempo libre.",

        photosTitle: "Fotos",
        photosIntro: "Esta página incluye una pequeña colección de imágenes que representan mis intereses personales y experiencias.",

        contactTitle: "Contáctame",

        navHome: "Inicio",
        navAbout: "Sobre Mí",
        navHobbies: "Pasatiempos",
        navPhotos: "Fotos",
        navContact: "Contacto"
    }
};