// function to decide what to do with what commnad
// and if command is valid or not.
function resolve_command(command) {
  if (command == 'clear') {
    $('.history p').remove()
  } else if (command == 'help') {
    printOut(help(), true);
  } else if (command == 'ls') {
    printOut(ls(), true);
  } else if (command.slice(0, 4) == 'cat ') {
    cat(command.slice(4))
  } else {
    printOut(command, false)
  }
}

//command help help
function help() {
  return "\
  help&emsp;--&emsp;opens this menu<br>\
  clear&emsp;--&emsp;clears the console<br>\
  ls&emsp;--&emsp;list files<br>\
  cat&emsp;--&emsp;prints content of file in console<br>\
  "
}


//ls command
function ls() {
  return "\
  about.txt&emsp;&emsp;contact.txt&emsp;&emsp;projects.txt\
  "
}


// cat command
function cat(fname){
  $.get('files/'+fname,function(data){
    console.log(data)
    if (['about.txt', 'contact.txt', 'projects.txt'].includes(fname) ){
      printOut(data,true)
    }
    else{
      printOut('<span class="error">No such file found!</span>',true);
    }
  });
}


// prints output returned by commnad functions
function printOut(out, success) {
  if (success) $('.history').append('<p class="success">' + out + ' </p>');
  else $('.history').append('<p class="error">Error: command not found!<br>see help</p>');
}

function updateScroll() {
  var element = document.getElementById("terminal");
  element.scrollTop = element.scrollHeight;
  element.scrollTop = element.scrollHeight;
}

$(function () {
  $('#cursor').blink(1)
  $(document).on("keypress", function (e) {
    if (e.key != "Enter") {
      $('#text').append(e.key);
    } else {
      var tmp = $('.command')[-1].clone();
      tmp.find('#cursor').remove();
      $('.history').append(tmp.removeClass('command').prop('outerHTML'));
      updateScroll()
      resolve_command($('#text').text());
      $('.history p #text').removeAttr('id');
      $('#text').text("")
    }
  })
});