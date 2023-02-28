document.addEventListener('DOMContentLoaded', () => {
    const burgerButtonOpen = document.querySelector('.burger');
    const burgerButtonClose = document.querySelector('.burger-menu__close');
    const video = document.querySelector('.block-right__play');

   const checkboxChanger = () => {
       const checkboxLabel = document.querySelector('.form-checkbox-label');

       if(checkboxLabel) {
           const checkBox = checkboxLabel.querySelector('.form-checkbox-label__input');
           checkBox.addEventListener('change', () => {
               if(checkBox.checked) {
                   checkboxLabel.classList.add('active');
               } else {
                   checkboxLabel.classList.remove('active');
               }
           });
       }
   }


   if(video) {
       Fancybox.bind("[data-fancybox]", {
           // Your custom options
       });
   }


   const openBurgerMenu = () => {
       const burgerMenu = document.querySelector('.burger-menu');

       if(burgerMenu) {
           burgerMenu.classList.add('show');
       }
   }
    const closeBurgerMenu = () => {
        const burgerMenu = document.querySelector('.burger-menu');

        if(burgerMenu) {
            burgerMenu.classList.remove('show');
        }
    }

    burgerButtonOpen.addEventListener('click', openBurgerMenu);
    burgerButtonClose.addEventListener('click', closeBurgerMenu);

    checkboxChanger();
});
