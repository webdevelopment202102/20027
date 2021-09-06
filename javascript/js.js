/*global alert, console, myFunction, functiontoptop, downfunc, ontop, color, opa, changeopacity, but1, removepadd, scrollyy, clickbuttons,     */
/*


focusing on loooop please 
1-there is no = 
2-you have to wright like this lilili[u]
3- change between the p and u and j and t 


*/

/*small scren navbar creating */
var arrayname = ['home', 'home2', 'home3'];
var updiv = document.createElement("div");

updiv.classList.add("updiv"); //create updiv
    
var ululul = document.createElement("ul");
    
ululul.classList.add("ulldiv"); //create ul

var helpful  = Array.from(document.querySelectorAll(".helpful li"));//helpful ul for li lists counts
    


var icondiv = document.createElement("div");// div for iocns up

icondiv.classList.add("iconsup");// class for iocns up div

var icon1 = document.getElementById('i111');//icon1

var icon2 = document.getElementById('i2');//icon2


var s;

for (s = 0; s <= helpful.length; s = s + 1) { /*create ist less than 13*/
    //https://www.w3schools.com/js/js_arrays.asp
    var listes = document.createElement("li");/*create li*/
    
    ululul.appendChild(listes);//[4] li inside ul

    


}


/*ul li from the helpful div like the textcontent of the new li */


function setfunc() {
    'use strict';
    var newlistssssss  = Array.from(document.querySelectorAll(".updiv .ulldiv li"));
    
    newlistssssss[0].textContent = helpful[0].textContent;
    newlistssssss[1].textContent = helpful[1].textContent;
    newlistssssss[2].textContent = helpful[2].textContent;
    newlistssssss[3].textContent = helpful[3].textContent;
    newlistssssss[4].textContent = helpful[4].textContent;
    newlistssssss[5].textContent = helpful[5].textContent;
    newlistssssss[6].textContent = helpful[6].textContent;
    newlistssssss[7].textContent = helpful[7].textContent;
    newlistssssss[8].textContent = helpful[8].textContent;
    newlistssssss[9].textContent = helpful[9].textContent;
    newlistssssss[10].textContent = helpful[10].textContent;
    newlistssssss[11].textContent = helpful[11].textContent;
    newlistssssss[12].textContent = helpful[12].textContent;
    
    
    
}

setInterval(setfunc, 2000);
setInterval(clickbuttons, 2000);
function clickbuttons() {

    'use strict';
    
    var newlistssssss  = Array.from(document.querySelectorAll(".updiv .ulldiv li"));
    
    newlistssssss[0].onclick = function () {
        
        document.body.scrollTop = 100;
        
    };
    newlistssssss[1].onclick = function () {
        
        document.body.scrollTop = 800;
        
    };
    
    newlistssssss[2].onclick = function () {
        
        document.body.scrollTop = 800;
        
    };
    
}

/*ul li from the helpful div like the textcontent of the new li */

/*     append child   */

/*[1] UP inside body*/
document.body.appendChild(updiv);


//[2] icons div in side up div
updiv.appendChild(icondiv);

//icon[1]
icondiv.appendChild(icon2);


//icon[2]
icondiv.appendChild(icon1);


/*[3] ul inside up*/
updiv.appendChild(ululul);


//closeing function of navabr

var opennav  = document.querySelector(".smallnavbar .nav-menu i"),
    
    closenav = document.getElementById('i111');

function close() {
    "use strict";

    closenav.onclick = function () {
       
        document.querySelector(".updiv").style.display = 'none';
    
        document.querySelector(".lay-over-div-ul").style.display = 'none';
    };
}

close();

function open() {
    "use strict";

    opennav.onclick = function () {
       
        document.querySelector(".updiv").style.display = 'block';
    
        document.querySelector(".lay-over-div-ul").style.display = 'block';
    };
}

open();
/*small scren navbar creating */







var backdefr = document.querySelector(".fixed-navbar"),/*nav background*/
    
    aacolor = Array.from(document.querySelectorAll(".nav-menu ul li a")),/*scroll butns*/
    
    h1color = document.querySelector(".fixed-navbar h1"),/*h1 color*/
    
    abutton = document.querySelector(".but"),/*a button color*/
    
    smalnav = document.querySelector(".smallnavbar");


/*beside buttons vaaaar*/

var menudown = document.querySelectorAll('.mune-down .ul ul li');

/*beside buttons vaaaar*/


