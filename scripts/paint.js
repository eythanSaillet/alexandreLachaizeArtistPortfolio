let customScrollBar = {
  pageSizeMarker : document.querySelector('.container'),
  rellaxSizeMarker : document.querySelector('.container_artWall_columnA'),
  scrollBar : document.querySelector('.fixedInterface_scrollBar'),
  scrollBarBar : document.querySelector('.fixedInterface_scrollBar_bar'),


  animation : function(){
    let documentHeight = customScrollBar.pageSizeMarker.offsetHeight-window.innerHeight
    let scrollBarHeight
    let documentPos
    let scrollBarPos

    let windowHeight

    let rellaxSize

    let scrollBarPosVh
    let scrollBarHeightVh

    window.addEventListener('resize',function(){
      documentHeight = customScrollBar.pageSizeMarker.offsetHeight-window.innerHeight
    })

    window.addEventListener('scroll',function(){

      documentPos = window.scrollY
      scrollBarHeight = customScrollBar.scrollBar.offsetHeight-customScrollBar.scrollBarBar.offsetHeight
      scrollBarPos = (scrollBarHeight*documentPos)/documentHeight

      windowHeight = window.innerHeight
      scrollBarHeightVh = (scrollBarHeight*100)/windowHeight
      scrollBarPosVh = (scrollBarPos*100)/windowHeight

      //console.log(documentHeight,scrollBarHeight,documentPos,scrollBarPos,windowHeight,scrollBarPosVh,scrollBarHeightVh)
      customScrollBar.scrollBarBar.style.top = scrollBarPosVh+"vh"
    })
  },
}
customScrollBar.animation()

artOverlay = {
  overlay : document.querySelector('.artOverlay'),
  enterItem : document.querySelectorAll('.container_artWall img'),
  exitItem : document.querySelector('.artOverlay_cancel'),

  // HIDDEN BACKGROUND DOM VAR
  header : document.querySelector('.header'),
  interface : document.querySelector('.fixedInterface'),
  container : document.querySelector('.container'),

  display : function(){
    artOverlay.exitItem.addEventListener('click',function(){
      TweenMax.to(artOverlay.overlay,1,{ease: Power3.easeInOut, x:"100vw"})
      TweenMax.to(artOverlay.header,1,{ease: Power3.easeInOut, opacity:1})
      TweenMax.to(artOverlay.interface,1,{ease: Power3.easeInOut, opacity:1})
      TweenMax.to(artOverlay.container,1,{ease: Power3.easeInOut, opacity:1})
    })

    artOverlay.enterItem.forEach(function(e){
      e.addEventListener('click',function(){

        data = e.getAttribute("data")
        pieceDisplay.infoDisplay()

        TweenMax.to(artOverlay.overlay,1,{ease: Power3.easeInOut, x:"0vw"})
        TweenMax.to(artOverlay.header,1,{ease: Power3.easeInOut, opacity:0})
        TweenMax.to(artOverlay.interface,1,{ease: Power3.easeInOut, opacity:0})
        TweenMax.to(artOverlay.container,1,{ease: Power3.easeInOut, opacity:0})
      })
    })
  },

}
artOverlay.display()


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
