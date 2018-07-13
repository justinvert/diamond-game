# Diamond Game

The objective of this game is to click on the dimaonds provided and match the randomly generated number. The diamond numbers themselves are randomly generated as well. If the user correctly adds up to that amount, they win, adding a win to their score. If the user goes over the amount of the randomly generated number, then that counts as a loss and they lose that particular round.

# Generating the numbers
In order to create five random numbers (One for the amount to be matched, and the rest for the diamonds), the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">Math.random()</a> function is used.
```
var firstNumber = Math.floor(Math.random() * 11 + 1);

var secondNumber = Math.floor(Math.random() * 11 + 1);

var thirdNumber = Math.floor(Math.random() * 11 + 1);

var fourthNumber = Math.floor(Math.random() * 11 + 1);

var startNumber = Math.floor(Math.random()* 101 + 19);
```


# Counting Wins and Losses

To start the game, everything must be set to 0. This step is important for adding numbers and keeping track of wins and losses as the game goes on. Three global variables are declared, all of which are changed as the user clicks on a specific diamond, wins or losses.
```
var wins = 0;
var loss = 0;
var total = 0;
```

# Reset

Since we do not want the numbers to keep the last values after a win or loss, a reset function is created towards the end of the script. 
```
function reset(){
total = 0;
firstNumber = Math.floor(Math.random() * 11 + 1);
secondNumber = Math.floor(Math.random()* 11 + 1);
thirdNumber = Math.floor(Math.random() * 11 + 1);
fourthNumber = Math.floor(Math.random() * 11 + 1);
startNumber = Math.floor(Math.random()* 101 + 19);
};
```