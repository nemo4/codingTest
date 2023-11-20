function solution(a, b, n) {
    var answer = 0;
    
    var sum = 0;
    var remain = 0;
    while(n>=a){
        var change = Math.floor(n/a) * b;
        remain = n%a;
        sum += change;
        n = change + remain;
    }
    
    answer = sum;
    
    
    return answer;
}