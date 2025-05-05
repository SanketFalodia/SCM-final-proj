document.addEventListener("DOMContentLoaded", () => {
    initSkills()
  
    addSmoothScrolling()
  
    highlightCurrentNavItem()
  
    setupMobileMenu()
  
    addScrollAnimations()
  
    addStickyHeader()
  
    setupContactForm()
  
    addInteractiveElements()
  })
  
  function initSkills() {
    const skillBars = document.querySelectorAll(".skill-per")
  
    if (skillBars.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateSkillsWithCounter()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )
      const skillsSection = document.querySelector(".skills")
      if (skillsSection) {
        observer.observe(skillsSection)
      }
    }
  }
  function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]')
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })
        }
      })
    })
    const scrollDownBtn = document.querySelector('.scroll-down')
    if (scrollDownBtn) {
      scrollDownBtn.addEventListener('click', () => {
        const nextSection = document.querySelector('section:nth-of-type(2)')
        if (nextSection) {
          window.scrollTo({
            top: nextSection.offsetTop - 70,
            behavior: 'smooth'
          })
        }
      })
    }
  }
  
  function highlightCurrentNavItem() {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-links a")
  
    window.addEventListener("scroll", () => {
      let current = ""
      const scrollPosition = window.pageYOffset + 200
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active")
        }
      })
    })
  }
  
  function setupMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show")
        menuToggle.classList.toggle("active")
      })
  
      const links = navLinks.querySelectorAll('a')
      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('show')
          menuToggle.classList.remove('active')
        })
      })
    }
  }

  function animateSkillsWithCounter() {
    const skillBars = document.querySelectorAll(".skill-per")
  
    skillBars.forEach((skill) => {
      const percentage = Number.parseInt(skill.getAttribute("data-per") || "0")
      let currentValue = 0

      skill.style.width = "0%"
  
      let counter = skill.parentElement.parentElement.querySelector(".skill-value")
      if (!counter) {
        counter = document.createElement("span")
        counter.className = "skill-value"
        const skillName = skill.parentElement.parentElement.querySelector(".skill-name")
        if (skillName) {
          skillName.appendChild(counter)
        } else {
          skill.parentElement.parentElement.appendChild(counter)
        }
      }
  
      counter.textContent = "0%"
      const interval = setInterval(() => {
        if (currentValue >= percentage) {
          clearInterval(interval)
        } else {
          currentValue++
          skill.style.width = currentValue + "%"
          counter.textContent = currentValue + "%"
        }
      }, 20)
    })
  }
  function addScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.about-img, .about-text, .skill-box, .resume-item, .portfolio-item')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(elementsToAnimate).indexOf(entry.target)
          if (index % 2 === 0) {
            entry.target.classList.add('slide-in-left')
          } else {
            entry.target.classList.add('slide-in-right')
          }
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    elementsToAnimate.forEach(element => {
      observer.observe(element)
    })
  }
  function addStickyHeader() {
    const header = document.querySelector('header')
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    })
  }
  function setupContactForm() {
    const contactForm = document.getElementById('contact-form')
    if (!contactForm) return
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault()
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const subject = document.getElementById('subject').value
      const message = document.getElementById('message').value

      let isValid = true
      const formControls = contactForm.querySelectorAll('.form-control')
      
      formControls.forEach(control => {
        if (!control.value.trim()) {
          isValid = false
          control.style.borderColor = 'red'
          
  
          control.classList.add('shake')
          setTimeout(() => {
            control.classList.remove('shake')
          }, 500)
        } else {
          control.style.borderColor = '#ddd'
        }
      })
      
      if (!isValid) return
      
      const formContainer = contactForm.closest('.contact-form-container')
      
      
      const successMsg = document.createElement('div')
      successMsg.className = 'success-message'
      successMsg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Thank you, ${name}!</h3>
        <p>Your message has been sent successfully. I'll get back to you soon.</p>
      `
    
      successMsg.style.textAlign = 'center'
      successMsg.style.padding = '20px'
      successMsg.style.color = '#4ecdc4'
      successMsg.style.transform = 'scale(0)'
      successMsg.style.transition = 'all 0.5s ease'
    
      contactForm.style.opacity = '0'
      setTimeout(() => {
        contactForm.style.display = 'none'
        formContainer.appendChild(successMsg)
        setTimeout(() => {
          successMsg.style.transform = 'scale(1)'
        }, 100)
        
        contactForm.reset()
        
        setTimeout(() => {
          successMsg.style.transform = 'scale(0)'
          setTimeout(() => {
            formContainer.removeChild(successMsg)
            contactForm.style.display = 'block'
            setTimeout(() => {
              contactForm.style.opacity = '1'
            }, 100)
          }, 500)
        }, 3000)
      }, 500)
    })
  
    const formControls = contactForm.querySelectorAll('.form-control')
    formControls.forEach(control => {
      control.addEventListener('focus', () => {
        control.parentElement.querySelector('label').style.color = 'var(--primary-color)'
      })
      
      control.addEventListener('blur', () => {
        control.parentElement.querySelector('label').style.color = ''
      })
    })
  }

  function addInteractiveElements() {
    const heroSection = document.querySelector('.hero')
    if (heroSection && !heroSection.querySelector('.scroll-down')) {
      const scrollDown = document.createElement('div')
      scrollDown.className = 'scroll-down'
      scrollDown.innerHTML = '<span></span><span></span><span></span>'
      heroSection.appendChild(scrollDown)
    }
  
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    portfolioItems.forEach(item => {
      item.addEventListener('click', function() {
        const ripple = document.createElement('div')
        ripple.className = 'ripple'
        ripple.style.position = 'absolute'
        ripple.style.width = '10px'
        ripple.style.height = '10px'
        ripple.style.background = 'rgba(255, 255, 255, 0.5)'
        ripple.style.borderRadius = '50%'
        ripple.style.transform = 'scale(0)'
        ripple.style.transition = 'all 0.6s ease'
        
        const rect = this.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        
        this.appendChild(ripple)

        setTimeout(() => {
          ripple.style.transform = 'scale(20)'
          ripple.style.opacity = '0'
          
          setTimeout(() => {
            this.removeChild(ripple)
          }, 600)
        }, 10)
      })
    })
    
    const yearElement = document.getElementById('current-year')
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear()
    }
    
    const skillBoxes = document.querySelectorAll('.skill-box')
    skillBoxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
        const skillPer = this.querySelector('.skill-per')
        if (skillPer) {
          skillPer.style.filter = 'brightness(1.2)'
        }
      })
      
      box.addEventListener('mouseleave', function() {
        const skillPer = this.querySelector('.skill-per')
        if (skillPer) {
          skillPer.style.filter = 'brightness(1)'
        }
      })
    })
  }
  
  function addAnimation(element, animationClass, delay = 0) {
    setTimeout(() => {
      element.classList.add(animationClass)
    }, delay)
  }
  
  function addScrollToTopButton() {
    const scrollTopBtn = document.createElement('button')
    scrollTopBtn.className = 'scroll-top-btn'
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
    
    scrollTopBtn.style.position = 'fixed'
    scrollTopBtn.style.bottom = '20px'
    scrollTopBtn.style.right = '20px'
    scrollTopBtn.style.width = '40px'
    scrollTopBtn.style.height = '40px'
    scrollTopBtn.style.borderRadius = '50%'
    scrollTopBtn.style.backgroundColor = 'var(--primary-color)'
    scrollTopBtn.style.color = 'white'
    scrollTopBtn.style.border = 'none'
    scrollTopBtn.style.cursor = 'pointer'
    scrollTopBtn.style.display = 'none'
    scrollTopBtn.style.zIndex = '999'
    scrollTopBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
    scrollTopBtn.style.transition = 'all 0.3s ease'
    
    document.body.appendChild(scrollTopBtn)
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block'
        scrollTopBtn.style.opacity = '1'
      } else {
        scrollTopBtn.style.opacity = '0'
        setTimeout(() => {
          if (window.pageYOffset <= 300) {
            scrollTopBtn.style.display = 'none'
          }
        }, 300)
      }
    })

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
    scrollTopBtn.addEventListener('mouseenter', () => {
      scrollTopBtn.style.transform = 'translateY(-5px)'
      scrollTopBtn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)'
    })
    
    scrollTopBtn.addEventListener('mouseleave', () => {
      scrollTopBtn.style.transform = 'translateY(0)'
      scrollTopBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    addScrollToTopButton()
  })
  