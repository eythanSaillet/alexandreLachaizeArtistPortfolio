let navMenu = {
  menuOpen : false ,
  menu : document.querySelector('.header_nav_menu p:nth-child(1)'),
  infos : document.querySelector('.header_nav_menu a:nth-child(2)'),
  contact : document.querySelector('.header_nav_menu a:nth-child(3)'),
  oeuvres : document.querySelector('.header_nav_menu a:nth-child(4)'),

  animation : function(){
    navMenu.menu.addEventListener('click', function(){
      if (!navMenu.menuOpen) {
        if (screen.width<1024) {
          TweenMax.to(navMenu.menu,0.6,{ease: Power3.easeInOut, right:"41vw"})
          TweenMax.to(navMenu.infos,0.6,{ease: Power3.easeInOut, right:"30vw"})
          TweenMax.to(navMenu.contact,0.6,{ease: Power3.easeInOut, right:"15vw"})
          TweenMax.to(navMenu.oeuvres,0.6,{ease: Power3.easeInOut, right:"0vw"})
        }
        else{
          TweenMax.to(navMenu.menu,0.6,{ease: Power3.easeInOut, right:"27vw"})
          TweenMax.to(navMenu.infos,0.6,{ease: Power3.easeInOut, right:"19.25vw"})
          TweenMax.to(navMenu.contact,0.6,{ease: Power3.easeInOut, right:"9.5vw"})
          TweenMax.to(navMenu.oeuvres,0.6,{ease: Power3.easeInOut, right:"0vw"})
        }
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

// console.log(document.querySelector('.artOverlay_pic_container'))
// document.querySelector('.artOverlay_pic_container').addEventListener('mouseover', function(){
//   // TweenMax.to(document.querySelector('.artOverlay_pic_container img'),0.4,{ease: Power3.easeInOut, height:"100vh",maxHeight:"100vh",width:"auto",maxWidth:"100vw"})
//   TweenMax.to(document.querySelector('.artOverlay_pic_container img'),0.4,{ease: Power3.easeInOut, scaleY:1.3})
//   TweenMax.to(document.querySelector('.artOverlay_pic_container img'),0.4,{ease: Power3.easeInOut, scaleX:1.3})
// })
// document.querySelector('.artOverlay_pic_container').addEventListener('mouseout', function(){
//   // TweenMax.to(document.querySelector('.artOverlay_pic_container img'),0.4,{ease: Power3.easeInOut, height:"auto",maxHeight:"68vh",width:"auto",maxWidth:"30vw"})
//   TweenMax.to(document.querySelector('.artOverlay_pic_container img'),0.4,{ease: Power3.easeInOut, scaleY:1})
//   TweenMax.to(document.querySelector('.artOverlay_pic_container img'),0.4,{ease: Power3.easeInOut, scaleX:1})
// })
