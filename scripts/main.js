console.log(screen.width)
let welcomeOverlay = {

  // Welcome Overlay const

  overlay : document.querySelector('.welcomeOverlay'),
  underline : document.querySelector('.welcomeOverlay_underline'),
  name : document.querySelector('.welcomeOverlay_nameDiv h1'),
  container : document.querySelector('.container'),
  scrollBarBar : document.querySelector('.container_scrollBar_bar'),

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
    }, 3400);

    setTimeout(function () {
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
