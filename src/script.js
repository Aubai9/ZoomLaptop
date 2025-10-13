// Mobile Menu Toggle Functionality
const navList = document.querySelector("#navList");
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    window.scrollTo({
      top: target.offsetTop - 75,
      behavior: "smooth",
    });
    links.forEach((item) => {
      item.classList.remove("active");
      link.classList.add("active");
    });
  });
});

// // Theme Toggle Functionality
// const themeToggle = document.getElementById("themeToggle");
// const sunIcon = document.querySelector(".sun-icon");
// const moonIcon = document.querySelector(".moon-icon");

// // Check for saved theme preference or default to 'light'
// const currentTheme = localStorage.getItem("theme") || "light";
// document.documentElement.setAttribute("data-theme", currentTheme);

// // Update icon visibility based on current theme
// if (currentTheme === "dark") {
//   sunIcon.style.display = "block";
//   moonIcon.style.display = "none";
// } else {
//   sunIcon.style.display = "none";
//   moonIcon.style.display = "block";
// }

// themeToggle.addEventListener("click", () => {
//   const theme = document.documentElement.getAttribute("data-theme");
//   const newTheme = theme === "light" ? "dark" : "light";

//   document.documentElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme", newTheme);

//   // Toggle icon visibility
//   if (newTheme === "dark") {
//     sunIcon.style.display = "block";
//     moonIcon.style.display = "none";
//   } else {
//     sunIcon.style.display = "none";
//     moonIcon.style.display = "block";
//   }
// });

// // Image Slider Functionality
// const sliderButtons = document.querySelectorAll(".slider-btn");

// sliderButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const sliderImage = button
//       .closest(".footer")
//       .querySelector(".slider-image");
//     const currentIndex = parseInt(sliderImage.getAttribute("data-current"));
//     const imageSrc = sliderImage.src;
//     const baseImagePath = imageSrc.substring(0, imageSrc.lastIndexOf("/") + 1);
//     const imageName = imageSrc.substring(imageSrc.lastIndexOf("/") + 1);
//     const imageBaseName = imageName.replace(/\d+\./, "");
//     const imagePrefix = imageName.match(/[a-z]+/i)[0];

//     let newIndex;
//     if (button.classList.contains("next")) {
//       newIndex = currentIndex === 3 ? 1 : currentIndex + 1;
//     } else {
//       newIndex = currentIndex === 1 ? 3 : currentIndex - 1;
//     }

//     sliderImage.src = `${baseImagePath}${imagePrefix}${newIndex}.jpg`;
//     sliderImage.setAttribute("data-current", newIndex);
//   });
// });

// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       const offsetTop = target.offsetTop - 70; // Account for fixed navbar
//       window.scrollTo({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//     }
//   });
// });

// // Add animation on scroll
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = "1";
//       entry.target.style.transform = "translateY(0)";
//     }
//   });
// }, observerOptions);

// // Observe all cards
// document.querySelectorAll(".card").forEach((card) => {
//   card.style.opacity = "0";
//   card.style.transform = "translateY(20px)";
//   card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
//   observer.observe(card);
// });
