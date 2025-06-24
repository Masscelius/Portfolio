function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDark);
}

// Load preference on page load
window.onload = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
};

function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Existing dark mode + menu toggle functions here...

// Animate page exit on link click
document.querySelectorAll('a[href]').forEach(link => {
  const isExternal = link.getAttribute('target') === '_blank' || link.href.includes('mailto:');

  if (!isExternal && !link.href.includes('#')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.href;

      const pageTransition = document.querySelector('.page-transition');
      if (pageTransition) {
        pageTransition.style.animation = 'fadeOutPage 0.5s forwards';

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      } else {
        // If .page-transition doesn't exist, just navigate normally
        window.location.href = href;
      }
    });
  }
});


// Fade out animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeOutPage {
    to {
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (category === "all" || cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