/*window.onscroll*/
window.onscroll = function () {
    
    'use strict';
    /*nav background*/
    if (document.body.scrollTop >= 600) {
        backdefr.classList.add("back");
        h1color.classList.add("headcolor");
        abutton.classList.add("headcolor");
        
        var lile = 1,
            oshe = 2;
        for (lile = 0; lile < aacolor.length; lile = lile + 1) {
            aacolor[lile].classList.add("headcolor");
        }
    }

    if (document.body.scrollTop <= 600) {
        backdefr.classList.remove("back");
        h1color.classList.remove("headcolor");
        abutton.classList.remove("headcolor");

        
        for (oshe = 0; oshe < aacolor.length; oshe = oshe + 1) {
            aacolor[oshe].classList.remove("headcolor");
        }
        
    }
    /*nav background*/
    
    
    
    
    /*small nav*/
    if (document.body.scrollTop >= 800) {
        
        var small  = document.querySelector(".master").classList.add("headcolor"),
            smalli = document.querySelector(" .nav-menu i").style.color = '#3498db',
            smallback = document.querySelector(".smallnavbar").classList.add("change");
    } else {
        var small  = document.querySelector(".master").classList.remove("headcolor"),
            smalli = document.querySelector(" .nav-menu i").style.color = '#fff',
            smallback = document.querySelector(".smallnavbar").classList.remove("change");
    }
    /*small nav*/
    
    
    
    /*scroll butns*/
    
    
    if (document.body.scrollTop >= 500) {
        color();
        aacolor[0].classList.add('diffrientcolor');
    }
    
    if (document.body.scrollTop >= 700) {
        color();
        aacolor[1].classList.add('diffrientcolor');
    }
    
    if (document.body.scrollTop >= 3000) {
        color();
        aacolor[2].classList.add('diffrientcolor');
    }
    
    if (document.body.scrollTop >= 7850) {
        color();
        aacolor[3].classList.add('diffrientcolor');
    }
    
    if (document.body.scrollTop >= 9950) {
        color();
        aacolor[4].classList.add('diffrientcolor');
    }
    
    if (document.body.scrollTop >= 12500) {
        color();
        aacolor[5].classList.add('diffrientcolor');
    }
    
    if (document.body.scrollTop >= 17000) {
        color();
        aacolor[6].classList.add('diffrientcolor');
    }
    
    
    
    /*scroll butns*/
    
    
    /*beside buttons*/
    if (document.body.scrollTop >= 2950) {
        removepadd();
        menudown[0].classList.add("padd");
    } else {
        menudown[0].classList.remove("padd");
    }
    
    if (document.body.scrollTop >= 6950) {
        removepadd();
        menudown[1].classList.add("padd");
    } else {
        menudown[1].classList.remove("padd");
    }
    
    if (document.body.scrollTop >= 9200) {
        removepadd();
        menudown[2].classList.add("padd");
    } else {
        menudown[2].classList.remove("padd");
    }
    
    if (document.body.scrollTop >= 15500) {
        removepadd();
        menudown[3].classList.add("padd");
    } else {
        menudown[3].classList.remove("padd");
    }
    
    if (document.body.scrollTop >= 16000) {
        removepadd();
        menudown[4].classList.add("padd");
    } else {
        menudown[4].classList.remove("padd");
    }
    
    if (document.body.scrollTop >= 17500) {
        removepadd();
        menudown[5].classList.add("padd");
    } else {
        menudown[5].classList.remove("padd");
    }
    
   /*beside buttons upupup*/
    
    
    
    /*scrollbutton upupup*/
    if (document.body.scrollTop < 700) {
            
        scrollyy.classList.add("opacityscroll1");
        
    } else {
        
        scrollyy.classList.remove("opacityscroll1");
    }
    /*اى حاجة خاصة بالسكرول لازم تبقى فيه الويندو سسكرول*/
    /*scrollbutton*/
    
};
/*window.onscroll*/


/*buttons function removing color*/
function color() {
    'use strict';
    
    aacolor.forEach(function (iteam) {
        iteam.classList.remove("diffrientcolor");
    });
    

    
}
/*buttons function removing color*/


/*auto scroll large*/
function scrollnavlarge() {
    'use strict';
    aacolor[0].onclick = function () {
        document.body.scrollTop = 0;
        color();
        this.classList.add("diffrientcolor");
    };
    aacolor[1].onclick = function () {
        document.body.scrollTop = 700;
        color();
        this.classList.add("diffrientcolor");
    };
    aacolor[2].onclick = function () {
        document.body.scrollTop = 4900;
        color();
        this.classList.add("diffrientcolor");
    };
    aacolor[3].onclick = function () {
        document.body.scrollTop = 7850;
        color();
        this.classList.add("diffrientcolor");
    };
    aacolor[4].onclick = function () {
        document.body.scrollTop = 10850;
        color();
        this.classList.add("diffrientcolor");
    };
    aacolor[5].onclick = function () {
        document.body.scrollTop = 12750;
        color();
        this.classList.add("diffrientcolor");
    };
    aacolor[6].onclick = function () {
        document.body.scrollTop = 17000;
        color();
        this.classList.add("diffrientcolor");
    };
}
scrollnavlarge();
/*auto scroll*/


