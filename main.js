window.addEventListener('scroll', onScroll) //adicionando ao window uma escuta de evento
onScroll()

function onScroll(){
  showNavOnScrool()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
  //linha alvo
  const targetLine = scrollY + innerHeight / 2


  //verificar se a seção passou da linha

  //topo da seção
  const sectionTop = section.offsetTop;
  //altura da seção
  const sectionHeight = section.offsetHeight 

  const sectionTopReachOrPassedTargetLine =targetLine >= sectionTop;
  //verificar se base está abaixo da linha imaginária
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha lavo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href *=${sectionId}]`)

  menuElement.classList.remove('active');
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
  
}


function showNavOnScrool(){
  if (scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll(){
  if (scrollY > 460){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}
  
  ScrollReveal({
    origin: 'right',
    distance: '30px',
    duration: 500,
  }).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header,
    #about .content,
    #contact .content,
    #contact header,
    footer`)
  
