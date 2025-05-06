document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Initialize Lucide icons
    lucide.createIcons()
  
    // Create stars for background
    createStars()
  
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button")
    const navLinks = document.querySelector(".nav-links")
  
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", () => {
        navLinks.classList.toggle("show")
        mobileMenuButton.classList.toggle("active")
      })
    }
  
    // Contact form submission
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        const message = document.getElementById("message").value.trim()
  
        // Basic validation
        if (!name || !email || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address")
          return
        }
  
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show an alert
        console.log("Form submitted:", { name, email, message })
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        this.reset()
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  // Function to create stars in the background
  function createStars() {
    const starsContainer = document.getElementById("stars-container")
    if (!starsContainer) return
  
    const numberOfStars = 50
  
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div")
      star.classList.add("star")
  
      // Random position
      const top = Math.random() * 100
      const left = Math.random() * 100
  
      // Random size
      const size = Math.random() * 3
  
      // Random opacity
      const opacity = Math.random() * 0.7 + 0.3
  
      // Random animation duration
      const duration = Math.random() * 5 + 3
  
      star.style.top = `${top}%`
      star.style.left = `${left}%`
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.opacity = opacity
      star.style.animation = `twinkle ${duration}s infinite alternate`
  
      starsContainer.appendChild(star)
    }
  }
  
  // Add scroll animation for elements
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
  
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight
  
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("fade-in")
      }
    })
  })
  
  // Declare lucide variable (assuming it's globally available or imported elsewhere)
  const lucide = window.lucide || {}
  