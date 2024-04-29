const initLightMode = () => {
    document.querySelector('input[type="checkbox"]').addEventListener('change', () => {
      document.body.classList.toggle('light-mode')
    })
  
  }
  
  
  const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-section')
  
    const windowHalfSize = window.innerHeight * 0.6
  
    const animateScroll = () => {
      sections.forEach(item => {
        const sectionTop = item.getBoundingClientRect().top
  
        const isSectionVisible = (sectionTop - windowHalfSize) < 0
  
        if (isSectionVisible) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
  
      })
  
    }
  
    animateScroll()
    window.addEventListener('scroll', animateScroll)
  
  }
  
  const initScrollSmooth = () => {
  
    const linksInternos = document.querySelectorAll('nav a')
  
    linksInternos.forEach(item => {
      const scrollToSection = (event) => {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
  
        window.scrollTo({
          top: section.offsetTop - 100
        })
      }
      item.addEventListener('click', scrollToSection)
    })
  }
  
initAnimationScroll()
initScrollSmooth()
initLightMode()

  