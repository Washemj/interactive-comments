
// post comment from bottom panel

var noOfComments = 4;
$('.btn1').click(function(){
  if  ($('.form-control').val() !== '') {
    noOfComments++;
    $('.modal').before('<div id="comment' + noOfComments + '" class="grid-container grid-container--you"> <div class="flex vote"> <img src="images/icon-plus.svg" alt="upvote"> <p class="purple">0</p> <img src="images/icon-minus.svg" alt="downvote"> </div> <picture class="user"> <source srcset="images/avatars/image-juliusomo.webp" type="image/webp"> <img src="images/avatars/image-juliusomo.png" alt="julius avatar"> </picture> <h3>juliusomo</h3><p class="you">you</p> <p class="time">A few seconds ago</p> <button class="red delete" data-bs-toggle="modal" data-bs-target="#modal"><img src="images/icon-delete.svg" alt="delete button"> Delete</button> <a class="purple" href="#"><img src="images/icon-edit.svg" alt="edit button"> Edit</a> <p class="comment"></p> </div>');
    // add typed text to new comment and delete typed text from text box
    $('#comment' + noOfComments + ' .comment').text($('.form-control').val());
    $('.form-control').val('');
    // add upvote and downvote js for this comment
    $('script[src="index.js"]').after('<script> var x = 0; $(\'#comment\'+noOfComments+ \' img[alt="upvote"]\').click(function(x){x = parseInt($(\'#comment\'+noOfComments+ \' .vote .purple\').text())+1; $(\'#comment\'+noOfComments+ \' .vote .purple\').text(x);})</script>');
    $('script[src="index.js"]').after('<script> $(\'#comment\'+noOfComments+ \' img[alt="downvote"]\').click(function(x){x = parseInt($(\'#comment\'+noOfComments+ \' .vote .purple\').text())-1;   $(\'#comment\'+noOfComments+ \' .vote .purple\').text(x);})</script>');
  }
})


// delete comment when delete clicked
//    if modal yes is clicked, delete comment (ids order?)
var currentComment = 0;
$('body').on('click','.grid-container--you .delete', function(){
  currentComment = parseInt($(this).parent().attr('id').replace(/\D/g,''));
})
$('body').on('click','.btn-danger', function(){
  $('#comment'+ currentComment).remove();
})

