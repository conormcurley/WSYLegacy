const title = document.getElementsByClassName('quiztitle');
const imagecontainer = document.getElementsByClassName('productimage');
const buyop1 = document.getElementsByClassName('buyop1');
const buyop2 = document.getElementsByClassName('buyop2');
const description = document.getElementsByClassName('description');
const q1 = document.getElementsByClassName('q1');
const q2 = document.getElementsByClassName('q2');
const q3 = document.getElementsByClassName('q3');
const q4 = document.getElementsByClassName('q4');
const q5 = document.getElementsByClassName('q5');
const done = document.getElementsByClassName('done');



$(document).ready(function(){
  $('.welcome').css('display','block').hide().fadeIn();
  setTimeout(function(){
    $('.ready').css('display','block').hide().fadeIn();
    setTimeout(function(){
      $('.q1').css('display','block').hide().fadeIn();
      setTimeout(function(){
        $('.question1options').css('display','block').hide().fadeIn();
      },1000)
    },1000)
  },1000)
});

$('.info').click(function(){
  $('.messagesec').fadeOut().css('display','none');
  $('.responsesec').fadeOut().css('display','none');
  $('.help').css('display','block').hide().fadeIn();
})

$('.back').click(function(){
  $('.messagesec').css('display','block').hide().fadeIn();
  $('.responsesec').css('display','block').hide().fadeIn();
  $('.help').fadeOut().css('display','none');
})




