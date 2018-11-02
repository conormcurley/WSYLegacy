const name = document.getElementsByClassName('user');
const email = document.getElementsByClassName('email');
const message = document.getElementsByClassName('message');

$('.buynow').click(function(){
  var fullname = $(name).val();
  var emailcon = $(email).val();
  var mess = $(message).val();

  var number = Math.floor(Math.random() * 10000);
  var title = fullname + "." + number;
  var time = new Date()

  console.log(fullname + " " + number + " " + title + " " + time)


db.collection("messages").doc(title).set({
    name: fullname,
    email: emailcon,
    message: mess,
    time:time
})
.then(function() {
    $('.ans').html('Your message was sent successfully, one of our team will get back to you by email shortly.')
})
.catch(function(error) {
    $('.ans').html('Your message was not sent successfully, please try again.')
});
})
