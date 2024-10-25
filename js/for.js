let v_disp = document.querySelector('div');

function f_mun1(){
    let sum =0;
    for(let i=1;i<=10;i++){
        sum+=i;
    }
    console.log(sum);
    v_disp.innerText = sum;
}
function f_mun2(){
    let sum =0;
    for(let i=1;i<=200;i++){
        if(i%2==0) continue;
            sum+=i;
        
    }
    console.log(sum);
    v_disp.innerText = sum;
}
function f_mun3(){
    let sum=0;
    while(ture){
        let v_su = parseInt(prompt("수를 입력하세요"));
        
        // 무한반복문에서는 반드시 빠져나갈 조건을 줄것
        if(v_su == 0) break;
        
        sum += v_su;
        
    }
    v_disp.innerText = "누적된 값 : " + sum;
}
function f_mun4(){
    let result="";
    for(let i=1;i<=10;i++){
        for(let k=1;k<=10;k++){
            if((i+k)%3 !=0)continue;
            result +=i+k+" ";
        }
    }
}
function f_mun5(){
    alert("문제5번");
}
function f_mun6(){
    alert("문제6번");
}