function solution(arr) {
    var answer = 0;
    
    answer = arr.reduce((cal, a) => cal + a) / arr.length;
    
    return answer;
}