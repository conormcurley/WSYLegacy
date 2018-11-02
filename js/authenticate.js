{
  // inputs

  var firstName = document.getElementById('firstName')
  var lastName = document.getElementById('lastName')
  var businessName = document.getElementById('businessName')
  var businessEmail = document.getElementById('businessEmail')
  var addressLineOne = document.getElementById('addressLineOne')
  var addressLineTwo = document.getElementById('addressLineTwo')
  var town = document.getElementById('town')
  var eircode = document.getElementById('eircode')
  var password = document.getElementById('password')
  var confirmPassword = document.getElementById('confirmPassword')



  //checks (Boolean)

  var passwordCheck;

  // buttons

  var submitButton = document.getElementById('submitButton')

  // functions

  function checkPassword(){
    var passwordValue = password.value
    var confirmPasswordValue = confirmPassword.value

    if (passwordValue == confirmPasswordValue) {
      passwordCheck = true
      console.log(passwordCheck);
      $('#toolPass').css('display','none')
      $('#password').removeClass('wrongPassword')

    } else {
      $('#toolPass').css('display','block')
      $('#toolPass').find('.tooltipText').html('Passwords do not match')
      $('#password').addClass('wrongPassword')
    }
  }

  // function for adding users

  function addUser() {

    console.log('launch')

    // gather values

    var firstNameValue = firstName.value
    var lastNameValue = lastName.value
    var businessNameValue = businessName.value
    var email = businessEmail.value
    var addressLineOneValue = addressLineOne.value
    var addressLineTwoValue = addressLineTwo.value
    var townValue = town.value
    var eircodeValue = eircode.value
    var passwordValue = password.value
    var confirmPasswordValue = confirmPassword.value

    //run functions

    checkPassword()

    if (passwordCheck = true) {
      $('.alert').css('display', 'block').hide().fadeIn();
      $('.loaderMaterial').css('display', 'block').hide().fadeIn();
      firebase.auth().createUserWithEmailAndPassword(email, passwordValue).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var uid = user.uid;
          db.collection('businessAccounts').doc(uid).set({
            firstName : firstNameValue,
            lastName : lastNameValue,
            businessName : businessNameValue,
            businessEmail : email,
            addressOne : addressLineOneValue,
            addressTwo : addressLineTwoValue,
            town : townValue,
            eircode : eircodeValue

          }).then(function() {
            $('.loaderMaterial').fadeOut().css('display', 'none');
            $('.finishedPane').css('display', 'block').hide().fadeIn();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
          console.log(uid)
        } else {

        }
      });
    }

  }



}
