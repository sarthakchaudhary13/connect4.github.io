var player1 = "Player One";
var player1Color="blue";
var player1
var player2 = "Player Two";
var player2Color = "red";
var color = $("button").css("background-color");

player1 = prompt("Enter name of Player One, you will be Blue");
player2 = prompt("Enter name of Player Two, you will be Red");

var currentPlayer = 1;
var playerColor = player1Color;
var playerName = player1;


function returnColor(row,col)
{
    return $("table tr").eq(row).find("td").eq(col).find("button").css("background-color");
}

function checkBottom(col)
{
    var colour = returnColor(5,col);
    for (var row = 5; row>-1; row--)
     {
        colour = returnColor(row,col);
        if(colour==color)
        {
          return row;
        }
    }
}
function colorCheck(one,two,three,four)
{
    return (one===two && one===three && one===four && one!==color && one!= undefined);

}


function changeColor(col,row,color)
{
    return $("table tr").eq(row).find("td").eq(col).find("button").css("background-color",color);
}
function horizontalWinCheck()
{
    for (var row = 0; row < 6; row++)
    {
        for(var col = 0; col<4; col++)
        {
          if(colorCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3)))
          {
            return true;
          }
        }
    }
  }

    function verticalWinCheck()
    {
        for (var col = 0; col < 7; col++)
        {
            for(var row = 0; row<3; row++)
            {
              if(colorCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col)))
              {
                return true;
              }
            }
        }
      }


      function diagonalWinCheck()
      {
          for (var col = 0; col < 5; col++)
          {
              for(var row = 0; row<7; row++)
              {
                if(colorCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3)))
                {
                  return true;
                }
                else if (colorCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3)))
                {
                    return true;
                }
              }
          }
        }


        function gameEnd(Winner)
        {
            $('h2').text(Winner+" Won The Game").css("font-size","100px");
            $('h3').fadeOut("slow");
            $('h4').fadeOut("slow");
        }
$('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");

$("button").on("click", function()
{
  var col = $(this).closest("td").index();
  var availRow = checkBottom(col);

  changeColor(col,availRow,playerColor);

  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
  gameEnd(playerName);}

// If no win or tie, continue to next player
currentPlayer = currentPlayer * -1 ;

// Re-Check who the current Player is.
if (currentPlayer === 1) {
  playerName = player1;
  $('h3').text(playerName+": it is your turn, please pick a column to drop your blue chip.");
  playerColor = player1Color;
}else {
  playerName = player2
  $('h3').text(playerName+": it is your turn, please pick a column to drop your red chip.");
  playerColor = player2Color;
}

})
