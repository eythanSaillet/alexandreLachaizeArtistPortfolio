let otherPiece = []
let data

let Piece = function(title,text,size,srcTabPic) {
   this.title = title;
   this.text = text;
   this.size = size;
   this.srcTabPic = srcTabPic;
   this.totalNumberPic = srcTabPic.length;
   this.currentNumberPic = 1;
}

let everNever = new Piece("Besace Ever Never",
"2010, veau, crocodile, galuchat.",
"42x38cm",
["../images/wall/other/Travail du cuir/Ever Never/00002010_evernever_1024x768.jpg","../images/wall/other/Travail du cuir/Ever Never/00002010_evernever1_1024x768.jpg","../images/wall/other/Travail du cuir/Ever Never/00002010_evernever2_1024x768.jpg","../images/wall/other/Travail du cuir/Ever Never/00002010_evernever3_1024x768.jpg"])

////////////////////////////////////////////
// DOIT ALLER DANS NON PUBLIC EYTHAN  !!! :-)
////////////////////////////////////////////
/*
let totem = new Piece("totem",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"???x???",
["../images/wall/other/Non public/Totem Porn/00002008_totemsex_1426x3958.jpg","../images/wall/other/Non public/Totem Porn/00002008_totemsex_1490x3964.jpg","../images/wall/other/Non public/Totem Porn/00002008_totemsex_1703x3979.jpg","../images/wall/other/Non public/Totem Porn/00002008_totemsex_2268x4032.jpg","../images/wall/other/Non public/Totem Porn/00002008_totemsex1_2268x4032.jpg","../images/wall/other/Non public/Totem Porn/00002008_totemsex2_2268x4032.jpg","../images/wall/other/Non public/Totem Porn/00002008_totemsex3_2268x4032.jpg","../images/wall/other/Non public/Totem Porn/00002008_totemsex4_2268x4032.jpg"])
*/

let siVisPacem = new Piece("Besace Si Vis Pacem, Para Bellum",
"2010, veau, crocodile, python et galuchat.",
"42x38cm",
["../images/wall/other/Travail du cuir/Si Vis Pacem/00002010_sivispacem_1024x768.jpg","../images/wall/other/Travail du cuir/Si Vis Pacem/00002010_sivispacem1_1024x768.jpg","../images/wall/other/Travail du cuir/Si Vis Pacem/00002010_sivispacem2_1024x768.jpg","../images/wall/other/Travail du cuir/Si Vis Pacem/00002010_sivispacem3_1024x768.jpg"])

otherPiece.push(everNever,siVisPacem)


