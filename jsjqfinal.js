//Script written by Andrew Diep

//Function that is used to add to the winner's score
function scores(player) {
    if (player === "X") {
        //Adds one point and also useing fade in and fade out for #plusOneX
        //This is done just for the looks
        var num = parseInt($("#scoreX").text());
        $("#scoreX").text(num + 1);
        $("#plusOneX").fadeIn(500);
        $("#plusOneX").fadeOut(500);
    } else {
        //Adds one point and also useing fade in and fade out for #plusOneO
        //This is done just for the looks
        var num = parseInt($("#scoreO").text());
        $("#scoreO").text(num + 1);
        $("#plusOneO").fadeIn(500);
        $("#plusOneO").fadeOut(500);
    }
}


    //Everytime when the player enters a input this function will be called
    //This function is responsible for checking whether the person won.
function checkForWinner(player, all) {
    //Collecting all the values from the board
    var rowOne1 = $("#rowOne .one").text();
    var rowOne2 = $("#rowOne .two").text();
    var rowOne3 = $("#rowOne .three").text();

    var rowTwo1 = $("#rowTwo .one").text();
    var rowTwo2 = $("#rowTwo .two").text();
    var rowTwo3 = $("#rowTwo .three").text();

    var rowThree1 = $("#rowThree .one").text();
    var rowThree2 = $("#rowThree .two").text();
    var rowThree3 = $("#rowThree .three").text();

    //Using logic gates, we can determine who is the winner
    //For if statement, the code will call for #alert to announce the winner. The winning
    //slots will also be highlighted green and all the TicTacToe buttons will be disabled until
    //the click on the reset button. This is done to prevent any further unexpected errors
    //Horizontal Line
    // XXX|---|---
    if (rowOne1 === player && rowOne2 === player && rowOne3 === player){
        $("#rowOne .one, #rowOne .two, #rowOne .three").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        $(all).css("pointer-events", "none");
        scores(player);
    }

    // ---|XXX|---
    else if (rowTwo1 === player && rowTwo2 === player && rowTwo3 === player){
        $("#rowTwo .one, #rowTwo .two, #rowTwo .three").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        $(all).css("pointer-events", "none");
        scores(player);
    }

    // ---|---|XXX
    else if (rowThree1 === player && rowThree2 === player && rowThree3 === player){
        $("#rowThree .one, #rowThree .two, #rowThree .three").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        $(all).css("pointer-events", "none");
        scores(player);
    }



    //Vertical Line
    // X--|X--|X--
    else if (rowOne1 === player && rowTwo1 === player && rowThree1 === player){
        $("#rowOne .one, #rowTwo .one, #rowThree .one").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        $(all).css("pointer-events", "none");
        scores(player);
    }

    // -X-|-X-|-X-
    else if (rowOne2 === player && rowTwo2 === player && rowThree2 === player){
        $("#rowOne .two, #rowTwo .two, #rowThree .two").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        $(all).css("pointer-events", "none");
        scores(player);
    }

    // --X|--X|--X
    else if (rowOne3 === player && rowTwo3 === player && rowThree3 === player){
        $("#rowOne .three, #rowTwo .three, #rowThree .three").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        $(all).css("pointer-events", "none");
        scores(player);
    }



    //Cris Cross Line
    // X--|-X-|--X
    else if (rowOne1 === player && rowTwo2 === player && rowThree3 === player){
        $(all).css("pointer-events", "none");
        $("#rowOne .one, #rowTwo .two, #rowThree .three").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        scores(player);
    }

    // --X|-X-|X--
    else if (rowOne3 === player && rowTwo2 === player && rowThree1 === player){
        $(all).css("pointer-events", "none");
        $("#rowOne .three, #rowTwo .two, #rowThree .one").css("background-color", "#beeab2");
        $("#alert").text("Player " + player + " won!");
        $("#alert").css("background-color", "#beeab2");
        $("#alert").fadeIn(300);
        scores(player);
    }
}

//The function checkX is there to make sure that whatever the use pressed, it is a empty slot.
//If the slot was not empty, the code will call #alert to display a warning message that the slot
//has been occupied. If the slot is empty, the code will stamp in X or O and continue to call the
//checkForWinner function.
function checkX(thisObj, str1, str2, all) {
    if (thisObj.text().trim() === str2){
        $("#alert").text("Opponent has taken that spot")
        $("#alert").css("background-color", "#e2a8a8");
        $("#alert").fadeIn(600);
    }
    else if (thisObj.text().trim() === str1){
        $("#alert").text("You has taken that spot")
        $("#alert").css("background-color", "#e2a8a8");
        $("#alert").fadeIn(600);
    }
    else {
        $("#alert").fadeOut(300);
        if (str1 === "X") {
            thisObj.html("X");
            thisObj.css("color", "blue");
            checkForWinner("X", all);

        }
        else {
            thisObj.text("O");
            thisObj.css("color", "red");
            checkForWinner("O", all);
        }
        return true;
    };
}

//When the document is ready (The first thing JS will run)
$("document").ready(function() {
    //Important constant that contains all the Tic Tac Toe button names
    const allTicTacToe = "#rowOne .one, #rowOne .two, #rowOne .three, #rowTwo .one, #rowTwo .two, #rowTwo .three, #rowThree .one, #rowThree .two, #rowThree .three";
    //When player clicked on the reset button
    $("#reset").click(function () {
        //Hides the body (Just for looks)
        $("body").fadeOut(200);
        //Reset all the TicTacToe buttons
        $(allTicTacToe).css("pointer-events", "auto");
        $(allTicTacToe).text("");
        $(allTicTacToe).css("background-color", "tan");
        $("#alert").css("display", "none");
        //Body reappears
        $("body").fadeIn(200);
    });
    //Player determines who is currently playing (1 = Player X, 2 = Player O
    var player;
    //Asks the user who is playing first then it assigns the value to userStr
    var userStr = window.prompt("Who wants to go first? Type X or O");
    if (userStr === "X" || userStr === "x"){
        //Player 1 is Player X
        player = 1;
        $("#PlayerOne").css("background-color", "#beeab2");
    }
    else{
        //Player 2 is Player O
        player = 2;
        $("#PlayerTwo").css("background-color", "#beeab2");
    }
    //Event when hover, will create a box shadow
    $("#reset, " + allTicTacToe).hover(function () {
        $(this).css("box-shadow", "5px 5px 5px #888");
    })
    //Event when mouse leave, the box shadow is gone
    $("#reset, " + allTicTacToe).mouseleave(function () {
        $(this).css("box-shadow", "0px 0px 0px #888");
    })
    //When a player clicks on one of the buttons in the tic tac toe
    $(allTicTacToe).click(function() {
        if (player === 1) {
            //If it is Player X's turn
            if (checkX($(this), "X", "O", allTicTacToe)){
                //Switch position
                player = 2;
                $("#PlayerTwo").css("background-color", "#beeab2");
                $("#PlayerOne").css("background-color", "#cbcacd");
            }
        }
        else {
            //If it is Player O's turn
            if (checkX($(this), "O", "X", allTicTacToe)){
                //Switch position
                player = 1;
                $("#PlayerOne").css("background-color", "#beeab2");
                $("#PlayerTwo").css("background-color", "#cbcacd");
            }
        }
    });

})