const toggle = document.querySelector('.navbar__btn'),
      signPage = document.getElementById('signup'),
      quitIcon = document.querySelector('.quit__icon');

toggle.onclick = function(){
signPage.classList.add('active');
};

quitIcon.onclick = function(){
  signPage.classList.remove('active');
};