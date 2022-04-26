let canChangeSlider = true;

function slideOff(slides, i) {
   slides[i].classList.add('slideInactive');
}

function sliderChange(sliderId, direction) {
   let thisSlider = document.getElementById(sliderId);
   let slides = thisSlider.getElementsByClassName('slide');

   if (canChangeSlider === true) {

      for (let i = 0; i < slides.length; i++) {

         if (slides[i].classList.contains('slideActive')) {
            canChangeSlider = false;
            slides[i].classList.add('slideInactiveAnim');
            slides[i].classList.remove('slideActive');
            setTimeout(slideOff, 400, slides, i);

            if (direction == 'left') {

               if (i == 0) {
                  i = slides.length - 1;
               }
               else {
                  i--;
               }

            }

            if (direction == 'right') {

               if (i == slides.length - 1) {
                  i = 0;
               }
               else {
                  i++;
               }

            }

            setTimeout(() => {
               slides[i].classList.remove('slideInactiveAnim');
               slides[i].classList.remove('slideInactive');
               slides[i].classList.add('slideActive');
            }, 390);


            setTimeout("canChangeSlider = true;", 800);

            break;

         }
      }
   }
}