$('.q1o').click(function(){
  $('.needhelp').css('display','none');
  $('.costhelp').css('display','block');
  var op1 = $(this).html();
  $('.o1').html(op1);
  var q1o = $(this).attr('class').split(' ').pop();
  console.log(q1o);
  if (q1o == 'q1o1') {
    var firstletter = 'A'
  } else if (q1o == 'q1o2') {
    var firstletter = 'B'
  } else if (q1o == 'q1o3') {
    var firstletter = 'C'
  } else if (q1o == 'q1o4') {
    var firstletter = 'D'
  } else if (q1o == 'q1o5') {
    var firstletter = 'E'
  } else {
    //nothing
  }
  console.log(firstletter);
  $('.o1').css('display','block').hide().fadeIn();
  $('.question1options').fadeOut().css('display','none');
  setTimeout(function(){
    $('.q2').css('display','block').hide().fadeIn();
    $("html, body").animate({ scrollTop: $('.messages').height() }, "fast");
    setTimeout(function(){
      $('.question2options').css('display','block').hide().fadeIn();
      $('.q2o').click(function(){
        $('.costhelp').css('display','none');
        $('.agehelp').css('display','block');
        var op2 = $(this).html();
        var q2o = $(this).attr('class').split(' ').pop();
        console.log(q2o);
        if (q2o == 'q2o1') {
          var secondletter = 'A'
        } else if (q2o == 'q2o2') {
          var secondletter = 'B'
        } else if (q2o == 'q2o3') {
          var secondletter = 'C';
        } else if (q2o == 'q2o4') {
          var secondletter = 'D'
        } else if (q2o == 'q2o5') {
          var secondletter = 'E'
        } else if (q2o == 'q2o6') {
          var secondletter = 'F'
        } else if (q2o == 'q2o7') {
          var secondletter = 'G'
        } else{

        }
        $('.o2').html(op2);
        $('.o2').css('display','block').hide().fadeIn();
        $('.question2options').fadeOut().css('display','none');
        setTimeout(function(){
          $('.q3').css('display','block').hide().fadeIn();
          $("html, body").animate({ scrollTop: $('.messages').height() }, "fast");
          setTimeout(function(){
            $('.question3options').css('display','block').hide().fadeIn();
            $('.q3o').click(function(){
              $('.agehelp').css('display','none');
              $('.factorhelp').css('display','block');
              var op3 = $(this).html();
              var q3o = $(this).attr('class').split(' ').pop();
              console.log(q3o);
              if (q3o == 'q3o1') {
                var thirdletter = 'A'
              } else if (q3o == 'q3o2') {
                var thirdletter = 'B'
              } else if (q3o == 'q3o3') {
                var thirdletter = 'C'
              } else if (q3o == 'q3o4') {
                var thirdletter = 'D'
              } else if (q3o == 'q3o5') {
                var thirdletter = 'E'
              }else{

              }
              $('.o3').html(op3);
              $('.o3').css('display','block').hide().fadeIn();
              $('.question3options').fadeOut().css('display','none');
              setTimeout(function(){
                $('.q4').css('display','block').hide().fadeIn();
                $("html, body").animate({ scrollTop: $('.messages').height() }, "fast");
                setTimeout(function(){
                  $('.question4options').css('display','block').hide().fadeIn();
                  $('.q4o').click(function(){
                    $('.factorhelp').css('display','none');
                    $('.genderhelp').css('display','block');
                    var op4 = $(this).html();
                    var q4o = $(this).attr('class').split(' ').pop();
                    console.log(q4o);
                    if (q4o == 'q4o1') {
                      var fourthletter = 'A'
                    } else if (q4o == 'q4o2') {
                      var fourthletter = 'B'
                    } else if (q4o == 'q4o3') {
                      var fourthletter = 'C'
                    } else if (q4o == 'q4o4') {
                      var fourthletter = 'D'
                    }else{

                    }

                    $('.o4').html(op4);
                    $('.o4').css('display','block').hide().fadeIn();
                    $('.question4options').fadeOut().css('display','none');
                    setTimeout(function(){
                      $('.q5').css('display','block').hide().fadeIn();
                      $("html, body").animate({ scrollTop: $('.messages').height() }, "fast");
                      setTimeout(function(){
                        $('.question5options').css('display','block').hide().fadeIn();

                        $('.q5o').click(function(){
                          $('.genderhelp').css('display','none');
                          var op5 = $(this).html();
                          var q5o = $(this).attr('class').split(' ').pop();
                          console.log(q5o);
                          if (q5o == 'q5o1') {
                            var fifthletter = 'A'
                          } else if (q5o == 'q5o2') {
                            var fifthletter = 'B'
                          } else{

                          }

                          $('.o5').html(op5);
                          $('.o5').css('display','block').hide().fadeIn();
                          $('.question5options').fadeOut().css('display','none');

                          setTimeout(function(){
                            $('.done').css('display','block').hide().fadeIn();
                            $("html, body").animate({ scrollTop: $('.messages').height() }, "fast");
                            var finalString = firstletter + secondletter + thirdletter + fourthletter + fifthletter;
                            console.log(finalString);

                            setTimeout(function(){
                              const docref = firestore.collection('shoes').doc(finalString);
                              docref.get().then(function (doc) {
                                if (doc && doc.exists) {
                                  const shoeData = doc.data();
                                  var shoename = shoeData.name;
                                  var desc = shoeData.description;
                                  var imgurl = shoeData.imgurl;
                                  var retailer1 = shoeData.retailer1name;
                                  var retailer2 = shoeData.retailer2;
                                  var retailer1link = shoeData.retailer1link;
                                  var retailer2link = shoeData.retailer2link;
                                  console.log(shoename);
                                  console.log(imgurl);
                                  $('.productname').html(shoename);
                                  $(".productimage").attr("src", imgurl);
                                  $('.productinfo').html(desc);
                                  $(".buylink1").attr("href", retailer1link);
                                } else {
                                  console.log('mistake');
                                }
                              })
                              $('.main').fadeOut().css('display','none');
                              $('.answer').css('display','block').hide().fadeIn();
                            },500)

                          },1000)
                        })
                      },1000)
                    },1000)
                  })
                },1000)
              },1000)
            })
          },1000)
        },1000)
      })
    },1000)
  },1000)
})
