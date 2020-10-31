$(document).ready(function () {
  //AOS  
  AOS.init();
  //TILT.JS
  $('.js-tilt-2').tilt({
    glare: true,
    maxGlare: .1,
    scale: 1.05,  
    maxTilt: 15,
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    easing: "cubic-bezier(.0,.68,.42,.69)",    // Easing on enter/exit  scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 20,    // Speed of the enter/exit transition.
    transition:  true,   // Set a transition on enter/exit.t
  })
  $('.js-tilt-btn').tilt({
    glare: true,
    maxGlare: .5,
    scale: 1.04,  
    maxTilt: 25,
    perspective: 10000,   // Transform perspective, the lower the more extreme the tilt gets.
    easing: "cubic-bezier(.0,.68,.42,.69)",    // Easing on enter/exit  scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 10,    // Speed of the enter/exit transition.
    transition: true,   // Set a transition on enter/exit.t
  })

  $('[data-toggle="popover"]').popover();
    
    $('.icon').click(function () {
        $('.icon').toggleClass('active');
  })
    
    // plugin modalVideo
    $(".js-video-button").modalVideo({
      youtube: {
        controls: 0,
        nocookie: true
      }
    });

    //particles js
    particlesJS("particles-js",{
        "particles": {
          "number": {
            "value": 48,
            "density": {
              "enable": false,
              "value_area": 400.6025061692789
            }
          },
          "color": {
            "value": "#ac9393"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6249399096240751,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
});




