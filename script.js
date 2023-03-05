/* Dom selectors */
/* const githubBtn = document.getElementById("github")
const stackBtn = document.getElementById("stack")
const linkedInBtn = document.getElementById("linkedIn")
const liveDemoBtn = document.getElementById("liveDemo")
const viewTHeCodeBtn = document.getElementById("viewTheCode")


// Eventlisteners
githubBtn.addEventListener('click', () => {
   console.log("github icon clicked");
});

stackBtn.addEventListener('click', () => {
    console.log("stack icon clicked");
});
linkedInBtn.addEventListener('click', () => {
    console.log("linkedin icon clicked");
});
liveDemoBtn.addEventListener('click', () => {
    console.log("live demo button clicked");
});

viewTHeCodeBtn.addEventListener('click', () => {
    console.log("view the code button clicked");
}); */

const scrollArrow = document.getElementById("letsScroll")

scrollArrow.addEventListener('click', (event) => {
    console.log("scrolling enabled");
    window.scrollTo({
        top: window.pageYOffset + 800,
        behavior: 'smooth'
      });;
  });

