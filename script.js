var quotes = ['“The purpose of our lives is to be happy." — <strong>Dalai Lama</strong>','“Life is what happens when you’re busy making other plans.” — <strong>John Lennon</strong>',
                '“Get busy living or get busy dying.” — <strong>Stephen King</strong>','“You only live once, but if you do it right, once is enough." — <strong>Mae West</strong>',
                '"If you want to live a happy life, tie it to a goal, not to people or things.”– <strong>Albert Einstein</strong>',
                '“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – <strong>Steve Jobs</strong>']


var index = 0;
$("#quote").fadeTo( 1, 0 );
setInterval( function(){
$( "#quote" ).stop().html( quotes[index] ).fadeTo( 500, 1, function(){
index++;
$( "#quote" ).delay( 400 ).fadeTo( 500, 0 );
if ( index == length.quotes - 1 ) {
index = 0;
};
} );
}, 1800 );
