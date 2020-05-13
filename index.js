window.onload = function(){
  var t1 = gsap.timeline({
    delay: 0.5
  });
  t1.fromTo(".box", {
    opacity: 0,
    scale: 0.3
  }, {
    opacity: 1,
    scale: 1,
    duration: 2

  });
  t1.fromTo("h2", {
    opacity: 0,

  }, {
    opacity: 1,
    duration: 1

  });
  t1.fromTo(".about-link", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1
  });

  $('.about-link').click(function() {
    about();
  });

  $('.cv-link').click(function() {
    curriculum();
  });

  $('.interests-link').click(function() {
    contact();
  });

  function about() {
    var t2 = gsap.timeline({
      delay: 0.5
    });
    t2.from('.about-name', {
        opacity: 0,
        scale: 0.5,
        duration: 1.2
      })
      .from('.about-box', {
        opacity: 0,
        scale: 0.3,
        duration: 1
      })
      .from('.cv-link', {
        opacity: 0,
        scale: 0.3,
        duration: 1
      });
  };


  function curriculum() {
    var t3 = gsap.timeline({
      delay: 0.5
    });
    t3.from('#cv', {
        opacity: 0,
        duration: .5
      })
      .from('.interests-link', {
        opacity: 0,
        scale: 0.2,
        duration: 0.5
      });
  };

  function contact() {
    var t4 = gsap.timeline({
      delay: 0.5
    });

    t4.from('#interests', {
        opacity: 0,
        duration: 1

      })
      .from('#icon1', {
        opacity: 0,
        scale: 0.3,
        duration: .3
      })
      .from('#icon2', {
        opacity: 0,
        scale: 0.3,
        duration: .3
      })
      .from('#icon3', {
        opacity: 0,
        scale: 0.3,
        duration: .3
      })
      .from('#icon4', {
        opacity: 0,
        scale: 0.3,
        duration: .3
      })
      .from('.titles', {
        opacity: 0,
        duration: 1,

      });
      footer();
  };

  function footer() {
    var t5 = gsap.timeline({
      delay: 4
    });
    t5.from('#foot1', {
        opacity: 0,
        duration: .3
      })
      .from('#foot2', {
        opacity: 0,
        duration: .3
      })
      .from('#foot3', {
        opacity: 0,
        duration: .3
      })
      .from('#foot4', {
        opacity: 0,
        duration: .3
      });

  };
  $('.items').on('click', 'li', function() {
    var item = $(this).text();
    switch (item) {
      case 'Tallulah Carlisle':

        break;
      case 'About Me':
        about();
        break;
      case 'Curriculum Vitae':
        curriculum();
        break;
      case 'Contact':
        contact();
        break;
      default:
      break;
    };
    console.log(item);
  });

};
