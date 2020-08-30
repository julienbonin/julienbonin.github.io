<!DOCTYPE html>
<html>
  <head>
    <title>Test Page For Login/Registration</title>
    <link rel="stylesheet" href="/css/login.css">
    <script type="text/javascript" src="/javascript/login/login.js"></script>
  </head>

  <body>
    <div class="main_login_div">
      <form>
          <input type="text" id="email" placeholder="email" onfocusout="email_check()" required>
          <input type="password" id="password" onkeyup="validate()" placeholder="Password" required>

          <button type="submit" id="button" disabled=true >Submit</button>
      </form>

      <div class="requirements_div">
        <div class="requirements_inner_div">
          <img class="img1" id="img1" src="/img/login/check_grey1.png"><p3 id="x">Minimum Length - 8 characters</p3>
          <img class="img2" id="img2" src="/img/login/check_grey1.png"><p3>1 Uppercase Letter</p3>
          <img class="img3" id="img3" src="/img/login/check_grey1.png"><p3>1 Number</p3>
          <img class="img4" id="img4" src="/img/login/check_grey1.png"><p3>1 Special Character</p3>
        </div>
      </div>

    </div>

  </body>
</html>
