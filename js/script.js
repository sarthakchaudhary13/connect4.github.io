var quotes = ['“The purpose of our lives is to be happy." — <strong>Dalai Lama</strong>','“Life is what happens when you’re busy making other plans.” — <strong>John Lennon</strong>',
                '“Get busy living or get busy dying.” — <strong>Stephen King</strong>','“You only live once, but if you do it right, once is enough." — <strong>Mae West</strong>',
                    '"If you can'+"'t take risks, you can'"+'t create a future."-<strong>Monkey.D.Luffy</strong>' ]


var cycle = setInterval(change,4000);
$(".name").fadeOut()
function change() {


    $(".quote").animate({'opacity':0}, 2000, function(){

    $(this).html(quotes[Math.floor(Math.random()*quotes.length)]).animate({'opacity': 1}, 2000);
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
if ($('nav').scrollTop() === 0){
    $(".navbar-inner").css("min-height","100px")
    $(".navbar-inner").css("background","transparent")
}
