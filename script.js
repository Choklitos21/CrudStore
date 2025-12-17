//home-page
const homePageButton = document.querySelectorAll('.home-page-link');

homePageButton.forEach(button => {
    button.addEventListener('click',  function toggleIframe() {
        // Obtenemos el elemento iframe y el botón
        const iframeFinder = document.getElementById('myIframe');
        if (iframeFinder.getAttribute("src") === "apps/home-page/home-page.html"){
            return false
        }
        iframeFinder.src = "apps/home-page/home-page.html";
        iframeFinder.style.height = "480vh";

    });
});

//detailed-page
const detailedPageButton = document.querySelectorAll('.carouse-item');

detailedPageButton.forEach(button => {
    button.addEventListener('click',  function toggleIframe() {
        // Obtenemos el elemento iframe y el botón
        const iframeFinder = window.parent.document.getElementById('myIframe');
        if (iframeFinder.getAttribute("src") === "apps/detailed-page/detailed-page.html"){
            return false
        }
        iframeFinder.src = "apps/detailed-page/detailed-page.html";
        iframeFinder.style.height = "300vh";

    });
});

//category-page
const categoryPageButton = document.querySelectorAll('.category-page-link');

categoryPageButton.forEach(button => {
    button.addEventListener('click',  function toggleIframe() {
        // Obtenemos el elemento iframe y el botón
        const iframeFinder = document.getElementById('myIframe');
        if (iframeFinder.getAttribute("src") === "apps/category-page/category-page.html"){
            return false
        }
        iframeFinder.src = "apps/category-page/category-page.html";
        iframeFinder.style.height = "220vh";

    });
});

//cart-page
const cartPageButton = document.querySelectorAll('.cart-page-link');

cartPageButton.forEach(button => {
    button.addEventListener('click',  function toggleIframe() {
        // Obtenemos el elemento iframe y el botón
        const iframeFinder = document.getElementById('myIframe');
        if (iframeFinder.getAttribute("src") === "apps/cart-page/cart-page.html"){
            return false
        }
        iframeFinder.src = "apps/cart-page/cart-page.html";
        iframeFinder.style.height = "100vh";

    });
});