/*auto scroll beside*/
function scrollnavlargebeside() {
    'use strict';
    
    menudown[0].onclick = function () {
        document.body.scrollTop = 2950;
        color();
        this.classList.add("diffrientcolor");
    };
    
    menudown[1].onclick = function () {
        document.body.scrollTop = 6950;
        color();
        this.classList.add("diffrientcolor");
    };
    
    menudown[2].onclick = function () {
        document.body.scrollTop = 9200;
        color();
        this.classList.add("diffrientcolor");
    };
    
    menudown[3].onclick = function () {
        document.body.scrollTop = 15500;
        color();
        this.classList.add("diffrientcolor");
    };
    
    menudown[4].onclick = function () {
        document.body.scrollTop = 16000;
        color();
        this.classList.add("diffrientcolor");
    };
    
    menudown[5].onclick = function () {
        document.body.scrollTop = 17500;
        color();
        this.classList.add("diffrientcolor");
    };

}
scrollnavlargebeside();
/*auto scroll beside*/


/*buttons function adding padding*/
function removepadd() {
    'use strict';
    
    menudown.forEach(function (itom) {
        itom.classList.remove("padd");
    });
}
/*buttons function adding padding*/




/*scrollbutton to top*/
var scrollyy = document.querySelector(".scrollbutton");
function up() {
    'use strict';

    document.body.scrollTop = 0;
   
}
up();
/*scrollbutton to top*/







/*mune button*/
var alistes   = Array.from(document.querySelectorAll(".fixed-navbar .but i")),
    mune = document.querySelector(".mune-down");

document.getElementById("boton").onclick = function () {
    'use strict';
    changeopacity();
};

function changeopacity() {
    
    'use strict';

    alistes[0].classList.toggle("opa");
    alistes[1].classList.toggle("opa");
    
    /*beside-nav-mune*/
    mune.classList.toggle("opa");

}

/*mune button*/


/////////////////// watch video

var carosl = document.querySelectorAll(".carousel-item .row .col-12 .d-lg-flex .lokaup  i"),

    vedddd = document.querySelector(".upvideo"),
    
    closebutton = document.querySelector(".upvideo .closevideo i"),
    
    lay = document.querySelector(".lay-over-div-ul");

function vediofunction() {
    
  
    "use strict";
    
    var f;
    
    for (f = 0; f < carosl.length; f = f + 1) {///////////// do not put = beside the < please
        
        carosl[f].onclick = function () {
           
            lay.classList.add("block");
            lay.classList.remove("none");
            
            vedddd.classList.add("block");
            vedddd.classList.remove("none");
            
            console.log("asd");
        };
    }
    
    closebutton.onclick = function () {
        
        lay.classList.add("none");
        lay.classList.remove("block");
        
        vedddd.classList.add("none");
        vedddd.classList.remove("block");
        
    };
}

vediofunction();
/////////////////// watch video


/////////////////// have section

var updivdiv                   = Array.from(document.querySelectorAll(".have .news .new1")),
    
    icons_inside_updivdiv      = document.querySelectorAll(".have .news .new1 .i-border"),
    
    h5_inside_updivdiv         = document.querySelectorAll(".have .news .new1 .col-9"),
    
    paragraph_inside_updivdiv  = document.querySelectorAll(".have .news .new1 .col-9");

function remove_class_from_updiv() {
    
    "use strict";
    
    updivdiv.forEach(function (item1) {
        
        item1.classList.remove("selected1");
        
    });
}

function remove_class_from_icon() {
    
    "use strict";
    
    icons_inside_updivdiv.forEach(function (item2) {
        
        item2.getElementsByTagName("i")[0].classList.remove("colorfirst");
        
    });
}

function remove_class_from_h5() {
    
    "use strict";
    
    h5_inside_updivdiv.forEach(function (item3) {
        
        item3.getElementsByTagName("h5")[0].classList.remove("colorsecond");
        
    });
}

function remove_class_from_paragraph() {
    
    "use strict";
    
    paragraph_inside_updivdiv.forEach(function (item4) {
        
        item4.getElementsByTagName("p")[0].classList.remove("colorthird");
        
    });
}

function selectedfunction() {
    
    'use strict';
    
    var t;
    
    for (t = 0; t < updivdiv.length; t  = t + 1) { //loop above the up div 
       
        updivdiv[t].onclick = function () { // click becasue whne it is clicked it is check for the one its has been clicked
          
            remove_class_from_updiv(); //function to remove the classname from the up div
            
            this.classList.add("selected1"); // the name of the class
            
            
            
            
            remove_class_from_icon(); //function to remove the classname from all icons
            
            var put_class_on_icon = this.getElementsByTagName("i")[0].classList.add("colorfirst");
            
            // get the TagName insied the up div and selected and but itis ow class and specifed 0 index
            
            
            
            remove_class_from_h5(); //function to remove the classname from all h5
            
            var put_class_on_h5 = this.getElementsByTagName("h5")[0].classList.add("colorsecond");

            // same in new 2
            
            
            
            remove_class_from_paragraph(); //function to remove the classname from the paragraph 
            
            var put_class_on_paragraph = this.getElementsByTagName("p")[0].classList.add("colorthird");

             // same in new 2
            
        };

    }
}

