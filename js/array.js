// 리터럴방식 배열 생성
function f_arr1(){

    // 자바스크립트는 하나의 배열에는 여러가지 타입정보를 모두 저장할 수 있음
    let v_arr = ['사과',123,"바나나",12.34,null,"딸기",undefined,true];

    document.querySelector('div').innerText =v_arr;     //배열값 그대로 출력
}
    
    //생성자 방식 배열 생성
function f_arr2(){
    let v_arr = new Array();
    v_arr[0] ='천혜향';
    v_arr[1] ='두리안';
    v_arr[2] ='샤인머스캣';
    v_arr[3] ='스타프루트';
        
    // 배열 값을 담을 변수 선언
    let v_str = "";
    for(let i=0;i<v_arr.length;i++){
        if(i>0) v_str += "-";   // 이모지 > window키 +;
        v_str += v_arr[i];
    } 
        
    document.querySelector('div').innerText =v_str;     //배열값 그대로 출력
    
}

function f_arr3(){
    let v_arr = new Array("참외","수박","복숭아");
    let v_str = "";
    /* for(let idx in v_arr){
        // console.log(v_arr[idx]);
        if(idx>0) v_str += "-"
        v_str += v_arr[idx];

    } */
    for(let arrVal of v_arr){
        if(count) v_str += "구분자"; //0-false, !0-true
        v_str += arrVal;
        count++;
    }
    document.querySelector('div').innerText = v_str;
}

