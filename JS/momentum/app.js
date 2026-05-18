const title = document.querySelector("div.hello:first-child h1");

//클릭했을 때 반응할 이벤트
function handleTitleClick(){
    title.style.color = "blue";
}

// click 했을 때 이벤트 설정 및 실행 함수 설정
title.addEventListener("click", handleTitleClick);