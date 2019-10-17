let welcomeOverlay = {

  // Welcome Overlay const

  overlay : document.querySelector('.welcomeOverlay'),
  underline : document.querySelector('.welcomeOverlay_underline'),
  name : document.querySelector('.welcomeOverlay_nameDiv h1'),
  container : document.querySelector('.container'),
  scrollBarBar : document.querySelector('.container_scrollBar_bar'),

  responsiveHeader : document.querySelector('.responsiveHeader'),

  // HomePage const

  scrollBar : document.querySelector('.container_scrollBar'),
  menu : document.querySelector('.container_menu'),
  artPicA : document.querySelector('.container_artPic_ceramic .container_artPic_a'),
  artPicB : document.querySelector('.container_artPic_ceramic .container_artPic_b'),
  artPicC : document.querySelector('.container_artPic_ceramic .container_artPic_c'),

  // Welcome Overlay animation

  welcomeAnimation : function(){
    setTimeout(function () {
      TweenMax.to(welcomeOverlay.underline,3,{ease: Power3.easeInOut, width:"53.2vw"})
    }, 200);

    setTimeout(function () {
      TweenMax.to(welcomeOverlay.name,0.7,{ease: Power3.easeInOut,top:200})
    }, 2900);

    setTimeout(function () {
      welcomeOverlay.underline.style.position = "relative"
      if (screen.width>800) {
        TweenMax.to(welcomeOverlay.underline,0.7,{ease: Power3.easeInOut, bottom:"42.7vh"})
      }
      if (screen.width<800) {
        TweenMax.to(welcomeOverlay.underline,0.7,{ease: Power3.easeInOut, bottom:"38vh"})
      }
      TweenMax.to(welcomeOverlay.underline,0.7,{ease: Power3.easeInOut, width:"93vw"})
    }, 3100);

    setTimeout(function () {
      TweenMax.to('nav a',0.8,{ease: Power3.easeInOut,top:0})
      TweenMax.to('nav p',0.8,{ease: Power3.easeInOut,top:0})
    }, 3400);

    setTimeout(function () {
      TweenMax.to(welcomeOverlay.responsiveHeader,0.5,{ease: Power3.easeInOut,opacity:1})
      welcomeOverlay.container.style.visibility = "visible"
    }, 3900);

    // INIT
    TweenMax.to(welcomeOverlay.scrollBarBar,0,{ease: Power3.easeInOut, top:"0vh"})
  },

  // HomePage animation

  homePageAnimation : function(){
    TweenMax.from(welcomeOverlay.scrollBar,1,{ease: Power3.easeInOut, x:"-70vw"})
    TweenMax.from(welcomeOverlay.menu,1,{ease: Power3.easeInOut, x:"-70vw"})
    TweenMax.from(welcomeOverlay.artPicA,1.5,{ease: Power3.easeInOut, y:"-100vh"})
    TweenMax.from(welcomeOverlay.artPicB,1.5,{ease: Power3.easeInOut, y:"100vh"})
    TweenMax.from(welcomeOverlay.artPicC,1.5,{ease: Power3.easeInOut, y:"-100vh"})
  },

}
window.addEventListener("load",function(){
  welcomeOverlay.welcomeAnimation()
  setTimeout(function(){
    welcomeOverlay.homePageAnimation()
  },3800)
})

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
  resposiveEnterItem : document.querySelector('.responsiveHeader_nav_menu_infos'),
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

    infosOverlay.resposiveEnterItem.addEventListener('click', function(){
      TweenMax.to(infosOverlay.overlay,1,{ease: Power3.easeInOut, x:"0vw"})
      TweenMax.to(infosOverlay.header,1,{ease: Power3.easeInOut, opacity:0})
      TweenMax.to(infosOverlay.interface,1,{ease: Power3.easeInOut, opacity:0})
      TweenMax.to(infosOverlay.container,1,{ease: Power3.easeInOut, opacity:0})
    })
  },

}
infosOverlay.display()


let responsiveNavMenu = {
  menuOpen : false ,

  responsiveMenu : document.querySelector('.responsiveHeader_nav_menu p:nth-child(1)'),
  responsiveInfos : document.querySelector('.responsiveHeader_nav_menu a:nth-child(2)'),
  responsiveContact : document.querySelector('.responsiveHeader_nav_menu a:nth-child(3)'),
  responsiveOeuvres : document.querySelector('.responsiveHeader_nav_menu a:nth-child(4)'),

  animation : function(){

    responsiveNavMenu.responsiveMenu.addEventListener('click', function(){
      if (!responsiveNavMenu.menuOpen) {
        TweenMax.to(responsiveNavMenu.responsiveMenu,0.6,{ease: Power3.easeInOut, right:"41vw"})
        TweenMax.to(responsiveNavMenu.responsiveInfos,0.6,{ease: Power3.easeInOut, right:"30vw"})
        TweenMax.to(responsiveNavMenu.responsiveContact,0.6,{ease: Power3.easeInOut, right:"15vw"})
        TweenMax.to(responsiveNavMenu.responsiveOeuvres,0.6,{ease: Power3.easeInOut, right:"0vw"})

        TweenMax.to(responsiveNavMenu.responsiveMenu,0.6,{ease: Power3.easeInOut, color:"#BABABA"})
        responsiveNavMenu.responsiveMenuOpen = true
      }
      else{
        TweenMax.to(responsiveNavMenu.responsiveMenu,0.6,{ease: Power3.easeInOut, right:0})
        TweenMax.to(responsiveNavMenu.responsiveInfos,0.6,{ease: Power3.easeInOut, right:"-50vw"})
        TweenMax.to(responsiveNavMenu.responsiveContact,0.6,{ease: Power3.easeInOut, right:"-50vw"})
        TweenMax.to(responsiveNavMenu.responsiveOeuvres,0.6,{ease: Power3.easeInOut, right:"-50vw"})

        TweenMax.to(responsiveNavMenu.responsiveMenu,0.6,{ease: Power3.easeInOut, color:"black"})
        responsiveNavMenu.responsiveMenuOpen = false
      }
    })
  },
}
responsiveNavMenu.animation()
