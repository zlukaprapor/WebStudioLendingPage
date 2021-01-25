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