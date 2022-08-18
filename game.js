//initialize array that we will push values to
var scoreArray = [];

/* starting game with the player move
a click makes an x appear on the button and also disables it
then the computer's turn is automatically called */
$(".cell").on("click", function () {
    
    $(this).html("x");
    $(this).prop("disabled",true);
    computerSelect();
})

$("#clear").on("click",function () {
    for(var i=1;i<10;i++) {
        space = `#${i}`;
        $(space).html("");
        $(space).prop("disabled",false);
    }

})

/* if there are any open spaces then a random number is selected from 1-9
convert to jquery id and assign to that space if that particular one is open*/

function computerSelect () {
    min = 1;
    max = 9;
    number = Math.floor(Math.random()*(max-min+1)+min);
    move = `#${number.toString()}`;
    if (!fullBoard() && $(move).html() == "") {
        $(move).html("o");
        $(move).prop("disabled",true);
    } else if (!fullBoard()) { 
        computerSelect ();
    } else {
        checkScores();
    };
         
}

function fullBoard () {
    if (($("#1").html() == "x" || $("#1").html() == "o")
    && ($("#2").html() == "x" || $("#2").html() == "o")
    && ($("#3").html() == "x" || $("#3").html() == "o")
    && ($("#3").html() == "x" || $("#3").html() == "o")
    && ($("#4").html() == "x" || $("#4").html() == "o")
    && ($("#5").html() == "x" || $("#5").html() == "o")
    && ($("#6").html() == "x" || $("#6").html() == "o")
    && ($("#7").html() == "x" || $("#7").html() == "o") 
    && ($("#8").html() == "x" || $("#8").html() == "o")
    && ($("#9").html() == "x" || $("#9").html() == "o"))
    {   
        return true;
    } else {
        
        return false;}
    
    

}

function checkScores () {
    for(var i=1;i<10;i++) {
        tag = `#${i}`;
        val = ($(tag).html());
        scoreArray.push(val);
    }
  
    var row1 = (scoreArray[0]+scoreArray[1]+scoreArray[2]);
    var row2 = (scoreArray[3]+scoreArray[4]+scoreArray[5]);
    var row3 = (scoreArray[6]+scoreArray[7]+scoreArray[8]);

    var col1 = (scoreArray[0]+scoreArray[3]+scoreArray[6]);
    var col2 = (scoreArray[1]+scoreArray[4]+scoreArray[7]);
    var col3 = (scoreArray[2]+scoreArray[5]+scoreArray[8]);

    var diag1 = (scoreArray[0]+scoreArray[4]+scoreArray[8]);
    var diag2 = (scoreArray[2]+scoreArray[4]+scoreArray[6]);
    

    if (row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2 == "ooo") {
        alert("You Lose!");
        
    }else if ((row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2) == "xxx") {
        alert("You Win!");
    } else if (scoreArray.length !== 9) {
        alert("Tie Game");
    }

   
    
    
}





