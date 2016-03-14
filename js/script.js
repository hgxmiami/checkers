function setUpPieces() {
    //select all the divs with class 'piece'
    $(".piece").each(function(index, elem){
        if(index<12){
            $(elem).addClass("dark");
        } 
        else {
            $(elem).addClass("light");
        }
    })
    //add the 'light' class to half of them

    //add the 'dark' to the other half
    
}

function movePieceTo($piece,newTop,newLeft) {
    //set the css 'top' and 'left'
    //attributes of the passed piece
    
    //to the arguments newTop and newLeft
    
    $piece.css({top: newTop, left: newLeft});
    
}

function setUpBoard() {
    //iterate through all of the divs 
    //with class `square`
    //figure out whether each one should be
    //light or dark, and assign the proper class
    $("div").find(".square").each(function(index, elem){
        if(lightOrDark(index)===0){
            $(this).addClass("light");
        }
        else {
            $(this).addClass("dark");
        }
    });
    
    
    //heres a helper function that takes a number between
    //0 and 63 (inclusive) and returns 1 if the square should be
    //dark, and 0 if the square should be light
    function lightOrDark(index) {
        var x = index % 8;
        var y = Math.floor(index / 8);
        var oddX = x % 2;
        var oddY = y % 2;
        return (oddX ^ oddY);
    }
}

function toggleSelect($piece) {
    //if $piece has the class 'selected',
    //remove it
    if($piece.hasClass("selected")){
        $piece.removeClass("selected");
    }
    else {
        $("div").find(".piece").removeClass("selected");
        $piece.toggleClass("selected");
    }
    
    //if $piece does not have the class 'selected'
    //make sure no other divs with the class 'piece'
    //have that class, then set $piece to have the class
    
}

function incrementMoveCount() {
    //gets the html of the span with id
    //moveCount
    //turns it into a number
    //increments it by one
    //sets the html of the span with id moveCount
    //to the new move count
    var html = parseInt($("#moveCount").text()) + 1;
    $("#moveCount").html(html);
}