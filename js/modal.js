(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();



//  <body>
//   < !--Вся твоя разметка, включая разметку модалки-- >

//   < !--Ставим перед закрывающим тегом body-- >
//     <script src="./js/modal.js"></script>
// </body >

(() => {
    const menuBtnRef = document.querySelector("[data-menu-batton]");
       const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {

        const expanded =
          menuBtnRef.getAttribute("aria-expanded") === "true" || false;


        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded",!expanded);

           mobileMenuRef.classList.toggle("is-open");
    });
})();