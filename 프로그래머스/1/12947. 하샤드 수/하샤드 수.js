function solution(x) {
    var answer = true;
    
    var sum = 0;
    x.toString().split('').forEach((n)=>{
        // 실수코드
        //sum += n;
        sum += Number(n);
    });
    answer = (x % sum == 0) ? true : false;
    
    return answer;
}