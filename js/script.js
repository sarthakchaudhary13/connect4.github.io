var quotes = ['“The purpose of our lives is to be happy." — <strong>Dalai Lama</strong>','“Life is what happens when you’re busy making other plans.” — <strong>John Lennon</strong>',
                '“Get busy living or get busy dying.” — <strong>Stephen King</strong>','“You only live once, but if you do it right, once is enough." — <strong>Mae West</strong>',
                    '"If you can'+"'t take risks, you can'"+'t create a future."-<strong>Monkey.D.Luffy</strong>','“when you don\'t create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.” - Unknown',
                 '"Impossible is for the unwilling." - John Keats','"Stay foolish to stay sane." - Maxime Lagacé'
             ,'“A man\'s mind, stretched by new ideas, may never return to its original dimensions.” - Oliver Wendell Holmes Jr.',
         '“Anyone who has never made a mistake has never tried anything new.” \- Albert Einstein',
            '“If you think education is expensive, try ignorance.” - Andy McIntyre']


var cycle = setInterval(change,4000);
$(".name").fadeOut()
ind = 0;
function change() {


    $(".quote").animate({'opacity':0}, 2000, function(){

    $(this).html(quotes[ind]).animate({'opacity': 1}, 2000);
    ind+=1;
    if(ind == quotes.length-1){ind=0}
});
}
$(".pic").hover(
    function(){
    $(this).animate({'opacity':0.5}, 100)
    $(".name").fadeIn(200)
},
    function() {
    $(this).animate({'opacity':1}, 100)
    $(".name").fadeOut(200)


});
$(window).scroll(function(){
    $(".navbar-inner").css("background","black")
    $(".navbar-inner").css("min-height","10px")

});
