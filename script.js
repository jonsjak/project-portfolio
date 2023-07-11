const scrollArrow = document.getElementById("scroll-button")

scrollArrow.addEventListener('click', () => {
    console.log("scrolling enabled");
    window.scrollTo({
        top: window.pageYOffset + 800,
        behavior: 'smooth'
      });;
  });

