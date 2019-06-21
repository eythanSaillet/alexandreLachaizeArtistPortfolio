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

let annonciation = new Piece("Annonciation",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/annonciation/00002017_annonciation_1640x3814.jpg","../images/wall/ceramic/annonciation/00002017_annonciation_1685x4032.jpg","../images/wall/ceramic/annonciation/00002017_annonciation_1745x3585.jpg","../images/wall/ceramic/annonciation/00002017_annonciation_2268x4032.jpg","../images/wall/ceramic/annonciation/00002017_annonciation_2984x2268.jpg","../images/wall/ceramic/annonciation/00002017_annonciation_4032x2268.jpg","../images/wall/ceramic/annonciation/00002017_annonciation1_2268x4032.jpg","../images/wall/ceramic/annonciation/00002017_annonciation2_2268x4032.jpg","../images/wall/ceramic/annonciation/00002017_annonciation3_2268x4032.jpg"])

let tombeSurMoiLeCielPourvuQueJeMeVenge = new Piece("Tombe sur moi le ciel pourvu que je me venge",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/tombeSurMoiLeCielPourvuQueJeMeVenge/00002005_Tombesurmoilecielpourvuquejemevenge_1182x3550.jpg","../images/wall/ceramic/tombeSurMoiLeCielPourvuQueJeMeVenge/00002005_Tombesurmoilecielpourvuquejemevenge_1443x3559.jpg","../images/wall/ceramic/tombeSurMoiLeCielPourvuQueJeMeVenge/00002005_Tombesurmoilecielpourvuquejemevenge_1606x3300.jpg"])

let pandore = new Piece("Pandore",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/pandore/00002006_pandore_2661x1948.jpg","../images/wall/ceramic/pandore/00002006_pandore_3312x2087.jpg","../images/wall/ceramic/pandore/00002006_pandore_3901x1968.jpg","../images/wall/ceramic/pandore/00002006_pandore_3905x1917.jpg","../images/wall/ceramic/pandore/00002006_pandore_3915x2068.jpg","../images/wall/ceramic/pandore/00002006_pandore_3919x2268.jpg","../images/wall/ceramic/pandore/00002006_pandore_4032x1872.jpg"])

let totem1 = new Piece("Totem 1",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/totem1/00002007_totem_1200x1600.jpg","../images/wall/ceramic/totem1/00002007_totem1_1200x1600.jpg","../images/wall/ceramic/totem1/00002007_totem2_1200x1600.jpg","../images/wall/ceramic/totem1/00002007_totem3_1200x1600.jpg","../images/wall/ceramic/totem1/00002007_totem4_1200x1600.jpg","../images/wall/ceramic/totem1/00002007_totem5_1200x1600.jpg"])

let devineSiTuPeuxChoisisSiTuLOses = new Piece("Devine si tu peux, choisis si tu l'oses",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/devineSiTuPeux,ChoisisSiTuL'Oses/00002007_devinesitupeux_1200x1600.jpg","../images/wall/ceramic/devineSiTuPeux,ChoisisSiTuL'Oses/00002007_devinesitupeux1_1200x1600.jpg","../images/wall/ceramic/devineSiTuPeux,ChoisisSiTuL'Oses/00002007_devinesitupeux2_1200x1600.jpg","../images/wall/ceramic/devineSiTuPeux,ChoisisSiTuL'Oses/00002007_devinesitupeux3_1200x1600.jpg"])

let etDeroberAuJourUneFlamme = new Piece("Et dérober au jour une flamme si noire",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/Et dérober au jour une flamme si noire/000002007_etderoberaujouruneflamme_257x640.jpg","../images/wall/ceramic/Et dérober au jour une flamme si noire/000002007_etderoberaujouruneflamme_480x640.jpg","../images/wall/ceramic/Et dérober au jour une flamme si noire/000002007_etderoberaujouruneflamme_1200x1600.jpg","../images/wall/ceramic/Et dérober au jour une flamme si noire/000002007_etderoberaujouruneflamme1_480x640.jpg","../images/wall/ceramic/Et dérober au jour une flamme si noire/000002007_etderoberaujouruneflamme2_480x640.jpg","../images/wall/ceramic/Et dérober au jour une flamme si noire/000002007_etderoberaujouruneflamme3_480x640.jpg","../images/wall/ceramic/Et dérober au jour une flamme si noire/000002007_etderoberaujouruneflamme4_480x640.jpg"])

let mauriac = new Piece("Mauriac",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/mauriac/00002007_mauriac1_1200x1600.jpg","../images/wall/ceramic/mauriac/00002007_mauriac_1200x1600.jpg","../images/wall/ceramic/mauriac/00002007_mauriac2_1200x1600.jpg","../images/wall/ceramic/mauriac/00002007_mauriac3_1200x1600.jpg","../images/wall/ceramic/mauriac/00002007_mauriac4_1200x1600.jpg","../images/wall/ceramic/mauriac/00002007_mauriac5_1200x1600.jpg","../images/wall/ceramic/mauriac/00002007_mauriac6_1200x1600.jpg","../images/wall/ceramic/mauriac/00002007_mauriac7_1200x1600.jpg"])

let jeLeVisJeRougis = new Piece("Je le vis, je rougis, je pâlis à sa vue",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/Je le vis, je rougis, je pâlis à sa vue/00002007_jelevisjerougis_1617x2877.jpg","../images/wall/ceramic/Je le vis, je rougis, je pâlis à sa vue/00002007_jelevisjerougis_1923x3757.jpg","../images/wall/ceramic/Je le vis, je rougis, je pâlis à sa vue/00002007_jelevisjerougis_1966x3205.jpg","../images/wall/ceramic/Je le vis, je rougis, je pâlis à sa vue/00002007_jelevisjerougis_2025x3697.jpg","../images/wall/ceramic/Je le vis, je rougis, je pâlis à sa vue/00002007_jelevisjerougis_2268x4032.jpg"])

let totem2 = new Piece("Totem 2",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/totem2/00002008_totem_1503x3898.jpg","../images/wall/ceramic/totem2/00002008_totem_1506x3960.jpg","../images/wall/ceramic/totem2/00002008_totem_1750x4032.jpg","../images/wall/ceramic/totem2/00002008_totem_1838x3814.jpg","../images/wall/ceramic/totem2/00002008_totem_1888x3880.jpg","../images/wall/ceramic/totem2/00002008_totem_2268x4032.jpg","../images/wall/ceramic/totem2/00002008_totem1_2268x4032.jpg","../images/wall/ceramic/totem2/00002008_totem2_2268x4032.jpg","../images/wall/ceramic/totem2/00002008_totem3_2268x4032.jpg","../images/wall/ceramic/totem2/00002008_totem4_2268x4032.jpg"])

let diable = new Piece("Diable",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"",
["../images/wall/ceramic/diable/00002004_diable_2268x2303.jpg","../images/wall/ceramic/diable/00002004_diable_2824x2045.jpg"])

ceramicPiece.push(annonciation,totem2,jeLeVisJeRougis,mauriac,etDeroberAuJourUneFlamme,devineSiTuPeuxChoisisSiTuLOses,totem1,pandore,tombeSurMoiLeCielPourvuQueJeMeVenge,diable)


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
pieceDisplay.wallDisplay()
pieceDisplay.picSelection()
pieceDisplay.pieceSelection()
