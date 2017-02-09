$(document).ready(function(){
    //add events handlers & code here
    //for wordpress, see differences in syntax

// SECTION 1 ======================================================================

    //BASIC SELECTORS
    // $('*').css('border', '1px solid grey');

    //BASIC ANIMATIONS
    $('.box:first').hide(500).delay(300).show(800);
    $('.box:nth-child(2)').slideUp(500).slideDown(800);
    $('.box:nth-child(3)').fadeOut(500).slideDown(800);
    // $('.box:nth-child(4)').animate({height: '200px'}, 300);
    // $('.box:nth-child(5)').animate({bottom: '200px', left: '200px'});

    //INDEX FILTERS
    $('#lesson-1 p:first').css('border', '1px solid red');

    //RELATIONSHIP FILTERS
    $('.box:empty').css('border', '1px solid blue');

    //ATTRIBUTE FILTERS
    //select this a tag and find where the href has '.co.uk' in the name, add css styling to it
    $('a[href$=".co.uk"]').css('border', '1px solid green');


// SECTION 2 ======================================================================

    //ATTR METHOD
    // select this, add the class of element to 'not-lead'
    $('p:first').attr('class', 'not-lead');



    //IMAGE SWAP
    $('img').fadeOut(1000, function(){
        $(this).attr('src','img2.jpg').fadeIn(1000);
    })


    //CLASS METHODS
    // alert($('p:first').addClass('lead'));
    // $('p:first').addClass('blue').removeClass('lead');

    // toggleClass acts as a boolean switch
    $('p').toggleClass('blue').removeClass('lead');


    //CONTENT METHODS
    $('#lesson-2 p:first').html('Hello <b>There!</b>');
    $('input').hide().show(1000).val('VALUE WAS SWAPPED');





// SECTION 3 ======================================================================

    //DOM TRAVERSAL
    //select the h2 in the section '#lesson-3', go up to the parents of 'section', go up to siblings of header, get the chilren inside of header, change border style
    $('#lesson-3 h2').parents('section').siblings('header').children().css('border', '1px solid green');


    //EVENT BINDING
    $('#lesson-3 h2').css('cursor', 'pointer').bind('click', function(){
        $(this).toggleClass('blue');
    })


})