// bottom box come up below current item when reply is clicked and post text in box
//    if reply clicked, add same box as bottom of the pages
//    then post comment after something is typed and reply clicked
$('.grid-container--posted a').click(function(){
  currentComment = parseInt(this.id.replace(/\D/g,''));
  $('#comment'+ currentComment).after('<div class="grid-container grid-container--new"><div class="input-group"><textarea class="form-control" type="text" name="" value="" placeholder="Add a comment..."></textarea></div><picture class="user"><source srcset="images/avatars/image-juliusomo.webp" type="image/webp"><img src="images/avatars/image-juliusomo.png" alt="julius avatar"></picture><button class="btn btn1" type="button" name="button">Reply</button></div>');
})
$('body').on('click','.btn1', function(){
  if  ($('.form-control').val() !== '' && $(this).text() !== 'Update') {
    noOfComments++;
    var replyTo = $('#comment'+ currentComment + ' h3').text();
    if ($('#comment'+ currentComment).next().next().attr('class')=='reply'){
      $('#comment'+ currentComment).next().next().children().eq(-1).after('<div id="comment' + noOfComments + '" class="grid-container grid-container--you"> <div class="flex vote"> <img src="images/icon-plus.svg" alt="upvote"> <p class="purple">0</p> <img src="images/icon-minus.svg" alt="downvote"> </div> <picture class="user"> <source srcset="images/avatars/image-juliusomo.webp" type="image/webp"> <img src="images/avatars/image-juliusomo.png" alt="julius avatar"> </picture> <h3>juliusomo</h3><p class="you">you</p> <p class="time">A few seconds ago</p> <button class="red delete" data-bs-toggle="modal" data-bs-target="#modal"><img src="images/icon-delete.svg" alt="delete button"> Delete</button> <a class="purple" href="#"><img src="images/icon-edit.svg" alt="edit button"> Edit</a> <p class="comment"><span class="purple">@'+replyTo+' </span></p> </div>');
    } else if ($('#comment'+ currentComment).parent().attr('class')!=='reply'){
      $('#comment'+ currentComment).after('<div class="reply"><div id="comment' + noOfComments + '" class="grid-container grid-container--you"> <div class="flex vote"> <img src="images/icon-plus.svg" alt="upvote"> <p class="purple">0</p> <img src="images/icon-minus.svg" alt="downvote"> </div> <picture class="user"> <source srcset="images/avatars/image-juliusomo.webp" type="image/webp"> <img src="images/avatars/image-juliusomo.png" alt="julius avatar"> </picture> <h3>juliusomo</h3><p class="you">you</p> <p class="time">A few seconds ago</p> <button class="red delete" data-bs-toggle="modal" data-bs-target="#modal"><img src="images/icon-delete.svg" alt="delete button"> Delete</button> <a class="purple" href="#"><img src="images/icon-edit.svg" alt="edit button"> Edit</a> <p class="comment"><span class="purple">@'+replyTo+' </span></p> </div></div>');
    } else {
      $('#comment'+ currentComment).after('<div id="comment' + noOfComments + '" class="grid-container grid-container--you"> <div class="flex vote"> <img src="images/icon-plus.svg" alt="upvote"> <p class="purple">0</p> <img src="images/icon-minus.svg" alt="downvote"> </div> <picture class="user"> <source srcset="images/avatars/image-juliusomo.webp" type="image/webp"> <img src="images/avatars/image-juliusomo.png" alt="julius avatar"> </picture> <h3>juliusomo</h3><p class="you">you</p> <p class="time">A few seconds ago</p> <button class="red delete" data-bs-toggle="modal" data-bs-target="#modal"><img src="images/icon-delete.svg" alt="delete button"> Delete</button> <a class="purple" href="#"><img src="images/icon-edit.svg" alt="edit button"> Edit</a> <p class="comment"><span class="purple">@'+replyTo+' </span></p> </div>');
    }
    // add typed text to new comment and delete typed text from text box
    $('#comment' + noOfComments + ' .comment').append($('.form-control').val());
    // remove text box
    document.querySelector('.grid-container--new').remove();
    // add upvote and downvite js for this comment
    $('script[src="index.js"]').after('<script> var x = 0; var replies = 0; $(\'#comment\'+noOfComments+ \' img[alt="upvote"]\').click(function(x){x = parseInt($(\'#comment\'+noOfComments+ \' .vote .purple\').text())+1; $(\'#comment\'+noOfComments+ \' .vote .purple\').text(x);if ($(\'#comment\'+noOfComments).parent().attr(\'class\')==\'reply\'){replies = $(\'#comment\'+noOfComments).parent().children(); for (var i=0; i<replies.length; i++) {if ($(\'#comment\'+noOfComments).attr(\'id\')!==replies.eq(i).attr(\'id\')){ if ($(\'#comment\'+noOfComments+ \' .vote .purple\').text()>replies.eq(i).children(\'div\').children(\'p\').text()){$(\'#comment\'+noOfComments).insertBefore(\'#\'+replies.eq(i).attr(\'id\')); break;}}}}})</script>');

    $('script[src="index.js"]').after('<script> $(\'#comment\'+noOfComments+ \' img[alt="downvote"]\').click(function(x){x = parseInt($(\'#comment\'+noOfComments+ \' .vote .purple\').text())-1;   $(\'#comment\'+noOfComments+ \' .vote .purple\').text(x);if ($(\'#comment\'+noOfComments).parent().attr(\'class\')==\'reply\'){replies = $(\'#comment\'+noOfComments).parent().children(); for (var i=0; i<replies.length; i++) {if ($(\'#comment\'+noOfComments).attr(\'id\')!==replies.eq(i).attr(\'id\')){ if ($(\'#comment\'+noOfComments+ \' .vote .purple\').text()<replies.eq(i).children(\'div\').children(\'p\').text()){$(\'#comment\'+noOfComments).insertAfter(\'#\'+replies.eq(i).attr(\'id\'));}}}}})</script>');
  } else if ($('.form-control').val() !== '' && $(this).text() == 'Update'){
    newComment = $('#comment' + currentComment + ' .form-control').val();
    $('#comment' + currentComment + ' .form-control').remove();
    $('.grid-container--you a').after('<p class="comment"><span class="purple"></span></p>');
    $('#comment' + noOfComments + ' .comment').append(newComment);
    if (tag !==0) {
      $('#comment' + noOfComments + ' .comment').prepend('<span class="purple">'+tag+'  </span>');
    }
    $(this).remove();
    tag = 0;
  }
})

