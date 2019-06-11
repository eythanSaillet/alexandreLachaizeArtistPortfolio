let navMenu = {
  menuOpen : false ,
  menu : document.querySelector('.header_nav_menu a:nth-child(1)'),
  infos : document.querySelector('.header_nav_menu a:nth-child(2)'),
  contact : document.querySelector('.header_nav_menu a:nth-child(3)'),
  oeuvres : document.querySelector('.header_nav_menu a:nth-child(4)'),

  animation : function(){
    navMenu.menu.addEventListener('click', function(){
      if (!navMenu.menuOpen) {
        TweenMax.to(navMenu.menu,0.6,{ease: Power3.easeInOut, right:"27vw"})
        TweenMax.to(navMenu.infos,0.6,{ease: Power3.easeInOut, right:"19.25vw"})
        TweenMax.to(navMenu.contact,0.6,{ease: Power3.easeInOut, right:"9.5vw"})
        TweenMax.to(navMenu.oeuvres,0.6,{ease: Power3.easeInOut, right:"0vw"})
        TweenMax.to(navMenu.menu,0.6,{ease: Power3.easeInOut, color:"#BABABA"})
        navMenu.menuOpen = true
      }
      else{
        TweenMax.to(navMenu.menu,0.6,{ease: Power3.easeInOut, right:0})
        TweenMax.to(navMenu.infos,0.6,{ease: Power3.easeInOut, right:"-50vw"})
        TweenMax.to(navMenu.contact,0.6,{ease: Power3.easeInOut, right:"-50vw"})
        TweenMax.to(navMenu.oeuvres,0.6,{ease: Power3.easeInOut, right:"-50vw"})
        TweenMax.to(navMenu.menu,0.6,{ease: Power3.easeInOut, color:"black"})
        navMenu.menuOpen = false
      }
    })
  },
}
navMenu.animation()
