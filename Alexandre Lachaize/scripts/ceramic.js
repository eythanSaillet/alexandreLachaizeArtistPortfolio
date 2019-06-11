let customScrollBar = {
  pageSizeMarker : document.querySelector('.container'),
  rellaxSizeMarker : document.querySelector('.container_artWall_columnA'),
  scrollBar : document.querySelector('.fixedInterface_scrollBar'),
  scrollBarBar : document.querySelector('.fixedInterface_scrollBar_bar'),


  animation : function(){
    let documentHeight = customScrollBar.pageSizeMarker.offsetHeight-window.innerHeight+803
    let scrollBarHeight
    let documentPos
    let scrollBarPos

    let windowHeight

    let rellaxSize

    let scrollBarPosVh
    let scrollBarHeightVh

    // rellaxSize = customScrollBar.rellaxSizeMarker.getAttribute('style')
    //
    // for (var i = 0; rellaxSize.length; i++) {
    //   console.log(rellaxSize[i])
    // }

    window.addEventListener('resize',function(){
      documentHeight = customScrollBar.pageSizeMarker.offsetHeight-window.innerHeight+803
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
