var wins = 0;
var loss = 0;
var total = 0;

var firstNumber = Math.floor(Math.random() * 11 + 1);

var secondNumber = Math.floor(Math.random() * 11 + 1);

var thirdNumber = Math.floor(Math.random() * 11 + 1);

var fourthNumber = Math.floor(Math.random() * 11 + 1);

var startNumber = Math.floor(Math.random()* 101 + 19);



$('#first').append(firstNumber);
$('#second').append(secondNumber);
$('#third').append(thirdNumber);
$('#fourth').append(fourthNumber);

$('#start').append("You have to match the number: " + startNumber);

$("#first").click(function() {
    total = total + firstNumber;
     $('#total').text("Totals added: " + total);
    if (total === startNumber){
        $('#total').text("You won! The game has reset. Click to play again!")
        wins++;
        $("#wins").text("Wins: " + wins)
       
}
        if (total > startNumber){
            $('#total').text("The game has reset. Please try again.");
            loss++;
            $("#losscount").text("Losses: " + loss)
            reset();
        }

});

 $("#second").click(function() {
    total = total + secondNumber;
     $('#total').text("Totals added: " + total);

    if (total == startNumber){
        $('#total').text("You won! The game has reset. Click to play again!")
        wins++;
        $("#wins").text("Wins: " + wins)
        reset();
}
        if (total > startNumber){
            $('#total').text("The game has reset. Please try again.");
            loss++;
            $("#losscount").text("Losses: " + loss)
            reset();
        }

});


$("#third").click(function() {
    total = total + thirdNumber;
     $('#total').text("Totals added: " + total);

    if (total == startNumber){
        $('#total').text("You won! The game has reset. Click to play again!")
        wins++;
        $("#wins").text("Wins: " + wins)
        reset();
}
        if (total > startNumber){
            $('#total').text("The game has reset. Please try again.");
            loss++;
            $("#losscount").text("Losses: " + loss)
            reset();
           
        }

});



$("#fourth").click(function() {
    total = total + fourthNumber;
     $('#total').text("Totals added: " + total);
    if (total == startNumber){
        $('#total').text("You won! The game has reset. Click to play again!")
        wins++;
        $("#wins").text("Wins: " + wins)
        reset();
}
        if (total > startNumber){

            $('#total').text("The game has reset. Please try again.");
            loss++;
            $("#losscount").text("Losses: " + loss)
            reset();
        }

});

function reset(){


total = 0;
firstNumber = Math.floor(Math.random() * 11 + 1);
secondNumber = Math.floor(Math.random()* 11 + 1);
thirdNumber = Math.floor(Math.random() * 11 + 1);
fourthNumber = Math.floor(Math.random() * 11 + 1);
startNumber = Math.floor(Math.random()* 101 + 19);
$('#start').text("You have to match the number: " + startNumber);
   $('#first').text(firstNumber);
$('#second').text(secondNumber);
$('#third').text(thirdNumber);
$('#fourth').text(fourthNumber);

};