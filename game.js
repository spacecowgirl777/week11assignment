
/* starting game with the player move, a click makes an x appear on the button and also disables it, i is incremented to denote
another move has been made, then the computer's turn is automatically called */
$(".cell").on("click", function () {
    $(this).html("x");
    $(this).prop("disabled",true);
    betaSelect ();
})
/*computer randomly picks a number from 1 to 9, this is then converted to a string and used as a jquery
selector to make a move i.e. place an "o" on the board, disable that square, and increment i. */
function computerSelect () {
    min = 1;
    max = 9;
    number = Math.floor(Math.random()*(max-min+1)+min);
    console.log(number);
    move = `#${number.toString()}`;

    if ($(move).html() == "x") {
    number = Math.floor(Math.random()*(max-min+1)+min);
    console.log(number);
    move = `#${number.toString()}`;
    }
    console.log(move);
    $(move).html("o");
    $(move).prop("disabled",true);

   
}

function betaSelect () {
    var i = 0;
    if (i > 9) {console.log("oops")}
    else {
        do {
        min = 1;
        max = 9;
        number = Math.floor(Math.random()*(max-min+1)+min);
        move = `#${number.toString()}`;
        console.log("attempt at tile" + move);
        i++;
    }   while ($(move).html() == "x" || $(move).html() == "o");}


    console.log(move);
    $(move).html("o");
    $(move).prop("disabled",true);

} 

