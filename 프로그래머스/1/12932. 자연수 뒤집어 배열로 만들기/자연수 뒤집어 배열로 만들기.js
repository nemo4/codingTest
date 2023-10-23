function solution(n) {
    var answer = [];
    
    var nStr = n.toString();
    for(var i=(nStr.length-1); i>=0; i--){
        answer.push( parseInt(nStr.substr(i, 1)) );
    }
    
    return answer;
}