let pieceDisplay = {

    // Wall DOM var
    columnA : document.querySelector('.container_artWall_columnA'),
    columnB : document.querySelector('.container_artWall_columnB'),
    columnC : document.querySelector('.container_artWall_columnC'),

    // Interface DOM var
    title : document.querySelector('.artOverlay_info_title'),
    text : document.querySelector('.artOverlay_info_text'),
    size : document.querySelector('.artOverlay_info_size'),
    totalNumberPic : document.querySelector('.artOverlay_pic_nav_numbers span:nth-child(3)'),
    currentNumberPic : document.querySelector('.artOverlay_pic_nav_numbers span:nth-child(1)'),
    img : document.querySelector('.artOverlay_pic_container img'),

    // Interaction DOM var
    prevPic : document.querySelector('.artOverlay_pic_nav img:nth-child(1)'),
    nextPic : document.querySelector('.artOverlay_pic_nav img:nth-child(3)'),
    prevPiece : document.querySelector('.artOverlay_nav_arrowPrev'),
    nextPiece : document.querySelector('.artOverlay_nav_arrowNext'),

    wallDisplay : function(){

      for (var i = 0; i < otherPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",otherPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.columnA.appendChild(div)
      }
      for (var i = 1; i < otherPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",otherPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.columnC.appendChild(div)
      }
      for (var i = 2; i < otherPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",otherPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.columnB.appendChild(div)
      }

    },

    infoDisplay : function(){
      otherPiece[data].currentNumberPic = 1
      pieceDisplay.title.innerHTML = otherPiece[data].title
      pieceDisplay.text.innerHTML = otherPiece[data].text
      pieceDisplay.size.innerHTML = otherPiece[data].size
      pieceDisplay.totalNumberPic.innerHTML = otherPiece[data].totalNumberPic
      pieceDisplay.currentNumberPic.innerHTML = otherPiece[data].currentNumberPic
      pieceDisplay.img.setAttribute("src",otherPiece[data].srcTabPic[otherPiece[data].currentNumberPic-1])
      document.querySelector('.zoomOverlay img').setAttribute("src",otherPiece[data].srcTabPic[otherPiece[data].currentNumberPic-1])
    },

    picSelection : function(){
      pieceDisplay.nextPic.addEventListener('click',function(){
        if (otherPiece[data].currentNumberPic<otherPiece[data].totalNumberPic) {
          otherPiece[data].currentNumberPic++
          pieceDisplay.currentNumberPic.innerHTML = otherPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",otherPiece[data].srcTabPic[otherPiece[data].currentNumberPic-1])
          document.querySelector('.zoomOverlay img').setAttribute("src",ceramicPiece[data].srcTabPic[ceramicPiece[data].currentNumberPic-1])
        }
      })
      pieceDisplay.prevPic.addEventListener('click',function(){
        if (otherPiece[data].currentNumberPic>1) {
          otherPiece[data].currentNumberPic--
          pieceDisplay.currentNumberPic.innerHTML = otherPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",otherPiece[data].srcTabPic[otherPiece[data].currentNumberPic-1])
          document.querySelector('.zoomOverlay img').setAttribute("src",ceramicPiece[data].srcTabPic[ceramicPiece[data].currentNumberPic-1])
        }
      })
    },

    pieceSelection : function(){
      let tl = new TimelineMax();

      pieceDisplay.nextPiece.addEventListener('click',function(){
        if (data<otherPiece.length-1) {
          data++
          TweenMax.to(pieceDisplay.title,0.05,{ease: Power3.easeInOut, opacity:0})
          TweenMax.to(pieceDisplay.text,0.05,{ease: Power3.easeInOut, opacity:0})
          TweenMax.to(pieceDisplay.size,0.05,{ease: Power3.easeInOut, opacity:0})
          setTimeout(function () {
            pieceDisplay.infoDisplay()
            TweenMax.to(pieceDisplay.title,0.05,{ease: Power3.easeInOut, opacity:1})
            TweenMax.to(pieceDisplay.text,0.05,{ease: Power3.easeInOut, opacity:1})
            TweenMax.to(pieceDisplay.size,0.05,{ease: Power3.easeInOut, opacity:1})
          }, 100);
        }
      })
      pieceDisplay.prevPiece.addEventListener('click',function(){
        if (data>0) {
          data--
          TweenMax.to(pieceDisplay.title,0.05,{ease: Power3.easeInOut, opacity:0})
          TweenMax.to(pieceDisplay.text,0.05,{ease: Power3.easeInOut, opacity:0})
          TweenMax.to(pieceDisplay.size,0.05,{ease: Power3.easeInOut, opacity:0})
          setTimeout(function () {
            pieceDisplay.infoDisplay()
            TweenMax.to(pieceDisplay.title,0.05,{ease: Power3.easeInOut, opacity:1})
            TweenMax.to(pieceDisplay.text,0.05,{ease: Power3.easeInOut, opacity:1})
            TweenMax.to(pieceDisplay.size,0.05,{ease: Power3.easeInOut, opacity:1})
          }, 100);
        }
      })
    },

    zoomPicDisplay : function(){
      document.querySelector('.artOverlay_pic_container').addEventListener('click', () => {
      document.querySelector('.zoomOverlay').style.display = "flex"
      TweenMax.to(document.querySelector('.zoomOverlay'), 0.5, {opacity: 1})
        active = true
      })
      document.querySelector('.zoomOverlay').addEventListener('click', () => {
        console.log('lol');
        
        TweenMax.to(document.querySelector('.zoomOverlay'), 0.5, {opacity: 0, onComplete : zoomOverlayOut})
      })
      let zoomOverlayOut = function(){
        document.querySelector('.zoomOverlay').style.display = "none"
      }
    }
}
pieceDisplay.wallDisplay()
pieceDisplay.picSelection()
pieceDisplay.pieceSelection()
pieceDisplay.zoomPicDisplay()
