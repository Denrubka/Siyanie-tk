document.addEventListener('DOMContentLoaded', () => {
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

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    checkboxChanger();
});
