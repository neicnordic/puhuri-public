(function ($) {
  "use strict";
  /*  Preloader */
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(1500);
  });
  /*  Fixed Header*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header-area").addClass("header-sticky");
    } else {
      $(".header-area").removeClass("header-sticky");
    }
  });
  /*  Header Menu Class */
  $(".navbar-reveal,.header-cancel").on('click', function () {
    $(".header-navbar-menu").toggleClass("open_active");
    $(".nav-list").toggleClass("is_visible");
  });
  $(".nav-list li.sub-dropdown a").on('click', function () {
    $(this).parent().addClass('is_visible').siblings().removeClass('is_visible');
    $(".nav-list").removeClass('is_visible');
  });
  $(".navbar-back").on('click', function () {
    $(".nav-list li.is_visible").removeClass('is_visible');
    $(".nav-list").addClass('is_visible');
  });

  $(".nav-list li.sub-dropdown a,.navbar-back").on('click', function () {
    if ($('.nav-list li.sub-dropdown').hasClass('is_visible')) {
      $('.navbar-back').addClass('active');
    } else {
      $('.navbar-back').removeClass('active');
    }
  });
  /*  Testimonial Slider*/
  var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 4,
    speed: 1000,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });
  /*  Company Slider*/
  var swiper = new Swiper(".company-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1320: {
        slidesPerView: 4,
      }
    }
  });
  /*  Team Slider*/
  var swiper = new Swiper(".team-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 1000,
    autoplay: true,
    loop: true,
    loopedSlides: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1420: {
        slidesPerView: 4,
      }
    }
  });

  /* Fitvids Js */
  /*
  var cursor = $(".cursor-direction");
  $(document).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
  });
  $(document).mouseleave(function () {
    cursor.css({
      opacity: "0"
    });
  }).mouseenter(function () {
    cursor.css({
      opacity: "1"
    });
  });
  $(document).mousedown(function () {
    cursor.css({
      transform: "scale(.2)"
    });
  }).mouseup(function () {
    cursor.css({
      transform: "scale(1)"
    });
  });
  $("a,button").mouseenter(function () {
    cursor.css({
      transform: "scale(3.2)"
    });
  }).mouseleave(function () {
    cursor.css({
      transform: "scale(1)"
    });
  });
  */
  /* Fitvids Js */
  // fitvids('.container');
  /*  Counterup  */
  
  
  $('.counter-number').counterUp({
    delay: 50,
    time: 2000
  });
  
  /* Aos Js */
  AOS.init({
    offset: 50,
    delay: 200,
    duration: 2000,
    easing: 'ease',
    once: true,
    mirror: true,
    anchorPlacement: 'top-center',
  });
  /*  Append Shop  */
  /*
  $('.blog-append').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `blog/blog-${nextIndex}.html`;
      }
    },
    append: '.blog',
    button: '.load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });
  */
  /*  current date show  */
  $('#spanYear').html(new Date().getFullYear());
  /*  Image-popup  */
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    closeOnContentClick: true,
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });
  /*  Video-popup  */
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

  /*  Hero particle  */
  $("#hero-tsparticles")
    .particles()
    .init(
      {
        "autoPlay": true,
        "background": {
          "color": {
            "value": "transparent"
          },
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "repulse",
              "parallax": {
                "enable": false,
                "force": 60,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "mix": false,
              "opacity": 0.8,
              "size": 40
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad"
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#ffffff",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "s": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "l": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              }
            }
          },
          "destroy": {
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 3
              },
              "rate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true
            }
          },
          "gradient": [],
          "groups": {},
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": true,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#00ff00"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": false,
            "size": false,
            "speed": 2,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 80
          },
          "opacity": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": {
              "min": 0.1,
              "max": 0.5
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 1,
              "sync": false,
              "destroy": "none",
              "startValue": "random",
              "minimumValue": 0.1
            }
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 45
            },
            "width": 1
          },
          "reduceDuplicates": false,
          "repulse": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "speed": 25
          },
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {
              "character": {
                "value": [
                  "L",
                  "E",
                  "V",
                  "E",
                  "R",
                  "T",
                  "L",
                  "E",
                  "V",
                  "E",
                  "R",
                  "T"
                ],
                "font": "Verdana",
                "style": "",
                "weight": "400",
                "fill": true
              },
              "char": {
                "value": [
                  "L",
                  "E",
                  "V",
                  "E",
                  "R",
                  "T",
                  "L",
                  "E",
                  "V",
                  "E",
                  "R"
                ],
                "font": "Verdana",
                "style": "",
                "weight": "400",
                "fill": true
              }
            },
            "type": "char"
          },
          "size": {
            "random": {
              "enable": false,
              "minimumValue": 1
            },
            "value": 16,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 10,
              "sync": false,
              "destroy": "none",
              "startValue": "random",
              "minimumValue": 10
            }
          },
          "stroke": {
            "width": 1,
            "color": {
              "value": "#ffffff",
              "animation": {
                "h": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "sync": true
                },
                "s": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "sync": true
                },
                "l": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "sync": true
                }
              }
            }
          },
          "tilt": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": 50
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": [],
        "zLayers": 100
      }

    );
  /*  Call particle  */
  $("#call-tsparticles")
    .particles()
    .init(
      {
        "autoPlay": true,
        "background": {
          "color": {
            "value": "transparent"
          },
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#b4cce6"
            },
            "opacity": 1
          },
          "enable": false
        },
        "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
        "detectRetina": false,
        "duration": 0,
        "fpsLimit": 30,
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": false,
              "mode": "push"
            },
            "onDiv": {
              "selectors": "#repulse-div",
              "enable": false,
              "mode": "repulse",
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 40,
              "duration": 2,
              "mix": false,
              "opacity": .8,
              "size": 6
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.1
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#b4cce6"
                  },
                  "stop": {
                    "value": "#b4cce6"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#b4cce6"
                },
                "length": 2000
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad"
            },
            "slow": {
              "factor": 1,
              "radius": 0
            },
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#b4cce6",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "s": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "l": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              }
            }
          },
          "destroy": {
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 3
              },
              "rate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true
            }
          },
          "gradient": [],
          "groups": {},
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#fff"
            },
            "consent": false,
            "distance": 30,
            "enable": true,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#fff"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "bounce",
              "bottom": "bounce",
              "left": "bounce",
              "right": "bounce",
              "top": "bounce"
            },
            "random": false,
            "size": false,
            "speed": 1,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": false,
              "area": 2000,
              "factor": 1000
            },
            "limit": 0,
            "value": 200
          },
          "opacity": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": {
              "min": 0.05,
              "max": 0.4
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 2,
              "sync": false,
              "destroy": "none",
              "startValue": "random",
              "minimumValue": 0.05
            }
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 45
            },
            "width": 1
          },
          "reduceDuplicates": false,
          "repulse": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "speed": 25
          },
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {},
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": 1,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 40,
              "sync": false,
              "destroy": "none",
              "startValue": "random",
              "minimumValue": 0.1
            }
          },
          "stroke": {
            "width": 0
          },
          "tilt": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": 50
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": [],
        "zLayers": 100,
        "polygon": {
          "draw": {
            "enable": true,
            "stroke": {
              "color": {
                "value": "rgba(255,255,255,1)"
              },
              "width": 0.5,
              "opacity": 0.2
            }
          },
          "enable": true,
          "inline": {
            "arrangement": "equidistant"
          },
          "move": {
            "radius": 10,
            "type": "path"
          },
          "scale": 0.5,
          "type": "inline",
          "url": "https://d33wubrfki0l68.cloudfront.net/474758b38bc072da149e3d470bd75206de70affa/4608b/assets/images/map-vector.svg"
        }
      }

    );
  /*  Scrolltop  */
  function scrolltop() {
    var wind = $(window);
    wind.on("scroll", function () {
      var scrollTop = wind.scrollTop();
      if (scrollTop >= 500) {
        $(".footer-back").addClass("show");
      } else {
        $(".footer-back").removeClass("show");
      }

    });
    $(".footer-back").on("click", function () {
      var bodyTop = $("html, body");
      bodyTop.animate({ scrollTop: 0 }, 500, "easeOutCubic");
    });
  }
  scrolltop();


  /*
  $('.infinite-scroll').infiniteScroll({
    path: function path() {
      var pageNumber = this.loadCount + 2;
      return '/blog/pages/' + pageNumber + '/index.html';
    },
    append: '.post-item',
    button: '.loadmore',
    scrollThreshold: false
  });
*/
  // search 
/*
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<div class="search-results"><a class="gh-search-item" href="{url}"><h5 class="search-post-title">{title}</h5></a>'
  });
*/


}(jQuery));
