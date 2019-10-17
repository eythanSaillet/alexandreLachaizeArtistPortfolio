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
"2003, h.s.b.",
"60x60cm",
["../images/wall/paint/Abstraites/00002003_rubans_827x828.jpg"])

let aquarelle = new Piece("Sans titre",
"2013, aquarelle sur papier, coll. part. Strasbourg.",
"29X21cm",
["../images/wall/paint/Abstraites/00002013_aquarelle_1379x2047.jpg"])

let aquarelleCellules = new Piece("Cellules",
" 2013, aquarelle sur papier, coll. part. Strasbourg.",
"29x21cm",
["../images/wall/paint/Abstraites/00002013_aquarellecellules_1529x2048.jpg"])

let aquarelleRubans2 = new Piece("Rubans 2",
"2013, aquarelle sur papier, coll. part. Strasbourg.",
"29x21cm",
["../images/wall/paint/Abstraites/00002013_aquarellerubans2_1936x2592.jpg"])

let aquarelleRubansEtCellules = new Piece("Rubans et cellules",
"2013, aquarelle sur papier.",
"18x13cm",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules_2922x4212.jpg"])

let aquarelleRubansEtCellules2 = new Piece("Rubans et cellules 2",
"2013, aquarelle sur papier.",
"18x13cm",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules2_1742x2435.jpg"])

let aquarelleRubansEtCellules3 = new Piece("Rubans et cellules 3",
"2013, aquarelle sur papier.",
"18x13cm",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules3_1603x2299.jpg"])

let aquarelleRubansEtCellules4 = new Piece("Rubans et cellules 4",
"2013, aquarelle sur papier.",
"18x13cm",
["../images/wall/paint/Abstraites/00002013_aquarellerubansetcellules4_1548x2044.jpg"])

let aquarelleRubansEtCellules5 = new Piece("Rubans et cellules 5",
"2014, aquarelle sur papier.",
"45x29cm",
["../images/wall/paint/Abstraites/00002014_aquarellerubansetcellules5_1515x2392.jpg"])

let mixtePapier = new Piece("Sans titre",
"2015, techniques mixtes sur papier.",
"20x25cm",
["../images/wall/paint/Abstraites/00002015_mixtepapier_2174x2923.jpg"])

let strates1 = new Piece("Strates 1",
"Janvier 2015, aquarelle, encres et peinture vinylique sur papier.",
"31x41cm",
["../images/wall/paint/Abstraites/00012015_strates1-2088x2784.jpg"])

let strates2 = new Piece("Strates 2",
"Janvier 2015, aquarelle, encres et peinture vinylique sur papier.",
"31x41cm",
["../images/wall/paint/Abstraites/00012015_strates2-1804x2233.jpg"])

let strates3 = new Piece("Strates 3",
"2015, techniques mixtes et cire sur papier.",
"28.5x35cm",
["../images/wall/paint/Abstraites/00002015_strates3-2127x2633.jpg"])

let strates4 = new Piece("Strates 4",
" 2015, techniques mixtes et cire sur papier.",
"28.5x35cm",
["../images/wall/paint/Abstraites/00002015_strates4-2122x2690.jpg"])

let diptyque = new Piece("Diptyque",
"2016 et 2017, techniques mixtes sur papier.",
"70x100cm",
["../images/wall/paint/Abstraites/00002016_diptyque_3572x2472.jpg"])

let chuteDesAngesRebelles = new Piece("Chute des anges rebelles",
"2017 et 2018, huile, techniques mixtes et laine sur toile.",
"162x130cm",
["../images/wall/paint/Abstraites/00002017_chutedesangesrebelles_2782x3479.jpg"])

let aquaGouache = new Piece("Sans titre",
"2018, aquarelle et gouache sur papier.",
"70x100cm",
["../images/wall/paint/Abstraites/00002018_aquagouache_2580x3805.jpg"])

let aquaGouache2 = new Piece("Sans titre",
"2019, aquarelle et gouache sur papier.",
"100x70cm",
["../images/wall/paint/Abstraites/00002019_aquagouache_2094x3067.jpg"])

let aquaGouachePapier = new Piece("Sans titre",
"2018, aquarelle et gouache sur papier.",
"70x100cm",
["../images/wall/paint/Abstraites/00002018_aquagouachepapier_2636x3836.jpg"])

let portemencroixjbosch = new Piece("Portement de croix de J.Bosch",
"Novembre 2015, techniques mixtes sur papier.",
"50x70cm",
["../images/wall/paint/Abstraites/00112015_portemencroixjbosch_1727x2426.jpg"])

let huileRubans = new Piece("Sans titre",
"Décembre 2018, huile, rubans de laine et techniques mixtes sur toile.",
"146x114 cm",
["../images/wall/paint/Abstraites/00122018_huilerubans_1240x1594.jpg"])

abstractPaintPiece.push(rubans,aquarelle,aquarelleCellules,aquarelleRubans2,aquarelleRubansEtCellules,aquarelleRubansEtCellules2,aquarelleRubansEtCellules3,aquarelleRubansEtCellules4,aquarelleRubansEtCellules5,mixtePapier,strates1,strates2,strates3,strates4,diptyque,chuteDesAngesRebelles,aquaGouache,aquaGouachePapier,aquaGouache2,portemencroixjbosch,huileRubans)

let paysage = new Piece("Paysage",
"2018, aquarelle et gouache sur papier",
"70x100cm",
["../images/wall/paint/Figuratives/00002018_paysage_2524x3526.jpg"])

let paysage2 = new Piece("Paysage 2",
"2018, aquarelle et gouache sur papier, coll. part. Strasbourg.",
"70x100cm",
["../images/wall/paint/Figuratives/00002018_paysage2_2632x3790.jpg"])

let sansTitre = new Piece("Sans titre",
"2014, aquarelle, encres et feuilles d'argent sur papier.",
"63x47cm",
["../images/wall/paint/Figuratives/00002014_sanstitre_2189x2889.jpg"])

let sansTitre2 = new Piece("Sans titre",
"2014, aquarelle et feuille d'or sur papier.",
"28x19cm",
["../images/wall/paint/Figuratives/00002014_sanstitre2_4890x6744.jpg"])

let sansTitre3 = new Piece("Sans titre 1",
"2016, aquarelle et encres sur papier.",
"31x40cm",
["../images/wall/paint/Figuratives/00002016_sanstitre_2139x2882.jpg"])

let sansTitre4 = new Piece("Sans titre 2",
"2016, aquarelle, encres et fils sur papier.",
"31x23cm",
["../images/wall/paint/Figuratives/00002016_sanstitre2_2107x2894.jpg"])

let sansTitre5 = new Piece("Sans titre 3",
"2016, aquarelle et encres sur papier.",
"31x40cm",
["../images/wall/paint/Figuratives/00002016_sanstitre3_2153x2860.jpg"])

let mamie = new Piece("Mamie",
"2013, H.S.B.",
"50x50cm",
["../images/wall/paint/Figuratives/00002013_mamie_1862x1918.jpg"])

let grandMere = new Piece("Grand-mère de F.",
"2013, h.s.t., coll. part. Paris.",
"",
["../images/wall/paint/Figuratives/00002013_grandmeredef_1872x2520.jpg"])

let portraitDeF = new Piece("Portrait de F.",
"2012, h.s.t.",
"50x50cm",
["../images/wall/paint/Figuratives/00002012_portraitdef_1834x1872.jpg"])

let portraitDeCara = new Piece("Portrait de Cara",
"2012,h.s.t.",
"72x51cm",
["../images/wall/paint/Figuratives/00002012_portraitcara_3104x2105.jpg"])

let doubleAutoportrait = new Piece("Double autoportrait aux rubans bleus",
" 2012, Huile sur papier.",
"31x40cm",
["../images/wall/paint/Figuratives/00002012_doubleautoportrait_2984x2192.jpg"])

let autoportrait2 = new Piece("Autoportrait",
"2012, h.s.t.",
"38x46cm",
["../images/wall/paint/Figuratives/00002012_autoportrait_1892x2476.jpg"])

let autoportrait3 = new Piece("Autoportrait aux rubans gris",
"2012, h.s.carton.",
"80x55cm",
["../images/wall/paint/Figuratives/00002012_autoportraitauxrubansgris_1913x3006.jpg"])

let autoportrait4 = new Piece("Autoportrait aux rubans bleus 1",
"2012, h.s.papier.",
"50x36cm",
["../images/wall/paint/Figuratives/00002012_autoportraitauxrubansbleu2_1920x2560.jpg"])

let autoportrait5 = new Piece("Autoportrait aux rubans bleus 2",
"2012, h.s.papier.",
"50x36cm",
["../images/wall/paint/Figuratives/00002012_autoportraitrubansbleus_1920x2560.jpg"])

let autoportrait6 = new Piece("Autoportrait au miroir",
"2012, h.s.b.",
"100x130cm",
["../images/wall/paint/Figuratives/00002012_autoportrait au miroir_1886x2515.jpg"])

let triptyquePerso = new Piece("Triptyque Personnages aux rubans 1",
"2011, huile sur panneau de bois.",
"61x50cm",
["../images/wall/paint/Figuratives/00002011_triptyquepersonnagesauxrubans_2571x2104.jpg"])

let triptyquePerso2 = new Piece("Triptyque Personnages aux rubans 2",
"2011, h.s.bois.",
"51x60cm",
["../images/wall/paint/Figuratives/00002011_triptyquepersonnagesauxrubans2_2616x2096.jpg"])

let triptyquePerso3 = new Piece("Triptyque Personnages aux rubans 3",
"2011, huile sur panneau de bois.",
"61x50cm",
["../images/wall/paint/Figuratives/00002011_triptyquepersonnagesauxrubans3_2139x1752.jpg"])

let autoportrait7 = new Piece("Autoportrait",
"2011, h.s.b.",
"70x100cm",
["../images/wall/paint/Figuratives/00002011_autoportrait_2104x2992.jpg"])

let autoportrait8 = new Piece("Autoportrait aux rubans",
"2011, h.s.t.",
"97x146cm",
["../images/wall/paint/Figuratives/00002011_autoportraitauxrubans_2057x3124.jpg"])

let autoportrait9 = new Piece("Autoportrait aux rubans rouges",
"2011, h.s.bois.",
"61x50cm",
["../images/wall/paint/Figuratives/00002011_autoportraitauxrubansrouges_2110x2622.jpg"])

let autoportrait10 = new Piece("Autoportrait fond bleu",
" 2010, h.s.t., coll. part. Villefranche.",
"37x45cm",
["../images/wall/paint/Figuratives/00002010_autoportraitfondbleu_1752x2161.jpg"])

let autoportrait11 = new Piece("Autoportrait",
"2009 et 2010, h.s. carton de bois.",
"120x80cm",
["../images/wall/paint/Figuratives/00002009_autoportrait_1915x3022.jpg"])

let personnages = new Piece("Personnages",
"2009, h.s.carton.",
"130x97cm",
["../images/wall/paint/Figuratives/00002009_personnages3_1626x2187.jpg"])

let personnages2 = new Piece("Personnages",
"2009, h.s.carton.",
"65x50cm",
["../images/wall/paint/Figuratives/00002009_personnages3_1791x2382.jpg"])

let personnages3 = new Piece("Personnages",
"2009, h.s.t.",
"100x100cm",
["../images/wall/paint/Figuratives/00002009_personnages_1812x1805.jpg"])

let personnages4 = new Piece("Personnages",
"2009, h.s.t., coll. part.",
"",
["../images/wall/paint/Figuratives/00002009_personnages2_1854x1700.jpg"])

let autoportrait12 = new Piece("Autoportrait à la chaise rouge",
"2009,h.s.t.",
"100x100cm",
["../images/wall/paint/Figuratives/00002009_autoportraitchaiserouge_2076x2062.jpg"])

let portraitDeFemme = new Piece("Portrait de femme",
"2008, h.s.t.",
"38x46cm",
["../images/wall/paint/Figuratives/00002008_portraitfemme_2053x2544.jpg"])

let marraine = new Piece("Marraine de F.",
"2007, h.s.t., coll. part.",
"36x45cm",
["../images/wall/paint/Figuratives/00002007_marrainedef_1920x2560.jpg"])

let renaissance = new Piece("Renaissance",
"2005, h.s.b., coll. part.",
"",
["../images/wall/paint/Figuratives/00002005_renaissance_1843x1829.jpg"])

let leSonge = new Piece("Le songe",
"2004, h.s.t., coll. part.",
"format F80",
["../images/wall/paint/Figuratives/00002004_lesonge_708x954.jpg"])

let chloeC = new Piece("Chloé C.",
"2004, h.s.t., coll. part.",
"format F10",
["../images/wall/paint/Figuratives/00002004_chloec_939x11160.jpg"])

let tanteAM = new Piece("Tante Anne-Marie enfant",
"2000, h.s.t., coll. part. dép. Ain.",
"60x60cm",
["../images/wall/paint/Figuratives/00002000_tanteannemarieenfant_682x753.jpg"])

let tanteAM2 = new Piece("Tante Anne-Marie enfant 2",
"2000, h.s.t., coll. part.  Fareins.",
"20x20cm",
["../images/wall/paint/Figuratives/00002000_tanteannemarieenfant2_864x876.jpg"])

let tanteAM3 = new Piece("Tante Anne-Marie adulte 2",
"2000, h.s.t.",
"20x20cm",
["../images/wall/paint/Figuratives/00002000_tanteannemarieadulte2_1507x1531.jpg"])

let mamie2 = new Piece("Mamie",
" 2000, h.s.t.",
"80x80cm",
["../images/wall/paint/Figuratives/00002000_mamie_825x856.jpg"])

let mamie3 = new Piece("Mamie en mariée",
"2000, h.s.t.,  coll.personnelle.",
"80x80cm",
["../images/wall/paint/Figuratives/00002000_mamieenmariee_2074x2121.jpg"])

let mamian = new Piece("Mamian",
"2000, h.s.t.",
"80x80cm",
["../images/wall/paint/Figuratives/00002000_mamian_2077x2087.jpg"])

let maman = new Piece("Maman enfant",
"2000, h.s.t., coll.personnelle.",
"40x40cm",
["../images/wall/paint/Figuratives/00002000_mamanenfant_2026x2038.jpg"])

let grandPere = new Piece("Grand-père",
"2000, h.s.t., coll.part. Villefranche sur Saône.",
"20x20cm",
["../images/wall/paint/Figuratives/00002000_grandpere_1525x1523.jpg"])

let grandPere2 = new Piece("Grand-père Lachaize",
"2000, h.s.t., coll.part. Villefranche sur Saône.",
"20x20cm",
["../images/wall/paint/Figuratives/00002000_grandperelachaize_1520x1531.jpg"])

let grandPere3 = new Piece("Grand-père enfant 2",
"2000, h.s.t., coll.part. St Jean le Vieux.",
"60x60cm",
["../images/wall/paint/Figuratives/00002000_grandpereenfant2_831x824.jpg"])

let tanteMarthe = new Piece("Tante Marthe 2",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_tantemarthe2_838x831.jpg"])

let tanteMarthe2 = new Piece("Tante Marthe",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_tantemarthe_818x818.jpg"])

let tanteAM4 = new Piece("Tante Anne-Marie enfant",
"1999, h.s.t., coll. part. Pierre de Bresse.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_tanteannemarieenfant_851x844.jpg"])

let tanteAM5 = new Piece("Tante Anne-Marie adulte",
"1999, h.s.t., coll. part. Epinay.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_tanteannemarieadulte_864x869.jpg"])

let mereDA = new Piece("Mère d'A. Duperrey",
"1999, h.s.t., coll. part. Santa Fé,USA.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_meredupererrey_851x850.jpg"])

let mereDA2 = new Piece("Mère d'A. Duperrey 2",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_mereduperrey2_831x831.jpg"])

let mamie4 = new Piece("Mamie",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_mamie_844x863.jpg"])

let musulmanes = new Piece("Les Musulmanes",
"1999, h.s.t., coll. part. Fareins.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999-musulmanes_838x844.jpg"])

let mondaines = new Piece("Les mondaines",
"1999, h.s.t.,  coll.part. Venice, Californie, USA.",
"20x20cm",
["../images/wall/paint/Figuratives/000001999_lesmondaines_585x610.jpg"])

let grandPere4 = new Piece("Grand-père 2",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_grandpere2_838x831.jpg"])

let grandPere5 = new Piece("Grand-père",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_grandpere_877x863.jpg"])

let timor = new Piece("Femme du Timor",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_femmetimor_844x844.jpg"])

let compagneDA = new Piece("Compagne d'A.Camus",
"1999, h.s.t., coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999-compagneacamus_838x837.jpg"])

let cecile = new Piece("Cécile",
"1999, h.s.t., coll. part. Grenoble.",
"40x40cm",
["../images/wall/paint/Figuratives/00001999_cecile_760x759.jpg"])

let rugby = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Paris.",
"80x80cm",
["../images/wall/paint/Figuratives/00001999_rugbymen9_773x792.jpg"])

let rugby2 = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Orcet.",
"80x80cm",
["../images/wall/paint/Figuratives/00001999_rugbymen8_870x798.jpg"])

let rugby3 = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Oyonnax.",
"60x60cm",
["../images/wall/paint/Figuratives/00001999_rugbymen7_766x772.jpg"])

let rugby4 = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Oyonnax.",
"60x60cm",
["../images/wall/paint/Figuratives/00001999_rugbymen6_786x785.jpg"])

let rugby5 = new Piece("Série Rugbymen",
"1999, huile sur toile.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_rugbymmen5_1544x1540.jpg"])

