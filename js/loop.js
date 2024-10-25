
let v_disp = document.querySelector('div');

//1부터 10까지의 합
function f_mun1(){
    let sum = 0;
    for(let i=1; i<=10; i++){
        sum += i;
    }
    console.log(sum);
    //출력영역으로 값 대입하기
    v_disp.innerText = sum;
}

// 1부터 200까지의 짝수의 합
function f_mun2(){

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    
    //case1
    for(let i=2; i<=200; i+=2){
        sum1 += i;
    }

    //case2
    for(let i=1; i<=200; i++){
        if(i%2 == 0){
            sum2 += i;
        }
    }
    
    //case3
    for(let i=1; i<=200; i++){
        if(i%2 != 0) continue;
        sum3 += i;
    }

    v_disp.innerText = sum1 + ", " + sum2 + ", " + sum3;
}

// 입력한 값을 계속 더하고, 사용자가 0을 입력하면 그때까지 누적된 값을 출력
function f_mun3(){
    
    let sum = 0; //값을 저장할 변수
    let str = ""; //입력된 내용을 저장할 변수
    while(true){
        let v_su = parseInt(prompt("수를 입력하세요")); //반환 타입 string->number변경
        
        //무한반복문에서는 반드시 빠져나갈 조건을 줄 것
        if(v_su == 0) break;

        sum += v_su; //문자열 결합 주의
        str += v_su + " "; //입력 값 구분을 위해 공백 추가
    }
    v_disp.innerText = "입력된 값: " + str + "/ 누적된 값: " + sum;
}

// 다중 for문을 이용해서 1~ 10 까지 중 
// i와 k의 더한 합이 3의 배수일 때만 출력 (continue사용)
function f_mun4(){
    
    let result = "";
    for(let i=1; i<=10; i++){
        for(let k=1; k<=10; k++){
            if( (i+k)%3 != 0 ) continue;
            // result += i + "+" + k + "=" + (i+k) + "<br>";
            //ES6 - backtick(`) 기호를 이용해서 한 문자열 안에 변수와 문자를 같이 표기할 수 있음
            //백틱안에서 변수는 '${}'안에 기술한다
            result += `${i} + ${k} = ${i+k} <br>`;
        }
    }
    // v_disp.innerHTML = result;
    v_disp.innerText = ""; //영역의 내용 초기화
    v_disp.insertAdjacentHTML("beforeend",result);
}

// 1~100 까지 중 2의 배수이면서 3의 배수인 것만 출력
function f_mun5(){
    let sum = "";
    for(let i=1; i<=100; i++){
        if( i%2 == 0 && i%3 == 0 ) sum += i + " "; //구분자 공백 추가
    }
    v_disp.innerText = sum;
}

// 입력(prompt)된 두 수의 합이 100이상일때만 출력 
// (continue를 이용 , 두수 모두 0이 입력되면 종료)
function f_mun6(){
    
    let result = "100이상의 수만 출력>> ";
    console.log(">>>>", parseInt(null)); //NaN
    
    while(!0){
        //취소 버튼을 눌렀을 때 반환되는 null이 정수형으로 타입변환시 NaN을 반환하므로
        // 현재 변수에 값을 담기전 정수처리를 미룸
        let v_su1 = prompt("수1 입력");
        let v_su2 = prompt("수2 입력");

        //빠져나갈 조건
        if(v_su1 == 0 && v_su2 == 0 || v_su1 == null) break;
        
        //NaN제외
        // if(isNaN(parseInt(v_su1)) || isNaN(parseInt(v_su2))) continue;
        let v_sum = parseInt(v_su1) + parseInt(v_su2);
        if(isNaN(v_sum)) continue;

        //v_sum의 결과가 100이상일때만 변수에 저장하기
        if(v_sum < 100) continue;
        result += v_sum + " ";
    }
    v_disp.innerText = result;
}