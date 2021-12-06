// меню
const burgerMenu = () => {

   const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body'),
      header = document.querySelector('.header');

   burger.addEventListener('click', () => {
      burger.classList.toggle('js-active');
      menu.classList.toggle('js-active');
      header.classList.toggle('js-active');
      body.classList.toggle('js-lock');
   });

};
burgerMenu();

// маска для номера телефона
const maskPhone = () => {

   document.addEventListener("DOMContentLoaded", function () {
      let eventCalllback = function (e) {
         let el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");

         if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
               e.target.value = '';
               return;
            }
         }
         if (def.length >= val.length) val = def;
         e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
         });
      };

      let phone_inputs = document.querySelectorAll('#your-phone');
      for (let elem of phone_inputs) {
         for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
         }
      }
   });

};
maskPhone();

// маска для email
const maskEmail = () => {
   const emailInput = document.querySelector('#your-post');
   emailInput.addEventListener('input', () => {
      emailInput.value = emailInput.value.replace(/[^a-z0-9\-_.!@~*']/ig, '')
   });
};
maskEmail();

// маска для instagram
const maskInst = () => {
   const maskInst = document.querySelector('#your-intagram');

   maskInst.onfocus = () => {
      maskInst.value = '@';
   };
   maskInst.addEventListener('input', () => {
      maskInst.value = maskInst.value.replace(/[^a-z0-9,.!?:;@\ ]/g, '');
   });
};
maskInst();

// показать скрыть пароль
const maskPassword = () => {

   const passControl = document.querySelectorAll('.password-control');

   passControl.forEach(elem => {
      elem.addEventListener('click', (event) => {
         event.preventDefault();
         let input = (elem.parentNode).querySelector('input');
         if (input.getAttribute('type') == 'password') {
            elem.classList.add('hide');
            input.setAttribute('type', 'text');
         } else {
            elem.classList.remove('hide');
            input.setAttribute('type', 'password');
         }
         return false;
      });
   });

};
maskPassword();

// проверка полей на пустоту
const submitForm = () => {
   const input = document.querySelectorAll('.your-profile input');

   let p = document.createElement('p');
   p.className = "js-alertMess";
   p.innerHTML = "Это обязательное поле";

   input.forEach(elem => {
      elem.onblur = () => {
         if (elem.value === '') {
            elem.classList.add('js-incorrect');
            elem.after(p);
            setTimeout(() => p.remove(), 3000);
         } else {
            elem.style.color = '#D0BC7A';
         }
      };
   });


};
submitForm();

// добавление товара в избранные
const addFavorit = () => {

   const like = document.querySelectorAll('.like'),
      favoritesCount = document.querySelector('.favorites p');
   let count = 0;
   favoritesCount.textContent = count;

   if (count === 0) {
      favoritesCount.style.display = 'none';
   }

   like.forEach(elem => {
      elem.addEventListener('click', () => {
         elem.classList.toggle('active');
         if (elem.classList.contains('active')) {
            count++;
            favoritesCount.textContent = count;
         } else {
            count--;
            favoritesCount.textContent = count;
         }

         if (count === 0) {
            favoritesCount.style.display = 'none';
         } else {
            favoritesCount.style.display = 'block';
         }
      });
   });

};
addFavorit();

// слайдер
$(document).ready(function () {
   $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 2,
      arrows: false,
      variableWidth: true,
      infinite: false,
      responsive: [
         {
            breakpoint: 680,
            settings: {
               slidesToScroll: 1,
            }
         }
      ]
   });
});