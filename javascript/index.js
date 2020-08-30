function headerOnScroll() {
  window.addEventListener('scroll', function() {

    
      // Display Header
      if (window.scrollY >= document.getElementById('welcome_nav').offsetTop) {
        document.getElementById('header').setAttribute('style', 'display:grid;');
      } else {
        document.getElementById('header').setAttribute('style', 'display:none;');
      }

      // Set height of sections
      document.getElementById('body').style.height = (document.getElementById('welcome').clientHeight + 6 * (document.getElementById('welcome').clientHeight - 50)) + "px";
      //console.log('Welcome Height: ' + document.getElementById('welcome').clientHeight);
      let oldHeight = document.getElementById('welcome').clientHeight;
      document.getElementById('about').style.height = (oldHeight - 50) + 'px';
      document.getElementById('skills').style.height = (oldHeight - 50) + 'px';
      document.getElementById('experience').style.height = (oldHeight - 50) + 'px';
      document.getElementById('education').style.height = (oldHeight - 50) + 'px';
      document.getElementById('portfolio').style.height = (oldHeight - 50) + 'px';
      document.getElementById('contact').style.height = (oldHeight - 50) + 'px';


      let scroll = window.scrollY+185;

      // Highlight header tabs
      let colorOn = '#B8860B';
      let colorOff = 'white'
      if (scroll >= document.getElementById('about').offsetTop && scroll < document.getElementById('skills').offsetTop) {
        document.getElementById('welcome_about_a').setAttribute('style', 'color:white;');
        document.getElementById('about_a').setAttribute('style', 'color:'+colorOn+';');
        document.getElementById('skills_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('experience_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('education_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('portfolio_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('contact_a').setAttribute('style', 'color:'+colorOff+';');
      } else if (scroll > document.getElementById('skills').offsetTop && scroll < document.getElementById('experience').offsetTop) {
        document.getElementById('about_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('skills_a').setAttribute('style', 'color:'+colorOn+';');
        document.getElementById('experience_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('education_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('portfolio_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('contact_a').setAttribute('style', 'color:'+colorOff+';');
      } else if (scroll > document.getElementById('experience').offsetTop && scroll < document.getElementById('education').offsetTop) {
        document.getElementById('about_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('skills_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('experience_a').setAttribute('style', 'color:'+colorOn+';');
        document.getElementById('education_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('portfolio_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('contact_a').setAttribute('style', 'color:'+colorOff+';');
      } else if (scroll > document.getElementById('education').offsetTop && scroll < document.getElementById('portfolio').offsetTop) {
        document.getElementById('about_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('skills_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('experience_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('education_a').setAttribute('style', 'color:'+colorOn+';');
        document.getElementById('portfolio_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('contact_a').setAttribute('style', 'color:'+colorOff+';');
      } else if (scroll > document.getElementById('portfolio').offsetTop && scroll < document.getElementById('contact').offsetTop) {
        document.getElementById('about_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('skills_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('experience_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('education_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('portfolio_a').setAttribute('style', 'color:'+colorOn+';');
        document.getElementById('contact_a').setAttribute('style', 'color:'+colorOff+';');
      } else if (scroll > document.getElementById('contact').offsetTop) {
        document.getElementById('about_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('skills_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('experience_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('education_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('portfolio_a').setAttribute('style', 'color:'+colorOff+';');
        document.getElementById('contact_a').setAttribute('style', 'color:'+colorOn+';');
      } else {
        document.getElementById('welcome_about_a').setAttribute('style', 'color:black;');
      }

      profileAviActionOnScroll();
      aboutMeDividerAction()
      aboutMeContentAction();


  });
}

function jumpTo(tag) {
    let position = document.getElementById(tag).offsetTop - 50;
    //console.log('Element: ' + el);

    window.scroll({
      top: position, 
      left: 0,
      behavior: 'smooth'
  });
  //console.log('WindowY: ' + window.scrollY);
}

function profileAviActionOnScroll() {

  
  let div = document.getElementById('profile_avi_overlay');
  let img = document.getElementById('profile_avi_img');
  let abt = document.getElementById('about');

  let start = abt.offsetTop-300;
  let stop = abt.offsetTop - 50;


  console.log('start: ' + start);
  console.log('stop: ' + stop);
  console.log('Win scroll: ' + window.scrollY);
  console.log('IMG: ' + img.clientHeight);


  
  if ((window.scrollY >= start) && (window.scrollY <= stop)) {
    div.style.height = (img.clientHeight - (((window.scrollY-start) / (stop-start)) * img.clientHeight)) + 'px';
  } else if (window.scrollY < start) {
    div.style.height = img.clientHeight + 'px';
  } else {
    div.style.height = '0px';
  }
}

function aboutMeContentAction() {
  let div = document.getElementById('profile_content');
  let abt = document.getElementById('about');

  let start = abt.offsetTop-300;
  let stop = abt.offsetTop - 50;

  if ((window.scrollY >= start) && (window.scrollY <= stop)) {
    let op = ((window.scrollY-start)/(stop-start)) * 100;
    div.style.opacity = op + '%';
    console.log('opacity: ' + op);
  } else if (window.scrollY < start) {
    div.style.opacity = '0%';
  } else {
    div.style.opacity = '100%';
  }
}


function aboutMeDividerAction() {
  let div = document.getElementById('about_me_divider');
  let abt = document.getElementById('about');
  let abtme = document.getElementById('about_me');

  let start = abt.offsetTop-300;
  let stop = abt.offsetTop - 50;
  let px = abtme.clientWidth / 2;

  if ((window.scrollY >= start) && (window.scrollY <= stop)) {
    div.style.borderStyle = 'solid';
    div.style.width =  ((window.scrollY-start)/(stop-start))*px+ 'px';
  } else if (window.scrollY < start) {
    div.style.borderStyle = 'none';
    div.style.width = '0px';
  } else {
    div.style.borderStyle = 'solid';
    div.style.width = px + 'px';
  }
}


function main() {
  // for profile pic action
  let div = document.getElementById('profile_avi_overlay');
  let img = document.getElementById('profile_avi_img');
  div.style.width = img.clientWidth + 'px';
  div.style.maxHeight = img.clientHeight + 'px';
  div.style.minHeight = '0px';

  // for about me divider
  //div = document.getElementById('about_me_divider');
  //div.style.height = document.getElementById('about_me').clientHeight + 'px';


  headerOnScroll();






}

