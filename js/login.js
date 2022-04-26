const buttonLogin = document.querySelector('.button-lg');

if (buttonLogin) {
   const buttonRegister = document.querySelector('.button-rg');
   const boxIn = document.querySelector('.box-in');
   buttonLogin.addEventListener("click", function () {
      buttonLogin.classList.add('button-in_active');
      boxIn.classList.remove('register-active');
      buttonRegister.classList.remove('button-in_active');
   })

   buttonRegister.addEventListener("click", function () {
      buttonLogin.classList.remove('button-in_active');
      boxIn.classList.add('register-active');
      buttonRegister.classList.add('button-in_active');
   })
}
