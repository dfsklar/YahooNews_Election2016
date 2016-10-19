jQuery(document).ready(function($){
    imgsrc = new Array();
    imgsrc[0] = "images/people_alexandra_chalupa_a.jpg";
    imgsrc[1] = "images/people_alexandra_chalupa_b.jpg";
    imgsrc[2] = "images/people_khiz_khan_a.jpg";
    imgsrc[3] = "images/people_khiz_khan_b.jpg";
    imgsrc[4] = "images/people_karla_ortiz_a.jpg";
    imgsrc[5] = "images/people_karla_ortiz_b.jpg";
    imgsrc[6] = "images/people_mark_burns_a.jpg";
    imgsrc[7] = "images/people_mark_burns_b.jpg";
    imgsrc[8] = "images/people_bo_copley_a.jpg";
    imgsrc[9] = "images/people_bo_copley_b.jpg";
    imgsrc[10] = "images/people_pat_smith_a.jpg";
    imgsrc[11] = "images/people_pat_smith_b.jpg";
    imgsrc[12] = "images/people_harold_bornstein_a.jpg";
    imgsrc[13] = "images/people_harold_bornstein_b.jpg";
    imgsrc[14] = "images/people_jd_vance_a.jpg";
    imgsrc[15] = "images/people_jd_vance_b.jpg";
    imgsrc[16] = "images/people_gonzalo_curiel_a.jpg";
    imgsrc[17] = "images/people_gonzalo_curiel_b.jpg";
    imgsrc[18] = "images/people_serge_kovaleski_a.jpg";
    imgsrc[19] = "images/people_serge_kovaleski_b.jpg";
    imgsrc[20] = "images/people_ghazala_khan_a.jpg";
    imgsrc[21] = "images/people_ghazala_khan_b.jpg";
    imgsrc[22] = "images/people_katie_packer_a.jpg";
    imgsrc[23] = "images/people_katie_packer_b.jpg";
    imgsrc[24] = "images/people_julius_jones_a.jpg";
    imgsrc[25] = "images/people_julius_jones_b.jpg";
    imgsrc[26] = "images/people_liz_sullivan_a.jpg";
    imgsrc[27] = "images/people_liz_sullivan_b.jpg";
    imgsrc[28] = "images/people_jim_steinle_a.jpg";
    imgsrc[29] = "images/people_jim_steinle_b.jpg";
    imgsrc[30] = "images/people_bernie_bro_a.jpg";
    imgsrc[31] = "images/people_bernie_bro_b.jpg";


    // ADDED 20-OCT-2016 BY DFSKLARD: pre-highlight a specific one of the images
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var highlight_this_person = getParameterByName('highlight');
    if (highlight_this_person) {
        for (i = 0; i < imgsrc.length; i++) {
            if (imgsrc[i].indexOf(highlight_this_person) >= 0) {
                imgsrc[i] = imgsrc[i].replace('_a.jpg', '_c.jpg');
                imgsrc[i] = imgsrc[i].replace('_b.jpg', '_c.jpg');
                $('#'+highlight_this_person).find('img').attr('src', imgsrc[i]);
            }
        }
    }


    img = new Array();

    if (document.images) {
        for (i = 0; i < imgsrc.length; i++) {
            img[i] = new Image();
            img[i].src = imgsrc[i];
        }
    }

    panelSrc = new Array();
    panelSrc[50] = "gordondonovan.com/?p=11238";
    panelSrc[51] = "gordondonovan.com/?p=11238";
    panelSrc[52] = "gordondonovan.com/?p=11238";
    panelSrc[53] = "gordondonovan.com/?p=11238";
    panelSrc[54] = "gordondonovan.com/?p=11238";
    panelSrc[55] = "gordondonovan.com/?p=11238";
    panelSrc[56] = "#";
    panelSrc[57] = "http://gordondonovan.com/?cat=299";
    panelSrc[58] = "http://gordondonovan.com/?cat=299";
    panelSrc[59] = "http://gordondonovan.com/?cat=299";
    panelSrc[60] = "http://gordondonovan.com/?cat=299";
    panelSrc[61] = "http://gordondonovan.com/?cat=299";
    panelSrc[62] = "http://gordondonovan.com/?cat=299";
    panelSrc[63] = "http://gordondonovan.com/?cat=299";
    panelSrc[64] = "http://gordondonovan.com/?cat=299";
    panelSrc[65] = "http://gordondonovan.com/?cat=299";


    function doSomeStuff(whatVal)  {
        // parent.frametop.location = panelSrc[whatVal];
        var blurbToShow =$('#candidate-blurb-'+whatVal);
        var innerContents = blurbToShow.html();
        if (!innerContents) {
            innerContents = "<p><i>(Sorry we have no info about that candidate.)</i></p>";
        }
        $('#showcase').html(innerContents).addClass('showcase-visible');
    }

    function getAppVersion() {
        appname= navigator.appName;
        appversion = navigator.appVersion;
        majorver = appversion.substring(0, 1);
        if ( (appname == "Netscape") && ( majorver >= 3 ) ) return 1;
        if ( (appname == "Microsoft Internet Explorer") && (majorver >= 4) ) return 1;
        return 0;
    }

    function swtch(num, imgname) {
        if (getAppVersion()) {
            document[imgname].src = img[num].src;
        }
    }


    if (getAppVersion()) {
        img = new Array();
        for (i = 0; i < imgsrc.length; i++) {
            img[i] = new Image();
            if(imgsrc[i] != null) {
                img[i].src = imgsrc[i];
            }
        }
    }

});
