function solution(num) {
    var answer = 0;
    answer = calc(num, 0);
    
    return answer;
}

function calc(num, cnt){
    if(num == 1 && cnt == 1){
        return 1;
    }
    
    if(cnt >= 500){
        return -1;
    }
    
    
    if(num == 1){
        return cnt;
    }
    
    cnt += 1;
    
    if(num%2 === 0){
        num = num/2;
    }
    else{
        num = (num*3)+1;
    }
    
    return calc(num, cnt);
}