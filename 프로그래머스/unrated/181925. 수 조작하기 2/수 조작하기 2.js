function solution(numLog) {
    var answer = '';
    
    for(var i=0; i<numLog.length-1; i++){
        var diff = numLog[i+1] - numLog[i];
        answer += getChar(diff);
    }
    
    
    return answer;
}

function getChar(diff){
    switch(diff) {
        case 1:
            return 'w';
        
        case -1:
            return 's';
        
        case 10:
            return 'd';
        
        case -10:
            return 'a';
    }
}