let rugby6 = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_rugbymmen4_703x705.jpg"])

let rugby7 = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_rugbymen3_692x701.jpg"])

let rugby8 = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Paris.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_rugbymen2_818x827.jpg"])

let rugby9 = new Piece("Série Rugbymen",
"1999, huile sur toile, coll. part. Orcet.",
"20x20cm",
["../images/wall/paint/Figuratives/00001999_rugbymen_716x712.jpg"])

let cecile2 = new Piece("Cécile",
"1998, h.s.t., coll. personnelle.",
"90x116cm",
["../images/wall/paint/Figuratives/00001998_cecile_2193x2851.jpg"])




figurativePaintPiece.push(paysage,paysage2,sansTitre,sansTitre2,sansTitre3,sansTitre4,sansTitre5,mamie,grandMere,portraitDeF,portraitDeCara,doubleAutoportrait,autoportrait2,autoportrait3,autoportrait4,autoportrait5,autoportrait6,triptyquePerso,triptyquePerso2,triptyquePerso3,autoportrait7,autoportrait8,autoportrait9,autoportrait10,autoportrait11,personnages,personnages2,personnages3,personnages4,autoportrait12,portraitDeFemme,marraine,renaissance,leSonge,chloeC,tanteAM,tanteAM2,tanteAM3,mamie2,mamie3,mamian,maman,grandPere,grandPere2,grandPere3,tanteMarthe,tanteMarthe2,tanteAM4,tanteAM5,mereDA,mereDA2,mamie4,musulmanes,mondaines,grandPere4,grandPere5,timor,compagneDA,cecile,rugby,rugby2,rugby3,rugby4,rugby5,rugby6,rugby7,rugby8,rugby9,cecile2)

