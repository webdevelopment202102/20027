/*global $, alert, console, jQuery, remove_auto_backgorund */

/*$(function () {
    'use strict';
    $("html").niceScroll();
});*/

///////////////////  portfoloi  ////////////////

var porfolio_box     = Array.from(document.querySelectorAll('.portfolio .portfolio-cards .cards')),
    
    portfolio_buttons = Array.from(document.querySelectorAll('.portfolio .heading .portbutton button'));//foucs
    
var o;

for (o = 0; o < portfolio_buttons.length; o = o + 1) {
    
    // very simple problem here that you have to make the portfolio_buttonsbe
   // in loop be less < the real one upove because to resolve the index problem

    portfolio_buttons[o].onclick = function () {
        
        'use strict';
        
        $(document).ready(remove_auto_backgorund());
        
        this.classList.add('hoverbackground');
        
    };
}

function remove_auto_backgorund() {
    
    'use strict';
    portfolio_buttons.forEach(function (items) {
        items.classList.remove('hoverbackground');
    });
}

$(document).ready(function auto_fade() {
    
    'use strict';
    portfolio_buttons[0].ondblclick = function () {
        $(".cards").fadeIn(2000);
        console.log("asd");
    };

    portfolio_buttons[1].ondblclick = function () {

        $(".cards").fadeOut(2000, function () {
            
            $(".portfolio-cards").find(".bed").fadeIn(2000);
            
        });

    };
    
    portfolio_buttons[2].ondblclick = function () {
        $(".cards").fadeOut(2000, function () {
            
            $(".portfolio-cards").find(".door").fadeIn(2000);
            
        });
    };
    
    portfolio_buttons[3].ondblclick = function () {
        $(".cards").fadeOut(2000, function () {
            
            $(".portfolio-cards").find(".door").fadeIn(2000);
            
        });
    };
    
    portfolio_buttons[4].ondblclick = function () {
        $(".cards").fadeOut(2000, function () {
            
            $(".portfolio-cards").find(".table").fadeIn(2000);
            
        });
    };
});

///////////////////  portfoloi  ////////////////














///////////////////  team slide paragraph up and down  ////////////////
var team_members_buttons = Array.from(document.querySelectorAll(".team-mempers .team-first .team-info button"));

function removeclass() {

    'use strict';
    
    team_members_buttons.forEach(function (items) {
        items.classList.remove('activebackground');
    });
                  
} // remove the class from the buttons 

var r;

for (r = 0; r < team_members_buttons.length; r = r + 1) {
    
    team_members_buttons[r].onclick = function () {
      
        'use strict';
        
        removeclass();// remove the class from the buttons 
        
        this.classList.add("activebackground"); // adding the class on the clidked one
        
        $(".disapear-div").fadeOut(1000); // make all of them fade out

        $(this).siblings(".disapear-div").fadeIn(1000); // then make the siblings of the button apear


        // make the siblings that have class disapear-div fade-in after makeing the whole divs that has class disapear
        // display none
        
        
    };
    
}

///////////////////  team slide paragraph up and down  ////////////////

// acording

var open_acording_box      = Array.from(document.querySelectorAll(".frequently .questions .feq-box .up")), //slide up
    
    close_acording_box     = Array.from(document.querySelectorAll(".frequently .questions .feq-box .down")), // slide down
    
    ask_button    = Array.from(document.querySelectorAll(".questions .feq-box .max .ask .main")); // check button

$(document).ready(function acording_one_function() {
   
    'use strict';
    $(".max").slideUp(1000);// all the max make them none
    var p;
    
    for (p = 0; p < open_acording_box.length; p = p + 1) { // loop for the all colse buttons
        
        open_acording_box[p].onclick = function () {  // when click on it
            
            $(this).parent(".parent").siblings(".max").slideDown(1000);// this clicked make the sliblings of its parent block
            
            $(this).fadeOut(1000, function () { // its fadeout and function 
                
                $(this).siblings(".down").fadeIn(1000);
                
            });
            
        };
        
    }
    
});

$(document).ready(function acording_two_function() {
   
    'use strict';
    // all the max make them block
    var c;
    
    for (c = 0; c < close_acording_box.length; c = c + 1) { //same in upove
        
        close_acording_box[c].onclick = function () { //same in upove
            
         // $(".max").slideDown(1000);
            
            $(this).parent(".parent").siblings(".max").slideUp(1000);// this clicked make the sliblings of its parent none
            
            $(this).fadeOut(1000, function () { //same in upove
                
                $(this).siblings(".up").fadeIn(1000);
                
            });
            
        };
        
    }
    
});

$(document).ready(function checkfunction() {
   
    'use strict';

    var u;
    
    for (u = 0; u < ask_button.length; u = u + 1) { // loop for the end buttons
        
        ask_button[u].onclick = function () { // when ckick on it
          
            if ($(this).siblings("input").val() === '') { // if button sibling(input) value is empty 
                
                $(this).siblings("input").val(' we need a question'); // note if its empty
                
            } else {
                
                $(this).fadeOut(1000, function () { // if its not empty fadout the button and replace the querstions with massage
                    $(this).siblings("input").replaceWith("the question has been sent sucessfully").css.fontWeight = 'bold';
                });
            }
            //if ($(this).siblings(".inpu").val('')) {    //  val can work
        };
    }
});

// acording


// send complain
var complain_input = Array.from(document.querySelectorAll(".end .inside-end .end-box form input"))[0],
    
    complain_button = Array.from(document.querySelectorAll(".end .inside-end .end-box form input"))[1];

$(document).ready(function complain_function() {

    'use strict';
    
    complain_button.onclick = function () {
        
        if (complain_input.val() === '') {
            
            complain_input.val(' empty');
        } else {
            complain_input.val(' the complain has been send sucessfuly ');
            
            complain_button.parent().fadeOut(1000);
        }
    };
    
});

// send complain


















