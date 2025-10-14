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

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.getElementById("navList");

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Animate hamburger menu
  const spans = mobileMenuToggle.querySelectorAll("span");
  if (navLinks.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translateY(10px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translateY(-10px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const spans = mobileMenuToggle.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Image Slider Functionality
const sliderButtons = document.querySelectorAll(".slider-btn");

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sliderImage = button
      .closest(".footer")
      .querySelector(".slider-image");
    const currentIndex = parseInt(sliderImage.getAttribute("data-current"));
    const imageSrc = sliderImage.src;
    const baseImagePath = imageSrc.substring(0, imageSrc.lastIndexOf("/") + 1);
    const imageName = imageSrc.substring(imageSrc.lastIndexOf("/") + 1);
    const imageBaseName = imageName.replace(/\d+\./, "");
    const imagePrefix = imageName.match(/[a-z]+/i)[0];

    let newIndex;
    if (button.classList.contains("next")) {
      newIndex = currentIndex === 2 ? 1 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 1 ? 2 : currentIndex - 1;
    }

    sliderImage.src = `${baseImagePath}${imagePrefix}${newIndex}.jpg`;
    sliderImage.setAttribute("data-current", newIndex);
  });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const sections = document.querySelectorAll(".section");

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

// Update icon visibility based on current theme
if (currentTheme === "dark") {
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
} else {
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
}

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  sections.forEach((section) => {
    section.style.backgroundColor = ``;
  });

  // Toggle icon visibility
  if (newTheme === "dark") {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
});

// button product asking
const msg = document.querySelector(".contact-msg");
const productBtns = document.querySelectorAll(".btn-product");
productBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 3000);
    }, 500);
  });
});
