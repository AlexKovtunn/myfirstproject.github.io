const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');
const navBtnImg = document.getElementById("nav-btn-img")

navBtn.onclick = () => {
  //nav.classList.toggle('open');
  if (nav.classList.toggle('open')){
    navBtnImg.src = './img/svg/icons/nav-close.svg';
  }
  else{
    navBtnImg.src = './img/svg/icons/nav.svg';
  }
}


AOS.init({

  once: true
});
