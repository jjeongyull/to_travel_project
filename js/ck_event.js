  // 검색창 요소(.nav_search) 찾기
  const navSearchBtn = document.querySelector('.nav_btn--search');
  const navInputEl = document.querySelector('.nav_input');

  // 검색창 버튼을 클릭하면 실행
  navSearchBtn.addEventListener('click', function () {
    navInputEl.style.display = "block";
    navInputEl.style.width = "230px";
    navInputEl.style.animation = "dropOut .4s";
    navInputEl.classList.add('focused');
    navInputEl.focus();
    navSearchBtn.style.display = "none";
  });

  navInputEl.addEventListener('blur', function () {
    if (navInputEl.value === "") {
      navInputEl.classList.remove('focused');
      navInputEl.style.display = "none";
      navInputEl.style.width = "0";
      navInputEl.style.borderBottom = "none";
      navInputEl.style.animation = "dropIn .4s";
      navSearchBtn.style.display = "block";
    }
  });