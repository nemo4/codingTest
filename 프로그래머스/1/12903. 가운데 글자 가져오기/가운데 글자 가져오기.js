function solution(s) {
    var answer = '';
    
    if(s.length%2 == 1){
        // Math.round 반올림 함수를 몰랐음.
        answer = s.substr(Math.round(s.length/2) -1, 1);
    }
    else{
        answer = s.substr((s.length/2) -1, 2);
    }
    
    return answer;
}