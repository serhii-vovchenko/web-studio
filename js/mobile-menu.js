(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-mob-menu-open]'),
    closeModalBtn: document.querySelector('[data-mob-close]'),
    modal: document.querySelector('[data-mob]'),
  };

  refs.openModalBtn.forEach((element) => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  //* Закривання по кліку на бекдроп

  refs.modal.addEventListener('click', removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add('is-hidden');
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();