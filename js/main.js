AOS.init({
  duration: 1000,
});

const banner_list = new Swiper(".banner_list",{
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar", // 버튼 종류 설정 'bullets' 'fraction' 'progressbar'
        clickable: true, //버튼 클릭 여부
      },
});

const new_list = new Swiper(".new_list",{
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true, 
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

   breakpoints: {
    800: {
      slidesPerView: 2.5,
    },
    1300: {
      slidesPerView: 4,
    },

   },   

});