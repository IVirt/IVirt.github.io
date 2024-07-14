let slideIndex = {};
let slideClass = {
  'bursikGallery': ['welcomeBursik', 'actionBursik'],
  'ohoraGallery': ['welcomeOhora', 'actionOhora'],
  'ekpitetaGallery': ['welcomeEkpiteta', 'actionEkpiteta']
};

function plusSlides(n, no, galleryId) {
  showSlides(slideIndex[galleryId][no] += n, no, galleryId);
}

function currentSlide(n, no, galleryId) {
  showSlides(slideIndex[galleryId][no] = n, no, galleryId);
}

function showSlides(n, no, galleryId) {
  let i;
  let x = document.getElementsByClassName(slideClass[galleryId][no]);

  if (n > x.length) {
    slideIndex[galleryId][no] = 1;
  }
  if (n < 1) {
    slideIndex[galleryId][no] = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  if (x[slideIndex[galleryId][no] - 1]) {
    x[slideIndex[galleryId][no] - 1].style.display = "block";
  }
}

window.addEventListener("load", (event) => {
  initializeGalleries();
});

function initializeGalleries() {
  const galleryIds = Object.keys(slideClass);
  galleryIds.forEach(galleryId => {
    slideIndex[galleryId] = [1, 1]; // Initialize slide indices for each gallery
    showSlides(1, 0, galleryId);
    showSlides(1, 1, galleryId);
  });
}

window.addEventListener("load", (event) => {
  // For the accordion
  var acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      console.log('panel: ', panel)

      console.log('panel.style.maxHeight: ', panel.style.maxHeight)
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
      console.log('panel.style.maxHeight AFTER: ', panel.style.maxHeight)
    });
  }

});
