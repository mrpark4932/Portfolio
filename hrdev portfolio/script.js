// Enable JavaScript-specific section reveal styling.
document.documentElement.classList.add('js-enabled');

if ('IntersectionObserver' in window) {
      var revealTargets = document.querySelectorAll('.content-section');
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealTargets.forEach(function (target) {
        observer.observe(target);
      });
    } else {
      document.querySelectorAll('.content-section').forEach(function (target) {
        target.classList.add('is-visible');
      });
    }

    var navToggle = document.querySelector('.mobile-nav-toggle');
    var sidebar = document.querySelector('.sidebar');

    if (navToggle && sidebar) {
      navToggle.addEventListener('click', function () {
        var isOpen = sidebar.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
