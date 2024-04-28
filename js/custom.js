function menuToggle() {
  var menuTog = document.querySelector("#menubar");

  if (menuTog.src.endsWith("images/bar.svg")) {
    menuTog.src = "images/times.svg";
  } else {
    menuTog.src = "images/bar.svg";
  }
}




var swiper = new Swiper(".storySlider", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      480: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      }
  }
  });

  var menuTag = document.querySelector('.menudrop a');
  var drop_item = document.querySelector('.drop_item');
  var isOpen = false; 

  menuTag.addEventListener('click', function() {
    isOpen = !isOpen;
    if (isOpen) {
      menuTag.style.borderBottom="var(--blue) solid 0px";
      drop_item.classList.add('show');
      document.querySelector('.menudrop a span').innerHTML="-";
    } else {
      drop_item.classList.remove('show');
      document.querySelector('.menudrop a span').innerHTML="+";
      menuTag.style.borderBottom="var(--blue) solid 1px";
    }
  });


  function updateScrollProgress() {
    const scrollableDiv = document.getElementById('scrollableDiv');
    const progressBar = document.getElementById('progressIndicator');
    const scrollableHeight = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;
    const scrollProgress = (scrollableDiv.scrollTop / scrollableHeight) * 100;
    progressBar.style.height = scrollProgress + '%';
}