// text box is repopened when edit is clicked, and updated when button clicked
//    make text into a textbox, and make the current comment box the same as the box at the bottom
var oldComment = 0;
var newComment = 0;
var tag = 0;
$('body').on('click','.grid-container--you a', function(){
  currentComment = parseInt($(this).parent().attr('id').replace(/\D/g,''));
  oldComment =   $('#comment' + currentComment + ' .comment').text();
  if (oldComment[0] == '@') {
    tag = oldComment.split(' ')[0];
    oldComment = oldComment.substr(oldComment.indexOf(" ") + 1);
  }

   $('#comment' + currentComment + ' .comment').remove();
   $('.grid-container--you a').after('<textarea class="form-control" type="text" name="" value="" placeholder="Add a comment...">'+oldComment+'</textarea>');
   $('.grid-container--you textarea').css({'grid-area':'comment', 'min-height':'6rem'});

   $('.grid-container--you textarea').after('<button class="btn btn1" type="button" name="button">Update</button>')
   var th = $(this).parent();
   function myFunction(y, th) {
     if (y.matches) { // If media query matches
       th.css('grid-template-areas', '"vote user name you time . delete reply" "vote comment comment comment comment comment comment comment" ". . . . . . btn btn"');
     }
   }

   var y = window.matchMedia("(min-width:35em)");
   myFunction(y, th); // Call listener function at run time
   // x.addListener(myFunction); // Attach listener function on state changes
})


// clicking plus or minus changes number
var x = 0;
var replies = 0;
for (let step = 0; step < 4; step++){
  $('#comment'+(step+1)+ ' img[alt="upvote"]').click(function(x){
    x = parseInt($('#comment'+(step+1)+ ' .vote .purple').text())+1;
    $('#comment'+(step+1)+ ' .vote .purple').text(x);
    if ($('#comment'+(step+1)).parent().attr('class')=='reply'){
      replies = $('#comment'+(step+1)).parent().children();
      for(var i=0; i<replies.length; i++) {
        if ($('#comment'+(step+1)).attr('id')!==replies.eq(i).attr('id')){
          if ($('#comment'+(step+1)+ ' .vote .purple').text()>replies.eq(i).children('div').children('p').text()){
            $('#comment'+(step+1)).insertBefore('#'+replies.eq(i).attr('id'));
          }
        }
      }
    }
  })
  $('#comment'+(step+1)+ ' img[alt="downvote"]').click(function(x){
    x = parseInt($('#comment'+(step+1)+ ' .vote .purple').text())-1;
    if (x < 0) {
      $('#comment'+(step+1)+ ' .vote .purple').text(0);
  } else {
      $('#comment'+(step+1)+ ' .vote .purple').text(x);
      if ($('#comment'+(step+1)).parent().attr('class')=='reply'){
        replies = $('#comment'+(step+1)).parent().children();
        for(var i=0; i<replies.length; i++) {
          if ($('#comment'+(step+1)).attr('id')!==replies.eq(i).attr('id')){
            if ($('#comment'+(step+1)+ ' .vote .purple').text()<replies.eq(i).children('div').children('p').text()){
              $('#comment'+(step+1)).insertAfter('#'+replies.eq(i).attr('id'));
            }
          }
        }
      }
    }
  })
}