paintPiece.push(rubans,aquarelle,aquarelleCellules,aquarelleRubans2,aquarelleRubansEtCellules,aquarelleRubansEtCellules2,aquarelleRubansEtCellules3,aquarelleRubansEtCellules4,aquarelleRubansEtCellules5,mixtePapier,strates1,strates2,strates3,strates4,diptyque,chuteDesAngesRebelles,aquaGouache,aquaGouachePapier,aquaGouache2,portemencroixjbosch,huileRubans,paysage,paysage2,sansTitre,sansTitre2,sansTitre3,sansTitre4,sansTitre5,mamie,grandMere,portraitDeF,portraitDeCara,doubleAutoportrait,autoportrait2,autoportrait3,autoportrait4,autoportrait5,autoportrait6,triptyquePerso,triptyquePerso2,triptyquePerso3,autoportrait7,autoportrait8,autoportrait9,autoportrait10,autoportrait11,personnages,personnages2,personnages3,personnages4,autoportrait12,portraitDeFemme,marraine,renaissance,leSonge,chloeC,tanteAM,tanteAM2,tanteAM3,mamie2,mamie3,mamian,maman,grandPere,grandPere2,grandPere3,tanteMarthe,tanteMarthe2,tanteAM4,tanteAM5,mereDA,mereDA2,mamie4,musulmanes,mondaines,grandPere4,grandPere5,timor,compagneDA,cecile,rugby,rugby2,rugby3,rugby4,rugby5,rugby6,rugby7,rugby8,rugby9,cecile2)

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
      document.querySelector('.zoomOverlay img').setAttribute("src",paintPiece[data].srcTabPic[paintPiece[data].currentNumberPic-1])
    },

    picSelection : function(){

      pieceDisplay.nextPic.addEventListener('click',function(){
        if (paintPiece[data].currentNumberPic<paintPiece[data].totalNumberPic && data<paintPiece.length) {
          paintPiece[data].currentNumberPic++
          pieceDisplay.currentNumberPic.innerHTML = paintPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",paintPiece[data].srcTabPic[paintPiece[data].currentNumberPic-1])
          document.querySelector('.zoomOverlay img').setAttribute("src",ceramicPiece[data].srcTabPic[ceramicPiece[data].currentNumberPic-1])
        }
      })
      pieceDisplay.prevPic.addEventListener('click',function(){
        if (paintPiece[data].currentNumberPic>1 && data<paintPiece.length) {
          paintPiece[data].currentNumberPic--
          pieceDisplay.currentNumberPic.innerHTML = paintPiece[data].currentNumberPic
          pieceDisplay.img.setAttribute("src",paintPiece[data].srcTabPic[paintPiece[data].currentNumberPic-1])
          document.querySelector('.zoomOverlay img').setAttribute("src",ceramicPiece[data].srcTabPic[ceramicPiece[data].currentNumberPic-1])
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
