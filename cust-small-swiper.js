var swiper = new Swiper(".cust-small-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });