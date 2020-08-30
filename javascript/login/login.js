function email_check() {
  var email = document.getElementById('email').value;
  
}

function check_length(input) {
  if (input.length >= 8) { return true;}
  else { return false; }
}

function check_capital_letter(input) {
  var valid=false;
  var i;
  for (i=0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90 ) {
      valid = true;
      break;
    }
  }
  return valid;
}

function check_numeric_character(input) {
  var valid=false;
  var i;
  for (i=0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57 ) {
      valid = true;
      break;
    }
  }
  return valid;
}

function check_special_character(input) {
  var valid=false;
  var i;
  for (i=0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 33 && input.charCodeAt(i) <= 47 ) {
      valid = true;
      break;
    }
  }
  return valid;
}

function validate()
{
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');

  var input = document.getElementById('password').value;

  var check0=false;
  var check1=false;
  var check2=false;
  var check3=false;

  if (check_length(input)) {
    img1.src='/img/login/check_green1.png';
    check0=true;
  }
  else {
  img1.src='/img/login/check_grey1.png';
  check0=false;
  }

  if (check_capital_letter(input)) {
    img2.src='/img/login/check_green1.png';
    check1=true;
  }
  else {
    img2.src='/img/login/check_grey1.png';
    check1=false;
  }

  if (check_numeric_character(input)) {
    img3.src='/img/login/check_green1.png';
    check2=true;
  }
  else {
    img3.src='/img/login/check_grey1.png';
    check2=false;
  }

  if (check_special_character(input)) {
    img4.src='/img/login/check_green1.png';
    check3=true;
  }
  else {
    img4.src='/img/login/check_grey1.png';
    check3=false;
  }

  if (check0 && check1 && check2 && check3) {
    document.getElementById('button').disabled = false;
    document.getElementById('button').style.backgroundColor = '#D1E8E2';
  }
  else {
    document.getElementById('button').disabled = true;
    document.getElementById('button').style.backgroundColor = 'darkgrey';
  }
}
