var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });
  
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    observer.observe(section);
  });
  

  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');
  
  toggle.addEventListener('click', function() {
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
  });
  