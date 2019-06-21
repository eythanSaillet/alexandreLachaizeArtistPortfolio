let containerMenu = {
  title : document.querySelectorAll('.container_menu a'),
  scrollBar : document.querySelector('.container_scrollBar_bar'),

  animation : function(){
    containerMenu.title[0].addEventListener("mouseover",function(){
      TweenMax.to(containerMenu.title[0],0.2,{ease: Power3.easeInOut, color:"black"})
      TweenMax.to(containerMenu.title[1],0.2,{ease: Power3.easeInOut, color:"#808080"})
      TweenMax.to(containerMenu.title[2],0.2,{ease: Power3.easeInOut, color:"#808080"})

      TweenMax.to(containerMenu.scrollBar,0.5,{ease: Power3.easeInOut, top:"0vh"})


      if (containerMenu.scrollBar.style.top != "0vh") {
        TweenMax.to(".container_artPic_paint .container_artPic_a",1,{ease: Power3.easeInOut, top:"-100vh"})
        TweenMax.to(".container_artPic_paint .container_artPic_b",1,{ease: Power3.easeInOut, top:"100vh"})
        TweenMax.to(".container_artPic_paint .container_artPic_c",1,{ease: Power3.easeInOut, top:"-100vh"})

        TweenMax.to(".container_artPic_other .container_artPic_a",1,{ease: Power3.easeInOut, top:"-100vh"})
        TweenMax.to(".container_artPic_other .container_artPic_b",1,{ease: Power3.easeInOut, top:"100vh"})
        TweenMax.to(".container_artPic_other .container_artPic_c",1,{ease: Power3.easeInOut, top:"-100vh"})

        TweenMax.to(".container_artPic_ceramic .container_artPic_a",1,{ease: Power3.easeInOut, top:0})
        TweenMax.to(".container_artPic_ceramic .container_artPic_b",1,{ease: Power3.easeInOut, top:0})
        TweenMax.to(".container_artPic_ceramic .container_artPic_c",1,{ease: Power3.easeInOut, top:0})
      }
    })

    containerMenu.title[1].addEventListener("mouseover",function(){
      TweenMax.to(containerMenu.title[0],0.2,{ease: Power3.easeInOut, color:"#808080"})
      TweenMax.to(containerMenu.title[1],0.2,{ease: Power3.easeInOut, color:"black"})
      TweenMax.to(containerMenu.title[2],0.2,{ease: Power3.easeInOut, color:"#808080"})

      TweenMax.to(containerMenu.scrollBar,0.5,{ease: Power3.easeInOut, top:"22.5vh"})

      if (containerMenu.scrollBar.style.top != "22.5vh") {
        TweenMax.to(".container_artPic_paint .container_artPic_a",1,{ease: Power3.easeInOut, top:0})
        TweenMax.to(".container_artPic_paint .container_artPic_b",1,{ease: Power3.easeInOut, top:0})
        TweenMax.to(".container_artPic_paint .container_artPic_c",1,{ease: Power3.easeInOut, top:0})

        TweenMax.to(".container_artPic_other .container_artPic_a",1,{ease: Power3.easeInOut, top:"-100vh"})
        TweenMax.to(".container_artPic_other .container_artPic_b",1,{ease: Power3.easeInOut, top:"100vh"})
        TweenMax.to(".container_artPic_other .container_artPic_c",1,{ease: Power3.easeInOut, top:"-100vh"})

        TweenMax.to(".container_artPic_ceramic .container_artPic_a",1,{ease: Power3.easeInOut, top:"-100vh"})
        TweenMax.to(".container_artPic_ceramic .container_artPic_b",1,{ease: Power3.easeInOut, top:"100vh"})
        TweenMax.to(".container_artPic_ceramic .container_artPic_c",1,{ease: Power3.easeInOut, top:"-100vh"})

      }
    })

    containerMenu.title[2].addEventListener("mouseover",function(){
      TweenMax.to(containerMenu.title[0],0.2,{ease: Power3.easeInOut, color:"#808080"})
      TweenMax.to(containerMenu.title[1],0.2,{ease: Power3.easeInOut, color:"#808080"})
      TweenMax.to(containerMenu.title[2],0.2,{ease: Power3.easeInOut, color:"black"})

      TweenMax.to(containerMenu.scrollBar,0.5,{ease: Power3.easeInOut, top:"45vh"})

      if (containerMenu.scrollBar.style.top != "45vh") {
        TweenMax.to(".container_artPic_other .container_artPic_a",1,{ease: Power3.easeInOut, top:0})
        TweenMax.to(".container_artPic_other .container_artPic_b",1,{ease: Power3.easeInOut, top:0})
        TweenMax.to(".container_artPic_other .container_artPic_c",1,{ease: Power3.easeInOut, top:0})

        TweenMax.to(".container_artPic_paint .container_artPic_a",1,{ease: Power3.easeInOut, top:"-100vh"})
        TweenMax.to(".container_artPic_paint .container_artPic_b",1,{ease: Power3.easeInOut, top:"100vh"})
        TweenMax.to(".container_artPic_paint .container_artPic_c",1,{ease: Power3.easeInOut, top:"-100vh"})

        TweenMax.to(".container_artPic_ceramic .container_artPic_a",1,{ease: Power3.easeInOut, top:"-100vh"})
        TweenMax.to(".container_artPic_ceramic .container_artPic_b",1,{ease: Power3.easeInOut, top:"100vh"})
        TweenMax.to(".container_artPic_ceramic .container_artPic_c",1,{ease: Power3.easeInOut, top:"-100vh"})

      }
    })
  }
}
containerMenu.animation()

infosOverlay = {
  overlay : document.querySelector('.infosOverlay'),
  enterItem : document.querySelector('.header_nav_menu_infos'),
  exitItem : document.querySelector('.infosOverlay_cancel'),

  // HIDDEN BACKGROUND DOM VAR
  header : document.querySelector('.header'),
  interface : document.querySelector('.fixedInterface'),
  container : document.querySelector('.container'),

  display : function(){
    infosOverlay.exitItem.addEventListener('click',function(){
      TweenMax.to(infosOverlay.overlay,1,{ease: Power3.easeInOut, x:"100vw"})
      TweenMax.to(infosOverlay.header,1,{ease: Power3.easeInOut, opacity:1})
      TweenMax.to(infosOverlay.interface,1,{ease: Power3.easeInOut, opacity:1})
      TweenMax.to(infosOverlay.container,1,{ease: Power3.easeInOut, opacity:1})
    })

    infosOverlay.enterItem.addEventListener('click', function(){
      TweenMax.to(infosOverlay.overlay,1,{ease: Power3.easeInOut, x:"0vw"})
      TweenMax.to(infosOverlay.header,1,{ease: Power3.easeInOut, opacity:0})
      TweenMax.to(infosOverlay.interface,1,{ease: Power3.easeInOut, opacity:0})
      TweenMax.to(infosOverlay.container,1,{ease: Power3.easeInOut, opacity:0})
    })
  },

}
infosOverlay.display()
