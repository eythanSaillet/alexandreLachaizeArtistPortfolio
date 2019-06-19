let ceramicPiece = []
let data

let Piece = function(title,text,size,srcTabPic) {
   this.title = title;
   this.text = text;
   this.size = size;
   this.srcTabPic = srcTabPic;
   this.totalNumberPic = srcTabPic.length;
   this.currentNumberPic = 1;
}

let test = new Piece("test titre",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/alo-min.jpg","../images/yes-min.jpg","../images/bisous-min.jpg","../images/alo-min.jpg"])

let test2 = new Piece("test 2 titre",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"200 x 200",
["../images/yes-min.jpg","../images/alo-min.jpg","../images/bisous-min.jpg"])

let test3 = new Piece("test 3 titre",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"300 x 300",
["../images/bisous-min.jpg","../images/yes-min.jpg","../images/bisous-min.jpg"])


ceramicPiece.push(test,test2,test3,test2,test3,test,test,test3,test2)

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

      for (var i = 0; i < ceramicPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",ceramicPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.columnA.appendChild(div)
      }
      for (var i = 1; i < ceramicPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",ceramicPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.columnC.appendChild(div)
      }
      for (var i = 2; i < ceramicPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",ceramicPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.columnB.appendChild(div)
      }

    },

    infoDisplay : function(){
      ceramicPiece[data].currentNumberPic = 1
      pieceDisplay.title.innerHTML = ceramicPiece[data].title
      pieceDisplay.text.innerHTML = ceramicPiece[data].text
      pieceDisplay.size.innerHTML = ceramicPiece[data].size
      pieceDisplay.totalNumberPic.innerHTML = ceramicPiece[data].totalNumberPic
      pieceDisplay.currentNumberPic.innerHTML = ceramicPiece[data].currentNumberPic
      pieceDisplay.img.setAttribute("src",ceramicPiece[data].srcTabPic[ceramicPiece[data].currentNumberPic-1])
    },

    picSelection : function(){
      pieceDisplay.nextPic.addEventListener('click',function(){
        if (ceramicPiece[data].currentNumberPic<ceramicPiece[data].totalNumberPic) {
          ceramicPiece[data].currentNumberPic++
          pieceDisplay.currentNumberPic.innerHTML = ceramicPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",ceramicPiece[data].srcTabPic[ceramicPiece[data].currentNumberPic-1])
        }
      })
      pieceDisplay.prevPic.addEventListener('click',function(){
        if (ceramicPiece[data].currentNumberPic>1) {
          ceramicPiece[data].currentNumberPic--
          pieceDisplay.currentNumberPic.innerHTML = ceramicPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",ceramicPiece[data].srcTabPic[ceramicPiece[data].currentNumberPic-1])
        }
      })
    },

    pieceSelection : function(){
      let tl = new TimelineMax();

      pieceDisplay.nextPiece.addEventListener('click',function(){
        if (data<ceramicPiece.length-1) {
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
    }
}
console.log(pieceDisplay)
pieceDisplay.wallDisplay()
pieceDisplay.picSelection()
pieceDisplay.pieceSelection()
