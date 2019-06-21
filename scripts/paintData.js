let abstractPaintPiece = []
let figurativePaintPiece = []
let paintPiece = []
let data

let Piece = function(title,text,size,srcTabPic) {
   this.title = title;
   this.text = text;
   this.size = size;
   this.srcTabPic = srcTabPic;
   this.totalNumberPic = srcTabPic.length;
   this.currentNumberPic = 1;
}

let rubans = new Piece("Rubans",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002003_rubans_827x828.jpg"])

let aquarelle = new Piece("Aquarelle",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002013_aquarelle_1379x2047.jpg"])

let aquarelleCellules = new Piece("Aquarelle cellules",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002013_aquarellecellules_1529x2048.jpg"])

let aquarelleRubans2 = new Piece("Aquarelle rubans 2",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002013_aquarellerubans2_1936x2592.jpg"])

let aquarelleRubansEtCellules = new Piece("Aquarelle rubans et cellules",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules_2922x4212.jpg"])

let aquarelleRubansEtCellules2 = new Piece("Aquarelle rubans et cellules 2",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules2_1742x2435.jpg"])

let aquarelleRubansEtCellules3 = new Piece("Aquarelle rubans et cellules 3",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules3_1603x2299.jpg"])

let aquarelleRubansEtCellules4 = new Piece("Aquarelle rubans et cellules 4",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules4_1548x2044.jpg"])

let aquarelleRubansEtCellules5 = new Piece("Aquarelle rubans et cellules 5",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002014_aquarellerubansetcellules5_1515x2392.jpg"])

let mixtePapier = new Piece("Mixte papier",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002015_mixtepapier_2174x2923.jpg"])

let strates1 = new Piece("Strates 1",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00012015_strates1-2088x2784.jpg"])

let strates2 = new Piece("Strates 2",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00012015_strates2-1804x2233.jpg"])

let strates3 = new Piece("Strates 3",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002015_strates3-2127x2633.jpg"])

let strates4 = new Piece("Strates 4",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002015_strates4-2122x2690.jpg"])

let diptyque = new Piece("Diptyque",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002016_diptyque_3572x2472.jpg"])

let chuteDesAngesRebelles = new Piece("Chute des anges rebelles",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002017_chutedesangesrebelles_2782x3479.jpg"])

let aquaGouache = new Piece("Aqua gouache",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002018_aquagouache_2580x3805.jpg"])

let aquaGouache2 = new Piece("Aqua gouache 2",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002019_aquagouache_2094x3067.jpg"])

let aquaGouachePapier = new Piece("Aqua gouache papier",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00002018_aquagouachepapier_2636x3836.jpg"])

let portemencroixjbosch = new Piece("portemencroixjbosch",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00112015_portemencroixjbosch_1727x2426.jpg"])

let huileRubans = new Piece("Huile rubans",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Abstraites/00122018_huilerubans_1240x1594.jpg"])

abstractPaintPiece.push(rubans,aquarelle,aquarelleCellules,aquarelleRubans2,aquarelleRubansEtCellules,aquarelleRubansEtCellules2,aquarelleRubansEtCellules3,aquarelleRubansEtCellules4,aquarelleRubansEtCellules5,mixtePapier,strates1,strates2,strates3,strates4,diptyque,chuteDesAngesRebelles,aquaGouache,aquaGouachePapier,aquaGouache2,portemencroixjbosch,huileRubans)

let paysage = new Piece("Paysage",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Figuratives/00002018_paysage_2524x3526.jpg"])

let paysage2 = new Piece("Paysage 2",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Figuratives/00002018_paysage2_2632x3790.jpg"])

let sansTitre = new Piece("Sans titre",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Figuratives/00002014_sanstitre_2189x2889.jpg"])

let sansTitre2 = new Piece("Sans titre 2",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Figuratives/00002014_sanstitre2_4890x6744.jpg"])

let sansTitre3 = new Piece("Sans titre 3",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Figuratives/00002016_sanstitre_2139x2882.jpg"])

let sansTitre4 = new Piece("Sans titre 4",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Figuratives/00002016_sanstitre2_2107x2894.jpg"])

let sansTitre5 = new Piece("Sans titre 5",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"100 x 100",
["../images/wall/paint/Figuratives/00002016_sanstitre3_2153x2860.jpg"])

figurativePaintPiece.push(paysage,paysage2,sansTitre,sansTitre2,sansTitre3,sansTitre4,sansTitre5)
paintPiece.push(rubans,aquarelle,aquarelleCellules,aquarelleRubans2,aquarelleRubansEtCellules,aquarelleRubansEtCellules2,aquarelleRubansEtCellules3,aquarelleRubansEtCellules4,aquarelleRubansEtCellules5,mixtePapier,strates1,strates2,strates3,strates4,diptyque,chuteDesAngesRebelles,aquaGouache,aquaGouachePapier,aquaGouache2,portemencroixjbosch,huileRubans,paysage,paysage2,sansTitre,sansTitre2,sansTitre3,sansTitre4,sansTitre5)

let pieceDisplay = {

    // Wall DOM var
    aColumnA : document.querySelector('.container_artWallA .container_artWall_columnA'),
    aColumnB : document.querySelector('.container_artWallA .container_artWall_columnB'),
    aColumnC : document.querySelector('.container_artWallA .container_artWall_columnC'),

    fColumnA : document.querySelector('.container_artWallB .container_artWall_columnA'),
    fColumnB : document.querySelector('.container_artWallB .container_artWall_columnB'),
    fColumnC : document.querySelector('.container_artWallB .container_artWall_columnC'),

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

      for (var i = 0; i < abstractPaintPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",abstractPaintPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.aColumnA.appendChild(div)
      }
      for (var i = 1; i < abstractPaintPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",abstractPaintPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.aColumnC.appendChild(div)
      }
      for (var i = 2; i < abstractPaintPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",abstractPaintPiece[i].srcTabPic[0])
        img.setAttribute("data",i)
        div.appendChild(img)

        pieceDisplay.aColumnB.appendChild(div)
      }


      for (var i = 0; i < figurativePaintPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",figurativePaintPiece[i].srcTabPic[0])
        img.setAttribute("data",i+abstractPaintPiece.length)
        div.appendChild(img)

        pieceDisplay.fColumnA.appendChild(div)
      }
      for (var i = 1; i < figurativePaintPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",figurativePaintPiece[i].srcTabPic[0])
        img.setAttribute("data",i+abstractPaintPiece.length)
        div.appendChild(img)

        pieceDisplay.fColumnC.appendChild(div)
      }
      for (var i = 2; i < figurativePaintPiece.length; i=i+3) {
        let div = document.createElement("div")
        div.classList.add("container_artWall_pic")
        let img = document.createElement("img")
        img.setAttribute("src",figurativePaintPiece[i].srcTabPic[0])
        img.setAttribute("data",i+abstractPaintPiece.length)
        div.appendChild(img)

        pieceDisplay.fColumnB.appendChild(div)
      }

    },

    infoDisplay : function(){
      paintPiece[data].currentNumberPic = 1
      pieceDisplay.title.innerHTML = paintPiece[data].title
      pieceDisplay.text.innerHTML = paintPiece[data].text
      pieceDisplay.size.innerHTML = paintPiece[data].size
      pieceDisplay.totalNumberPic.innerHTML = paintPiece[data].totalNumberPic
      pieceDisplay.currentNumberPic.innerHTML = paintPiece[data].currentNumberPic
      pieceDisplay.img.setAttribute("src",paintPiece[data].srcTabPic[paintPiece[data].currentNumberPic-1])
    },

    picSelection : function(){

      pieceDisplay.nextPic.addEventListener('click',function(){
        if (paintPiece[data].currentNumberPic<paintPiece[data].totalNumberPic && data<paintPiece.length) {
          paintPiece[data].currentNumberPic++
          pieceDisplay.currentNumberPic.innerHTML = paintPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",paintPiece[data].srcTabPic[paintPiece[data].currentNumberPic-1])
        }
      })
      pieceDisplay.prevPic.addEventListener('click',function(){
        if (paintPiece[data].currentNumberPic>1 && data<paintPiece.length) {
          paintPiece[data].currentNumberPic--
          pieceDisplay.currentNumberPic.innerHTML = paintPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",paintPiece[data].srcTabPic[paintPiece[data].currentNumberPic-1])
        }
      })
    },

    pieceSelection : function(){

      pieceDisplay.nextPiece.addEventListener('click',function(){
        if (data<paintPiece.length-1) {
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
pieceDisplay.wallDisplay()
pieceDisplay.picSelection()
pieceDisplay.pieceSelection()