selectedfunction();

function services_clicls_to_scroll() {
    "use strict";
    
    updivdiv[0].ondblclick = function () { // dblclick becasue whne it is dbl it is scroll
        remove_class_from_updiv();
        this.classList.add("selected1");
        document.body.scrollTop = 2800;
    };
    updivdiv[1].ondblclick = function () { // dblclick becasue whne it is dbl it is scroll
        remove_class_from_updiv();
        this.classList.add("selected1");
        document.body.scrollTop = 3300;
        
    };
    updivdiv[2].ondblclick = function () { // dblclick becasue whne it is dbl it is scroll
        remove_class_from_updiv();
        this.classList.add("selected1");
        document.body.scrollTop = 3800;
    };
    updivdiv[3].ondblclick = function () { // dblclick becasue whne it is dbl it is scroll
        remove_class_from_updiv();
        this.classList.add("selected1");
        document.body.scrollTop = 4300;
    };
}
services_clicls_to_scroll();
/////////////////// have section











///////////////////  testmonials  ////////////////

var tesmonials_slides = Array.from(document.querySelectorAll(".testmonials .owl-carousel .tesmoinials-box")),// slides
    
    tesmonials_length =  tesmonials_slides.length,                                                           // slides length
    
    curentslide       = 1,                                                                                   // begin number
    
    ul_div_inside_owl_carousel = document.querySelector(".testmonials .owl-carousel ul");
                                                                        //the ul div that must contain and append the created list

var v;

for (v = 1; v <= tesmonials_length; v++) {                                //create loop lists equle to tesmonials_slides
    
    var list_inside_criclesbuttons = document.createElement("li");        // create 4 lists 
    
    list_inside_criclesbuttons.setAttribute('data-index', v);             // create dataindex by (m)
    
    ul_div_inside_owl_carousel.appendChild(list_inside_criclesbuttons);   // append lists to ul inside 
}

var lists_has_been_created = Array.from(document.querySelectorAll(".testmonials .owl-carousel .cricles li")),
                                                                          // the created lists
    l;

for (l = 0; l < lists_has_been_created.length; l++) {   // loop for the created lists  
    
    lists_has_been_created[l].onclick = function () { // if onclick will show the next slide
        
        "use strict";
        curentslide = parseInt(this.getAttribute('data-index')); // the parseInt make the string into number
        
        checker(); // the whole function make the whole slides buttons and the slides work
    };
}
checker();// the whole function make the whole slides buttons and the slides work must be work alone
function checker() {
    'use strict';
    remove_classlists_from_the_checker_func();
// the function remove class from the all up dv and the list

    tesmonials_slides[curentslide - 1].classList.add("activeclassofopacity");
// make the first slide appear
    
    ul_div_inside_owl_carousel.children[curentslide - 1].classList.add("activeco");
// make the firstlist have its own background
    
    
}


function remove_classlists_from_the_checker_func() {
    'use strict';
    tesmonials_slides.forEach(function (iteam) {
        iteam.classList.remove("activeclassofopacity");
    });
    lists_has_been_created.forEach(function (iteam) {
        iteam.classList.remove("activeco");
    });
} // the function remove class from the all up dv and the list
///////////////////  testmonials  ///////////////




////////////////////// counter 

var auto_counter = Array.from(document.querySelectorAll(".achivments .achiev-counter .achive-containear .head-counter"));
    
function begin_counter_func() {
    'use strict';
    
    var count_1 = setInterval(function () {
        
            
    
            auto_counter[0].innerHTML = ++auto_counter[0].innerHTML;
    
        }, 10);

    var count_2 = setInterval(function () {
        
            
    
            auto_counter[1].innerHTML = ++auto_counter[1].innerHTML;
    
        }, 50);

    var count_3 = setInterval(function () {
        
            
    
            auto_counter[2].innerHTML = ++auto_counter[2].innerHTML;
    
        }, 100);

    var count_4 = setInterval(function () {
        
            
    
            auto_counter[3].innerHTML = ++auto_counter[3].innerHTML;
    
        }, 150);

    setInterval(function () {
        
        clearInterval(count_1);
        clearInterval(count_2);
        clearInterval(count_3);
        clearInterval(count_4);
            
    }, 10000);

}

////////////////////// counter 

    
    