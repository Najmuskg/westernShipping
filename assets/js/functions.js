$(".menu-item-has-children > a").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).parent().siblings().removeClass("open");
  $(this).parent().toggleClass("open");
  $(".featured--article").addClass("sub-menu-open");
});
/* Sticky Menu */
  /* ------------------------------------------- */
  $(".toggle-menu").on("click", function () {
    $(".main--menu").toggleClass("active");
    $(".toggle-menu").toggleClass("toggle-active");
  });


 /* Show Header when scroll up */
  /* ------------------------------------------- */
  var lastScrollTop = 0;
  var $header = $("header");
  var headerHeight = $header.outerHeight();

  $(window).scroll(function () {
    var windowTop = $(window).scrollTop();

    if (windowTop >= headerHeight) {
      $header.addClass("header-sticky");
    } else {
      $header.removeClass("header-sticky");
      $header.removeClass("header-show");
    }

    if ($header.hasClass("header-sticky")) {
      if (windowTop < lastScrollTop) {
        $header.addClass("header-show");
      } else {
        $header.removeClass("header-show");
      }
    }
    lastScrollTop = windowTop;
  });


/* window load class helper */
/* ------------------------------------------- */
$(window).on("load", function () {
  // setTimeout(function () {
  $("html").removeClass("loading").addClass("loaded");
  // }, 10000);
});


/* Scroll to Top  */
  /* ------------------------------------------- */
  $(".returnTop").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    /* # of pixels before element*/
    var detectAreaTopOffset = 15;
    /* # of pixels after element*/
    var detectAreaBottomOffset = 100;
    return (
      elemTop <= docViewBottom + detectAreaTopOffset &&
      elemBottom >= docViewTop - detectAreaBottomOffset
    );
  }


 //Count up code
 function countUp() {
  $(".counter").each(function () {
    var $this = $(this), // <- Don't touch this variable. It's pure magic.
      countTo = $this.attr("data-count");
    ended = $this.attr("ended");

    if (ended != "true" && isScrolledIntoView($this)) {
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2500, //duration of counting
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
      $this.attr("ended", "true");
    }
  });
}
//Start animation on page-load
countUp();

$(document).scroll(function () {
  if ($(".counter").length) {
    if (isScrolledIntoView(".counter")) {
      countUp();
    }
  }
});



/* manually doing in-view stuff */
/* ------------------------------------------- */

const scrollers = document.querySelectorAll("[data-scroll]");

function check(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(check);
scrollers.forEach((scroller) => observer.observe(scroller));



  /* Filter drop down */
  /* ------------------------------------------- */
  $(".filter-title").click(function () {
    $(this).data("clicked", true);
    var $this = $(this);

    $(".filter-title").not($this).next().removeClass("filter-active");
    $(this).next().toggleClass("filter-active");
  });

  $(".cloak").click(function () {
    $(this).parent().removeClass("filter-active");
  });
  // End of Filter drop down

  

  const jarallaxEls = document.querySelectorAll('.jarallax')

  jarallax(jarallaxEls, {})

  

 /* Sliders */
  /* ------------------------------------------- */


  
  new Swiper(".carousel", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".carousel-progress",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 40,
    //   },
    // },
  });


  $(".nav-toggle").on("click", function () {
    $(this).toggleClass("footer-menu-expand");
    $(".footer--nav").slideToggle();
  });


  $(function() {
    $('a[href=#]').on('click', function(e) {
      e.preventDefault();
      // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });