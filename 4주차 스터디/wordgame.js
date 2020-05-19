//html에 있는 내용 받아오기
const inputtag = document.getElementById("input");
const wordsdiv = document.getElementById("words");
const warningd = document.getElementById("warning");
const lifecntd = document.getElementById("lifecnt");
const formbttn = document.getElementById("formBtn");

let wordlist = ["성균관대학교"]; //중복단어리스트

let life = 3;
let lastInput = wordlist[0]; // 마지막에 입력한 단어

formbttn.onclick = (event) => {
    warningd.textContent = "";
    // 자동 새로고침 방지
    event.preventDefault();

    // 1. 사용자가 입력한 값을 읽어 변수(userInput)에 넣기

    // 2. if-else 문으로 끝말잇기 로직 구현하기
    // hint) 마지막 글자로 시작하는지, 그리고 중복된 입력이 아닌지 확인
    if ( ) {
        
    } else {
        
    }

    // 3. input 태그 값 공백으로 만들기 & 입력 후에도 자동으로 커서가 위치하게 하기
    

    // 라이프 표시 부분
    lifecntd.textContent = "💖".repeat(life) + "💔".repeat(3 - life);
    if (!life) alert("목숨이 남아있지 않습니다...\n새로고침을 눌러주세요..");
};