
study7={
    "민서현" : "경영학과",
    "이균서" : "컴퓨터교육과",
    "오서령" : "영어영문학과",
}

//객체에 새로운 항목 삽입하기
study7.이규원 = "7기"


study7.list=function(){
    //for (var a in study7)은 for (var a in this)와 동일하게 사용할 수 있다.
    //왜냐하면 해당 function은 study7이라는 객체에서 list라는 key값을 가진 함수로 선언된 것이기 때문에
    //다른 객체에서 사용하지 못하기 때문이다. 따라서 this를 사용하면 자동으로 javascript는
    //this를 '나를 선언한 객체'인 study7로 인식한다.
    for(var a in study7){
        document.write(this[a]+"<br>");
    }
}
//해당 함수를 실행 해보면 우리가 생성한 함수도 study7안에 list라는 key값,
//function의 value값을 가진 항목으로 삽입된 것을 볼 수 있다.

//만약 fuction부분을 출력하고 싶지 않다면? 
// if (a=='list') {continue;} 추가하기!
study7.list();

//객체에서 항목  삭제하기
delete study7.이규원;

//삭제되었는지 확인하기
study7.list();