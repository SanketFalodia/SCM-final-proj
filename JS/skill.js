document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills");
    const skillBars = document.querySelectorAll(".skill-per");
  
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        skillBars.forEach((bar) => {
          let percent = parseInt(bar.dataset.per);
          let counter = 0;
          let span = bar.closest(".skill-box").querySelector(".skill-value");
  
          const interval = setInterval(() => {
            if (counter >= percent) {
              clearInterval(interval);
            } else {
              counter++;
              bar.style.width = `${counter}%`;
              span.textContent = `${counter}%`;
            }
          }, 20);
        });
  
        obs.unobserve(skillsSection);
      }
    }, { threshold: 0.3 });
  
    observer.observe(skillsSection);
  });
  