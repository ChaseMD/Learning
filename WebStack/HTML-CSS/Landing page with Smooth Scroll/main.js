// Option 2 - jQuery smooth scroll
// $(".navbar a").on("click", function(e) {
//   if (this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       600
//     );
//   }
// });

// Option 3 - SmoothScroll JS

const scroll = new SmoothScroll('nav a[href*="#"]', {
  speed: 800
});
